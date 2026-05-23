import mongoose from "mongoose";
import { required } from "zod/mini";

const resetPasswordSchema = new mongoose.Schema ({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "user Id is required."]
  },
  token: {
    type: String,
    required: [true, "Reset password token is required."],
  },
  createAt: {
    type: Date,
    default: Date.now(),
    immutable:true,
  },
  expiredAt: {
    type: Date,
    default:Date.now() + 3600000, //1 hour in milliseconds.
    immutable: true,
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
});


export default mongoose.model("ResetPassword", resetPasswordSchema);