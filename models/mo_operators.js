const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OperatorSchema = new Schema(
  {
    service: {
      type: String,
    },
    code: {
      type: String,
    },
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
      type: Number,
      generated: true
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
    service :{
      type :String
    },
    code : {
      type : String
    },
    re_type : {
      type:String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mo_operators", OperatorSchema);