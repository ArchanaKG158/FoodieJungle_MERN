const AddressPaymentSchema = require("../models/AddressPaymentSchema");
const CartSchema = require("../models/CartSchema");
const MyOrderSchema = require("../models/MyOrderSchema");

const addcart = async (req, res) => {
  console.log(req.body, "jkjk");
  const {
    title,
    price,
    category,
    id,
    foodID,
    imageProfile,
    count,
    username,
    usergmail,
  } = req.body;

  // console.log(menuDetail);

  // MenuSchema.create(menuDetail)
  //   .then((data) => {
  //     res.status(201).send(data);
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     res.status(500).send(error.message);
  //     console.log(error);
  //   });

  let newItem = await new CartSchema({
    title: title,
    price: price * count,
    category: category,
    menuid: id,
    quantity: count,
    imageProfile: imageProfile,
    username: username,
    usergmail: usergmail,
    foodID: foodID,
  });

  let savedItem = await newItem.save();
  res.json({
    newItem: savedItem,
  });
};

const getcart = async (req, res) => {
  let cartData = await CartSchema.find();
  // console.log("Items fetched from database");
  res.json({ message: "All Items fetched from database", cart: cartData });
};

const deletecartitem = async (req, res) => {
  let cartitem = await CartSchema.findById(req.params.id);

  await CartSchema.findByIdAndDelete(req.params.id);
  console.log("Item deleted successfully");
  res.json({
    message: "Item deleted successfully from database",
    deletedcartitem: cartitem,
  });
};

const orderdetails = async (req, res) => {
  try {
    console.log(req.body.cartItems);

    const { cartItems, orderkey } = req.body;

    // Array to store promises of saving items
    const savedItems = await Promise.all(
      cartItems.map(async (item) => {
        let newItem = await new MyOrderSchema({
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          orderkey: item.orderkey,
          foodID: item.foodID,
          user_id: item.userid,
        });

        return newItem.save();
      })
    );

    // Send a single response after all items have been saved
    res.json({
      message: "Items saved successfully",
      savedItems: savedItems,
    });
  } catch (error) {
    console.error("Error saving items:", error);
    res.status(500).json({ error: "An error occurred while saving items" });
  }
};

const orderpayment = async (req, res) => {
  // console.log(req.body, "jkjk");
  const { total, address, orderkey, paymentMethod, upiId, userid } = req.body;

  let newItem = await new AddressPaymentSchema({
    total: total,
    address: address,
    orderKey: orderkey,
    paymentMode: paymentMethod,
    upiId: upiId,
    user_id: userid,
  });

  let savedItem = await newItem.save();
  res.json({
    newItem: savedItem,
  });
};

const getorders = async (req, res) => {
  console.log(req.user, "aaaaa");
  let OrderData = await AddressPaymentSchema.find({ user_id: req.user });
  console.log("Orders information fetched from database");
  res.json({
    message: "All orders info fetched from database",
    orders: OrderData,
  });
};

module.exports = {
  addcart,
  getcart,
  deletecartitem,
  orderdetails,
  orderpayment,
  getorders,
};
