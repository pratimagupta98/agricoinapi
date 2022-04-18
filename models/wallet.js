const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",

    },
    amount: {
      type: Number,
      default: 0,
    },
    depsite_file: {
      type: String
    },
    pay_method: {
      type: String,

    },
    status :{
      type: String,
      default:"Pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("wallet", walletSchema);
