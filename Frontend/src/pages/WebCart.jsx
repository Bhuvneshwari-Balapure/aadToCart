import { useSelector } from "react-redux";
import {  Button, Table, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart , DecreaseQuantity , IncreaseQuantity } from "../redux/cartSlice";
const WebCart = () => {
  const cart = useSelector((state) => state.cart.cart2);
  const dispatch = useDispatch();
  return (
    <>
      <Container>
        <h1 className="text-center my-4">Buy Products</h1>
        <Table bordered hover responsive className="text-center">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Increase Quantity</th>
              <th>Decrease Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100px", height: "100px", objectFit: "cover" }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>⭐ {product.rating}</td>
                <td>
                  <small>{product.description}</small>
                </td>
                <td>{product.quantity}</td>
                <td>
                <Button 
                    variant="primary"
                    onClick={()=>{dispatch(IncreaseQuantity(product.id))}}>
                    +
                  </Button>
                  </td>
                  <td>
                  <Button 
                   variant="primary"
                    onClick={()=>{dispatch(DecreaseQuantity(product.id))}}>
                    -
                  </Button>
                  </td>
                  <td>
                  <Button 
                    variant="primary"
                    onClick={()=>dispatch(removeFromCart(product.id))}
                    >Remove From Cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default WebCart;
