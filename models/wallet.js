const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: "true",
    },
    
    // walletId: {
      //type: mongoose.Schema.Types.ObjectId,
      //ref: "user",
     //type: String,
      //required: true,
    //},
    amount: {
      type: Number,
      default: 0,
    },
    depsite_file:{
      type : String
    },
    pay_method : {
      type: String,
       
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("wallet", walletSchema);
