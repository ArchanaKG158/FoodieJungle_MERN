const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  addmenu,
  getmenu,
  updatemenu,
  viewSingleItem,
  deletemenu,
} = require("../controller/adminmenu_controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/addmenu", upload.single("imageProfile"), addmenu);
router.get("/getmenu", getmenu);
router.put("/updatemenu/:id", upload.single("imageProfile"), updatemenu);
router.get("/viewSingleItem/:id", viewSingleItem);
router.delete("/deletemenu/:id", deletemenu);

module.exports = router;
