const adminModel = require("../models/adminModel");

const AdminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const Admin = await adminModel.findOne({ email: email });
    console.log(Admin);
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  AdminLogin,
};
