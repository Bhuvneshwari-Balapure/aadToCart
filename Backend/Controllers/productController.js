const productModel = require("../models/ProductModel");
const productSave = async (req, res) => {
  const {
    name,
    brand,
    category,
    price,
    rating,
    images,
    discription,
    colors,
  } = req.body;
  const Data = await productModel.create({
    name: name,
    brand: brand,
    category: category,
    price: price,
    rating: rating,
    image: images,
    discription: discription,

    colors: colors,
  });
  res.send(Data);
};

const ProductDisplay = async (req, res) => {
  const Data = await productModel.find();
  res.send(Data);
};
const ProductDelete = async (req, res) => {
  const { myid } = req.body;
  const delRes = await productModel.findByIdAndDelete(myid);
  res.send(delRes);
};
module.exports = {
  productSave,
  ProductDisplay,
  ProductDelete,
};
