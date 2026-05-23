
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    require: [ true, "user name is required" ],
    minLength : 3,
    maxLength: 60,
  },

  email: {
    type:String,
    require: [true, "Email is required"],
    lowercase: true,
    unique: true,
    validate: {
      validator: (value) => {
        const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        return emailRegex.test (value);
      },
      message: "invalid email",
    },
  },

    password: {
      type:String,
      required: [true, "password is required."],
      minLength: [6, "password length more than six"],
    },


  phone: {
    type: String,
    require: [ true, "phone number is required."],
    minLength: 5,
    maxLength:13,
    unique: true,
  },
      createAt: {
      type:Date,
      default:Date.now(),
    },
      isActive: {
      type:Boolean,
      default:true,
    },


    address: {
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

    roles: {
    type: [String],
    enum: ["CUSTOMER", "MERCHANT", "ADMIN", "SUPER_ADMIN"],
      default: ["CUSTOMER"],
    },

    profileImageUrl: {
      type: String,
    },

  });

export default mongoose.model("User", userSchema);