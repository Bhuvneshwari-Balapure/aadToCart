import { useState } from "react";
import axios from "axios";
const AddProduct = () => {
  const [input, setMyInput] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setMyInput((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "Website");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/bhuvneshwaricloud/image/upload",
      formData
    );
    const myimg = response.data.url;
    let api = "http://localhost:8000/products/productSave";

    axios.post(api, { ...input, images: myimg }).then((res) => {
      alert("Data save");
      console.log(res.data);
    });
  };
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4">Add Products (Enter Product Details)</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Brand</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={input.brand}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={input.category}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={input.price}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Rating</label>
            <input
              type="text"
              className="form-control"
              name="rating"
              value={input.rating}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Image</label>
            <input
              type="file"
              className="form-control"
              name="image"
              value={input.image}
              onChange={handleFileChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Discription</label>
            <input
              type="text"
              className="form-control"
              name="discription"
              value={input.discription}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Colors</label>
            <input
              type="text"
              className="form-control"
              name="colors"
              value={input.colors}
              onChange={handleInput}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default AddProduct;
