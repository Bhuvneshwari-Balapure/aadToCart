import { useState, useEffect } from "react";
import axios from "axios";
//card
import { Card, Button, Row, Col, Container } from "react-bootstrap";

//redux
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const WebProduct = () => {
  const [myData, setMyData] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    let api = "http://localhost:8000/products/productDisplay";
    axios
      .get(api)
      .then((res) => {
        const products = res.data.map((product) => ({
          ...product,
          id: product._id,
        }));
        setMyData(products);
        console.log(products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Web Products</h1>
      <Row>
        {myData.map((product) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
            <Card className="h-100 w-55 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.brand}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Category :</strong> {product.category} <br />
                  <strong>Price :</strong> ${product.price.toFixed(2)} <br />
                  <strong>Rating :</strong> ⭐⭐⭐⭐{product.rating} <br />
                  <strong>Color :</strong>
                  <small>{product.colors}</small>
                  <br />
                  <strong>Description :</strong>
                  <small>{product.discription}</small>
                </Card.Text>

                <Button
                  variant="primary"
                  className="w-100"
                  onClick={() => {
                    dispatch(addToCart({ ...product, quantity: 1 }));
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WebProduct;
