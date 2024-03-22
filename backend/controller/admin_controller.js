const userSchema = require("../models/AdminSchema");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const SECRETE_KEY = "FOOD";

const Register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    console.log(password);

    let checkEmail = await userSchema.findOne({ email: email });
    if (checkEmail) {
      console.log("Email already exists!");
      res.json({ message: "Email already exists!" });
    } else {
      console.log(password);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      let newUser = await new userSchema({
        name: name,
        phone: phone,
        email: email,
        password: hashedPassword,
      });
      let savedAdmin = await newUser.save();
      console.log("New user registered successfully");
      res.json({
        success: true,
        message: "New user registered successfully",
        admin: savedAdmin,
      });
    }
  } catch (err) {
    console.log("Error occurred" + err);
    res.json({ error: err });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await userSchema.findOne({ email: email });
    if (!user) {
      console.log("Email not found!");
      res.json({ message: "Email or Password Invalid!" });
    } else {
      let checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        console.log("Invalid Password!");
        res.json({ message: "Email or Password Invalid!" });
      } else {
        let userId = user.id;
        let token = await jsonwebtoken.sign(userId, SECRETE_KEY);
        console.log("Login successful!");
        res.json({
          message: "Login successful!",
          success: true,
          loggedInUser: user,
          authToken: token,
        });
      }
    }
  } catch (err) {
    console.log("Error occurred" + err);
    res.json({ error: err });
  }
};

module.exports = { Register, Login };
