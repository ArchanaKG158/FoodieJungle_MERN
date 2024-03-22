const mongoose = require("mongoose");
const { Schema } = mongoose;
const AddressPaymentSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  // order_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "myorder",
  // },
  total: {
    type: String,
  },
  address: {
    type: String,
  },
  paymentMode: {
    type: String,
  },
  upiId: {
    type: String,
  },
  orderKey: {
    type: String,
  },
});

module.exports = mongoose.model("orderpayment", AddressPaymentSchema);
