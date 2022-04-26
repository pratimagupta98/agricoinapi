const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OperatorSchema = new Schema(
  {
    request:[ {
      number: {type:Number}
  }],
  circle_code:{
    type : String
  },
  code : {
    type : String
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("mo_operators", OperatorSchema);



