import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    
    firstName: {
        type: String,
        required: true,
      },
    middleName: {
        type: String,
        required: true,
      },
    lastName: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
      },
    password: {
      type: String,
      required: false,
    },
    birthDate: {
        type: Date,
        required: true,
      },
    gender: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);