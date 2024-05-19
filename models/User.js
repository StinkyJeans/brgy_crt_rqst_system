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
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
