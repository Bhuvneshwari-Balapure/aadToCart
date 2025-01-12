import { useSelector } from "react-redux";
import { Button, Table, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  DecreaseQuantity,
  IncreaseQuantity,
} from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const WebCart = () => {
  const cart = useSelector((state) => state.cart.cart2);
  const navigate = useNavigate();
  const checkout = () => {
    navigate("/website/checkOut");
  };
  console.log(cart);
  const dispatch = useDispatch();
  let netAmount = 0;
  let ans = cart.map(
    (product) => (
      (netAmount += product.price * product.quantity),
      (
        <tr key={product.id}>
          <td>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
            />
          </td>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.category}</td>
          <td>
            <small>{product.discription}</small>
          </td>
          <td>
            ⭐⭐
            <br />
            {product.rating}
          </td>
          <td>${product.price}</td>

          <td className="quantity">
            <Button
              variant="primary"
              onClick={() => {
                dispatch(IncreaseQuantity({ id: product.id }));
              }}
            >
              +
            </Button>

            <p>{product.quantity}</p>

            <Button
              variant="primary"
              onClick={() => {
                dispatch(DecreaseQuantity(product.id));
              }}
            >
              -
            </Button>
          </td>

          <td>{product.price * product.quantity}</td>

          <td>
            <Button
              variant="primary"
              onClick={() => dispatch(removeFromCart(product.id))}
            >
              Remove
            </Button>
          </td>
        </tr>
      )
    )
  );

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
              <th>Description</th>
              <th>Rating</th>
              <th>Price</th>

              <th>Increace/Decrease Quantity</th>
              <th>Total Amount</th>
              <th>Remove From Cart</th>
            </tr>
          </thead>
          <tbody>
            {ans}
            <tr>
              <th colSpan={8} style={{ fontSize: "30" }}>
                Total Net Amount :{" "}
              </th>
              <th>{netAmount}</th>
              <th>
                <Button onClick={checkout}>CheckOut</Button>
              </th>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default WebCart;
