const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MoDthSchema = new mongoose.Schema(
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
 
},
   { timestamps: true }
)

module.exports = mongoose.model("pre_post_dth", MoDthSchema);
