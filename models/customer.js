const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
     },
    customerId: {
      type: Number,
    },
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    mobile: {
      type: Number,
    },
    password: {
      type: String,
    },
    cnfrmPassword: {
      type: String,
    },

    //  code: {
    //  type: String,
    //   default: 1234,
    // },

    otp: {
      type: Number,
    },
    walletId :{
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallet",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("customer", customerSchema);
