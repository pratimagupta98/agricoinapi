const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElecRecharge = new Schema(
  {
    
    walletId :{
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallet",
      
    },
    email : {
type :String
    },
    code:{
      
      type: mongoose.Schema.Types.ObjectId,
      ref: "elc_billerlist"
    },
       
        agent_id : {
          type : String
        },
        account :{
          type : String
        },
        amount :{
          type : Number
        },
        optional1 : {
          type : String
        },
        optional2 : {
          type : String
        },
        optional3: {
          type : String
        },
         
      
         

    },
  
  { timestamps: true }
);

module.exports = mongoose.model("elec_recharge", ElecRecharge);


