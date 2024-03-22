const mongoose = require("mongoose");
const { Schema } = mongoose;
const MyOrderSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  quantity: {
    type: String,
  },
  foodID: {
    type: String,
  },
  orderkey: {
    type: String,
  },
});

module.exports = mongoose.model("MyOrders", MyOrderSchema);
