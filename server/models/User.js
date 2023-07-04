import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create an index for the "number" field
UserSchema.index({ number: 1 }, { unique: true });

const User = mongoose.model("User", UserSchema);
export default User;
