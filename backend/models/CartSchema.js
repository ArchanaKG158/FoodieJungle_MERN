const mongoose = require("mongoose");
const { Schema } = mongoose;
const CartSchema = new Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
  },
  menuid: {
    type: String,
  },
  imageProfile: {
    type: String,
  },
  quantity: {
    type: String,
  },
  username: {
    type: String,
  },
  usergmail: {
    type: String,
  },
  foodID: {
    type: String,
  },
});

module.exports = mongoose.model("cart", CartSchema);
