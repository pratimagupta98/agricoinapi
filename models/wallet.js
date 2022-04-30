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
    // wallet_balance :{
    //   type :Number,
    //   default:"Pending"
    // },
    status :{
      type: String,
      default:"Pending"
    },
    
    // value :{
    // type :String
    // }
  },
  { timestamps: true }
);

module.exports = mongoose.model("wallet", walletSchema);
