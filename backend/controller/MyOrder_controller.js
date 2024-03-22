const MyOrderSchema = require("../models/MyOrderSchema");

const getOrders = async (req, res) => {
  console.log("aaaaa");
  let OrderData = await MyOrderSchema.find({ user_id: req.user });
  console.log("Orders information fetched from database");
  res.json({
    message: "All orders info fetched from database",
    orders: OrderData,
  });
};

module.exports = { getOrders };
