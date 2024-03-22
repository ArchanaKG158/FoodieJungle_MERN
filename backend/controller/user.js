const userSchema = require("../models/userschema");
const bcrypt = require("bcrypt");
const jsonwebtoken = require ("jsonwebtoken");
const SECRETE_KEY = "STUDENTS";



const signUp = async (req, res) => {
    try {
      const { name, phone, email, password } = req.body
     
      let checkEmail = await userSchema.findOne({ email: email });
      if (checkEmail) {
        console.log("Email already exist!")
        res.json({ message: "Email already exist!" })
      }
  
      else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
  
        let newUser = await new userSchema({
  
          name: name,
          phone: phone,
          email: email,
          password: hashedPassword,
        
        })
  
        let savedUser = await newUser.save();
        console.log("New user registered suuccessfully");
        res.json({
          message: "New user registered successfully",
          newUser: savedUser
        })
      }
    }
    catch (err) {
      console.log("Error occured" + err);
      res.json({ error: err })
    }
  }
 
  
  const signIn = async (req, res) => {
    try {
     
      const { email, password } = req.body
      
      let user = await userSchema.findOne({ email :email});
      if (!user) {
  
        console.log('Email not found')
        res.json({ message:  'Email or password Invalid!' })
      }
      else {
        let checkpassword = await bcrypt.compare(password, user.password)
        if(!checkpassword) {
          console.log("Invalid password")
          res.json({message: "Email or password Invalid!"});
        }
        else {
          let userId=user.id;
         
          let token = await jsonwebtoken.sign(userId,SECRETE_KEY);
          console.log("Login successfully");
          res.json({message: "Login successfull",
                    success: true,
                    loggedInUser :user,
                    authToken:token,
        });
        }
      }
    }
    catch (err) {
      console.log("Error occured" + err);
      res.json({ error: err })
    }
  }
   
  module.exports = { signUp, signIn}