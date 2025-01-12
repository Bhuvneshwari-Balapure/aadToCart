import { useState, useEffect } from "react";

import axios from "axios";
const Display = () => {
  const [mydata, setMyData] = useState([]);

  const loadData = () => {
    let api = "http://localhost:8000/products/productDisplay";
    axios.get(api).then((res) => {
      setMyData(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    loadData();
    console.log(mydata);
  }, []);

  //delete button
  const myDel = (id) => {
    let api = "http://localhost:8000/products/productDelete";
    axios.post(api, { myid: id }).then((res) => {
      console.log(res.data);
      alert("Data Deleted");
    });
    loadData();
  };

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>
            <img src={key.image} height={150} width={150} />
          </td>
          <td>{key.name}</td>
          <td>{key.brand}</td>
          <td>{key.category}</td>
          <td>{key.price}</td>
          <td>{key.rating}</td>
          <td>{key.discription}</td>
          <td>{key.colors}</td>
          <td>
            <button
              onClick={() => {
                myDel(key._id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Product List</h2>
        <table className="table table-striped table-bordered table-responsive">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Brand</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Rating</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Colors</th>
              <th scope="col">Product Delete</th>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
