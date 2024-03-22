const express = require("express");
const router = express.Router();

const {
  addcart,
  getcart,
  deletecartitem,
  orderdetails,
  orderpayment,
  getorders,
} = require("../controller/usercart_controller");

router.post("/addcart", addcart);
router.get("/getcart", getcart);
router.delete("/deleteCartItem/:id", deletecartitem);
router.post("/orderdetails", orderdetails);
router.post("/orderpayment", orderpayment);
router.get("/getorders", getorders);
module.exports = router;
