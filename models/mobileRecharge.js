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
    status : {
type :String
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
        recharge_type:{
          type : String
        },
        email : {
          type :String
              },
              code:{
      
                // type: mongoose.Schema.Types.ObjectId,
                // ref: "elc_billerlist"
                type:String 
              },

account :{
          type : String
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
        dth_code :{
            type: mongoose.Schema.Types.ObjectId,
                ref: "pre_post_dth"
        }
         
        // headers:[{
        //   Token:String,
        //   Accept:String,
        //   Content_Type:String,        
        //   }],
        
          // options :[{ 
          //   headers:[{
          //     Token:String,
          //     Accept:String,
          //     Content_Type:String,        
          //     }],
          //     method:[{type:String},
          //     {url :String}]
             
          // }
          // ]

    },
  
  { timestamps: true }
);

module.exports = mongoose.model("mobileRecharge", MorechargeSchema);


