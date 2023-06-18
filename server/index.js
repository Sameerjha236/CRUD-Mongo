import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserModel from "./models/User.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://sameerjha236:sameer@crud.ef8p2ep.mongodb.net/user?retryWrites=true&w=majority", //here user define database name
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const user = new UserModel({
    firstName: "Sameer",
    lastName: "Pal",
    age: 21,
    gender: "Male",
  });
  try {
    await user.save();
    res.send("Data inserted");
  } catch (err) {
    console.log("error -> ", err);
  }
});

app.listen(3001, () => {
  console.log("Server is running");
});
