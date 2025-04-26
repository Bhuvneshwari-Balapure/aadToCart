const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoute = require("./routes/userRoutes");
const productRoute = require("./routes/productRoutes");
const paymentRoute = require("./routes/paymentRoute");
const adminRoute = require("./routes/adminRoute");
const ConnectDB = require("./DataBase/config");
app.use(express.json());
//Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//cors
app.use(cors());
//DataBase Connection
ConnectDB();
//Routes
app.use("/users", UserRoute);
app.use("/products", productRoute);
app.use("/api/payment/", paymentRoute);
app.use("/admin", adminRoute);
//server created
app.listen(port, () => {
  console.log(`Server Run on ${port} port`);
});
