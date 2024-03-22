const mongoose = require("mongoose");
//instead of local host can use IP address to connect. and this is default address.......
const MongoURI = "mongodb://127.0.0.1:27017/resturant";
//  const MongoURI = "mongodb://localhost:27017/foodieJungle";

const connectToMongo = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("Connected to MongoDB successfull!");
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err}`);
  }
};

module.exports = connectToMongo;
