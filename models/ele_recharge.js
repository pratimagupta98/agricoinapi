const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ele_RechargeSchema = new Schema(
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
    APIKey: {
      type: String,
    },
    RESPTYPE: {
      type: String,
    },
    REFNO: {
      type: Number,
      generated: true,
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

module.exports = mongoose.model("ele_recharge", ele_RechargeSchema);
