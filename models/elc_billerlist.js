const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ElecbcodeSchema = new mongoose.Schema(
  {
    
    code: {
      type: String,
    },
    service: {
      type:String
    },
    param : {
      type:  String
    },
  
    optional1 : { type :  String

    },
    optional2: {
      type: String,
    },
    optional3: {
      type: String,
    },
    amount_range : {
        type : String
    },
    min :{
type:Number
    },
    max:{
        type : Number
    },

    type: {
      type: String,
    },
    bill_fetch: {
      type: String,
    },
   
    bbps : {
      type : String
    }
 
 
},
   { timestamps: true }
)

module.exports = mongoose.model("elc_billerlist", ElecbcodeSchema);
