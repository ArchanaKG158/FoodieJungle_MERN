const mongoose = require("mongoose");

const MenuSchema = mongoose.Schema({
  foodID: { type: String, required: true, unique: true },
  title: String,
  imageProfile: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("menu", MenuSchema);
