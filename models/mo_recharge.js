const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RechargeSchema = new Schema(
  {
    request:[ {
      number: {type:Number}
  }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("mo_recharge", RechargeSchema);