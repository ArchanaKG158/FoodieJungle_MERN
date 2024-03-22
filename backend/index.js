const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
connectToMongo();
const app = express();
app.use(express.json());
app.use(cors());

//Admin register
app.use("/api/admin", require("./routes/admin_routes.js"));

// Add Menu items...
app.use("/api/adminmenu", require("./routes/adminmenu_routes.js"));
app.use("/uploads/", express.static("./uploads"));

// cart and Orders......
app.use("/api/usercart", require("./routes/usercart_routes.js"));
app.use("/uploads/cartimage", express.static("./uploads"));

// app.use("api/myorder", require("./routes/MyOrder_routes.js"));

// user register
app.use("/api/user", require("./routes/user_routes.js"));

// app.listen shld and must be bottom of index file.......
const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
