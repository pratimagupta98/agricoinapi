const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MorechargeSchema = new Schema(
  {
    // options:[{ headers:[{
    //   Token:String,
    //   Accept:String,
    //   Content_Type:String,        
    //   }],
    //   method :[{
    //     type : String
    //   }],
    //   url :[{
    //     type : String
    //   }],
    // }],

    walletId :{
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallet",
      
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
        // headers:[{
        //   Token:String,
        //   Accept:String,
        //   Content_Type:String,        
        //   }],
          options :[{ 
            headers:[{
              Token:String,
              Accept:String,
              Content_Type:String,        
              }],
              method:[{type:String},
              {url :String}]
             
          }
          ]

    },
  
  { timestamps: true }
);

module.exports = mongoose.model("mobileRecharge", MorechargeSchema);


