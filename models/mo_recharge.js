const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RechargeSchema = new Schema(
  {
    
    REQTYPE: {
      type: String,
    },
    APIKey : {
      type: String,
    },
    RESPTYPE: {
      type: String,
    },
    REFNO: {
      type: String,
    },
    SERCODE: {
      type: String,
    },
    CUSTNO: {
      type: Number,
    },
    REFMOBILENO: {
      type: Number,
    },
    AMT: {
      type: Number,
    },
    STV: {
      type: Number,
    },
    RESPTYPE: {
      type: String,
    },
     
     
  },
  { timestamps: true }
);

module.exports = mongoose.model("mo_recharge", RechargeSchema);