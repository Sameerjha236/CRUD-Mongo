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

app.post("/insert", async (req, res) => {
  const { fname, lname, age, gender } = req.body;
  const user = new UserModel({
    firstName: fname,
    lastName: lname,
    age,
    gender,
  });

  try {
    await user.save();
    console.log("value added");
  } catch (e) {
    console.log(e);
  }
});
app.get("/users", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
app.listen(3001, () => {
  console.log("Server is running");
});
