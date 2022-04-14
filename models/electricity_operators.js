const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eleOperatorSchema = new Schema(
  {
    service: {
      type: String,
    },
    code: {
      type: String,
    },
    re_type : {
      type:String
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("electricity_operators", eleOperatorSchema);