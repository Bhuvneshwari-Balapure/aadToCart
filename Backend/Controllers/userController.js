const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userValidation = async (req, res) => {
  const token = req.header("x-auth-token");

  if (!token) return res.json(false);
  const verified = jwt.verify(token, "ayushi");
  if (!verified) return res.json(false);
  return res.json(true);
};

const UserRgistration = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed password : ", hashedPassword);

    // Move user creation inside the try block to ensure hashedPassword is accessible
    const User = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    console.log(User);
    res.send({ msg: "Successfully Registered...", user: User });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

const UserLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await userModel.findOne({ email });

    if (!User) {
      res.status(404).json({
        message: "Email is not Found",
        status: "404 Not Found",
      });
      return;
    }

    console.log("simple entered password : ", password);
    console.log("User ka hash password : ", User.password);

    const validPassword = await bcrypt.compare(password, User.password);

    console.log("Password comparison result: ", validPassword);

    if (!validPassword) {
      res.status(400).json({
        message: "Invalid Password",
        status: "404 Bad Request",
      });
      return;
    }

    const token = jwt.sign(
      { id: User._id, name: User.name, email: User.email },
      "ayushi"
    );
    // console.log(token);

    res.json({ token, user: { id: User._id, name: User.name } });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const checkUserValidation = async (req, res) => {
  const token = req.header("x-auth-token");

  if (!token) return res.json(false);
  const verified = jwt.verify(token, "ayushi");
  if (!verified) return res.json(false);
  return res.json(true);
};

module.exports = {
  UserRgistration,
  UserLogin,
  userValidation,
  checkUserValidation,
};
