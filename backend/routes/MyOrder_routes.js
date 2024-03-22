const express = require("express");
const router = express.Router();
const { getOrders } = require("../controller/MyOrder_controller");
// const {orderdetails} = require("../controller/usercart_controller")
const fetchUser = require("../Middleware/User");

router.get("/getOrders", fetchUser, getOrders);
// router.post("/orderdetails", orderdetails);

module.exports = router;
