const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the user schema
const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("Admin", UserSchema);
