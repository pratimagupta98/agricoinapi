const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OperatorSchema = new Schema(
  {
    request:[ {
      number: {type:Number}
  }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("mo_operators", OperatorSchema);



