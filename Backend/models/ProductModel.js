const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  rating: Number,
  image: String,
  discription: String,
  colors: String,
});

module.exports = mongoose.model("product", ProductSchema);
