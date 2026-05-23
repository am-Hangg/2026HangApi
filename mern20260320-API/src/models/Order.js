import mongoose from "mongoose";
import {
  ORDER_STATUS_PENDING, 
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_SHIPPED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_CANCELLED, 
} from "../constants/orderStatus.js";

// import { required } from "zod/mini";

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: [true, "User is require."],
  },
  orderItems: {
    product: {
      type: mongoose.Schema.ObjectId,
      ref: "Product",
      require: [true, "Product is require."],
    },
    quantity: {
      type: Number,
      default: 1,
      min: [1, "Quantity must be at least one."],
    },
  },
  status: {
    type: String,
    default: ORDER_STATUS_PENDING,

    enum: [
      ORDER_STATUS_PENDING,
      ORDER_STATUS_CONFIRMED,
      ORDER_STATUS_SHIPPED,
      ORDER_STATUS_DELIVERED,
      ORDER_STATUS_CANCELLED,
    ],
  },
  shippingAddress: {
      city:{
        required: true,
        type: String,
      },
      province: String,
      street: String,
      country: {
        type:String,
        default: "Nepal",
      },
  },
  orderNumber: {
    type: String,
    required: [true, "order number is required."],

  },
  totalPrice: {
    type: Number,
    required: [true, "total price is required."]
  },
  payment: {
    type: mongoose.Schema.ObjectId,
    ref: "Payment",

  },
  createdDate: {
    type: Date,
    default: Date.now(),
    immutable: true,
  },
});

export default mongoose.model("Order", orderSchema);
