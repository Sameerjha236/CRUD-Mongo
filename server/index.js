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
  "mongodb+srv://sameerjha236:sameerjha236@cluste0.n6i20y9.mongodb.net/user?retryWrites=true&w=majority", //here user define database name
  {
    useNewUrlParser: true,
  }
);

app.post("/insert", async (req, res) => {
  const { fname, lname, number } = req.body;
  const user = new UserModel({
    firstName: fname,
    lastName: lname,
    number: number,
  });

  try {
    await user.save();
    console.log("value added");
  } catch (e) {
    console.log("error ", e);
  }
});

app.get("/read", async (req, res) => {
  try {
    const result = await UserModel.find({});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

app.put("/update", async (req, res) => {
  const { id, name } = req.body;
  try {
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.firstName = name;
    await user.save();
    console.log("Value updated");
  } catch (error) {
    console.error(error);
  }
});

app.delete("/delete/:id", async (req, res) => {
  // :id it should be in url
  console.log("value deleted");
  const id = req.params.id;
  await UserModel.findByIdAndDelete(id).exec();
  console.log("value deleted");
});

app.listen(3001, () => {
  console.log("Server is running");
});
