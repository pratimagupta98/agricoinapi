const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RechargeSchema = new Schema(
  {
    MobileNo: {
      type: Number,
    },
    APIKey: {
      type: String,
    },
    REQTYPE: {
      type: String,
    },
    RESPTYPE: {
      type: String,
    },
    REFNO :{
        type: Number,
    },
    SERCODE : {
        type: String,
    },
    CUSTNO :{
        type: Number,
    },
    REFMOBILENO :{
        type: Number,
    },
    AMT : {
        type : Number
    },
    STV : {
        type : Number
    },
    RESPTYPE : {
        type : String
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("mo_recharge", RechargeSchema);
