const MenuSchema = require("../models/MenuSchema");

const addmenu = async (req, res) => {
  try {
    console.log(req.body);
    const { title, price, category } = req.body;
    const imageProfile = req.file?.filename;

    const generateFoodId = () => {
      // Generate a unique OrderID (you can use any method you prefer)
      return Math.random().toString(36).substring(2, 9); // Example: Generate a random alphanumeric string
    };

    const foodId = generateFoodId();

    let newItem = new MenuSchema({
      title: title,
      price: price,
      category: category,
      imageProfile: imageProfile,
      foodID: foodId,
    });
    console.log(newItem);
    let savedItem = await newItem.save();
    res.json({
      newItem: savedItem,
    });
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
};

// const getmenu = async (req, res) => {
//   const menuData = req.body;
//   MenuSchema.find(menuData)
//     .then((data) => {
//       res.status(200).send(data);
//       // console.log(data);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//       console.log(error);
//     });
// };

const getmenu = async (req, res) => {
  let menuData = await MenuSchema.find();
  // console.log("Items fetched from database");
  res.json({ message: "All Items fetched from database", menu: menuData });
};

const updatemenu = async (req, res) => {
  let menu = await MenuSchema.findById(req.params.id);
  if (!menu) {
    console.log("Item not found");
    res.json({ message: "Item not found" + req.params.id + " ID!" });
  } else {
    console.log(req.body, "data");
    const { title, price, category } = req.body;
    const imageProfile = req.file?.filename;
    let updatemenu = {};
    if (title) {
      updatemenu.title = title;
    }
    if (imageProfile) {
      updatemenu.imageProfile = imageProfile;
    }
    if (price) {
      updatemenu.price = price;
    }
    if (category) {
      updatemenu.category = category;
    }
    menu = await MenuSchema.findByIdAndUpdate(
      req.params.id,
      { $set: updatemenu },
      { new: true }
    );
    // console.log(updatemenu, " Aaaaaaaaaa");
    console.log("Menu updated successfully");
    console.log(menu);
    res.json({ message: "Menu updated successfully", data: menu });
  }
};

const viewSingleItem = async (req, res) => {
  let menu = await MenuSchema.findById(req.params.id);
  if (!menu) {
    res.json({ message: "Item not found!" });
  } else {
    // console.log(menu);
    res.json({ menu: menu });
  }
};

const deletemenu = async (req, res) => {
  let menu = await MenuSchema.findById(req.params.id);
  if (!menu) {
    console.log("Item not found with this ID!");
    res.json({ message: "Item not found with '" + req.params.id + "' ID!" });
  } else {
    console.log(menu);
    await MenuSchema.findByIdAndDelete(req.params.id);
    console.log("Item deleted successfully");
    res.json({ message: "Item deleted successfully!", deletedmenu: menu });
  }
};

module.exports = { addmenu, getmenu, updatemenu, viewSingleItem, deletemenu };
