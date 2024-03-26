import mongoose from "mongoose";

const petientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Others"],
    },
    addmitedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Petient = mongoose.model("Petient", petientSchema);
