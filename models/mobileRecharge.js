const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MorechargeSchema = new Schema(
  {
    customerId :{
      type : String
    },
        amount:{
      type : Number
        },
        biller_code :{
          type : String
        },
        number : {
          type : Number
        },
        agent_id : {
          type : String
        },
    },
  { timestamps: true }
);

module.exports = mongoose.model("mobileRecharge", MorechargeSchema);


