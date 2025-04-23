import mongoose from "mongoose";
import { Schema } from "mongoose";

const boardSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
  
    },
  },
  { timestamps: true }
);

export default mongoose.model("Board", boardSchema);
