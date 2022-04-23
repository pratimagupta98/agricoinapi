const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OplistSchema = new Schema(
  {
    
    code:{
      type : String
        },
        service :{
          type : String
        },
        param : {
          type : Number
        },
        amount_range : {
          type : String
        },
        min : {
            type : Number
        },
        max : {
            type : Number
        },
        type:{
            type : String  
            //PREPAID  ,POSTPAID
        }
    },
  { timestamps: true }
);

module.exports = mongoose.model("op_list", OplistSchema);


