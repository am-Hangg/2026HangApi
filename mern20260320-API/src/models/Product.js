
import mongoose from "mongoose";


const productSchema = new mongoose.Schema ({
  name: {
    type: String,
    require : [true,"product name is required."],
    minLength: [3, "must be over 3"],
    maxLength: [50, "less then 50"]
  },

  brand: {
    type : String,
  },

  category: {
    type :String,
    require: [true, "Category is required."],
  },
  
  price: {
    type: Number,
    require: [ true, "price is required" ],
    min: [ 1, "price must be greater than one" ],
    max: [ 999999, "price must be less than 9,99,999." ],
  },

  stock: {
    type: Number,
    min: 0,
    default: 1,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    require: [ true, "created by user id is require."]
  },

  imagesUrls: {
    type: [String],
  },
  

});

export default mongoose.model("Product", productSchema);