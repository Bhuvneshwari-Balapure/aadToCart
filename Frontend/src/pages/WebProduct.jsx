import { useState, useEffect } from "react";
import axios from "axios";
//card
import { Card, Button, Row, Col, Container } from "react-bootstrap";

//redux 
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const WebProduct = () => {
  const [myData, setMyData] = useState([]);
  //instance of dispatch 
  const dispatch = useDispatch();
  const loadData = () => {
    let api = "http://localhost:3000/products";
    axios.get(api, myData).then((res) => {
      setMyData(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Container>
        <h1 className="text-center my-4">Web Products</h1>
        <Row>
          {myData.map((product) => (
            <Col md={4} sm={6} xs={12} className="mb-4" key={product.id}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.brand}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Category:</strong> {product.category} <br />
                    <strong>Price:</strong> ${product.price.toFixed(2)} <br />
                    <strong>Rating:</strong> ⭐ {product.rating} <br />
                    <small>{product.description}</small>
                  
                  </Card.Text>
                  
                  <Button 
                    variant="primary" 
                    className="w-100"
                    onClick={()=>{dispatch(addToCart({...product,quantity:1}))}}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default WebProduct;
