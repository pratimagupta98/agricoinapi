const   EleRecharge = require("../models/elec_recharge.js");

const Wallet = require("../models/wallet");
  
exports.elec_recharge = async(req,res)=>{

  create_randomString(15);
  function create_randomString(string_length) {
    (randomString = ""),
      (characters = "ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ");
    for (var i, i = 0; i < string_length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  }
 
  const data ={
    walletId: req.body.walletId,
    email:req.body.email,
    code:req.body.code,
    account:req.body.account,
    agent_id:"SOXY" +randomString, 
    amount :req.body.amount,
    optional1 :req.body.optional1,
    optional2 :req.body.optional2,
    optional3 :req.body.optional3,


  } 

  var request = require('request');
  var options = {
    'method': 'POST',
    'url': 'https://zuelpay.com/api/utility/billpay/transaction',
    'headers': {
      'Token': 'ZKEY6f426c359d25311a48b1287f6',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "request": {
        walletId: req.body.walletId,
        email: req.body.email,
        code: req.body.code,
        account: req.body.account,
        agent_id:"SOXY" +randomString,
        "amount": "10",
        optional1: req.body.optional1,
        optional2:  req.body.optional2,
        optional3: req.body.optional3
      }
    })
  
  };
 let result = await EleRecharge.create(data);

 console.log("Result",result)
request(options, function (error, response) {
  if (error){
   throw new Error(error);
   res.json(error) ;
  console.log(response.body);
  }
  res.send(response.body);
  var serverRes = response.body   
  return serverRes
}); 
 
const getdetails = await Wallet.findOne({_id :req.body.walletId}) 
console.log("Value",getdetails)
let  newamt=0
if(getdetails){
  let cmt = getdetails.amount
  if (cmt>0){
   newamt =cmt - req.body.amount
   console.log("camt",cmt)
console.log("new",newamt)
}else{

  console.log("insuficiet belence")

  res.status(400).json({
    status: false,
    msg: "insuficiet belence ",
  });
 
}

const findandUpdateEntry1 = await Wallet.findOneAndUpdate(
  
  { _id: req.body.walletId },
  
  { $set: {amount:newamt } },
 
//     { amount: currntamt },
     
// { $set: {status:"success"} },
{ new: true },
)
if(findandUpdateEntry1){
  console.log("newamt",newamt)
}

// .then((data)=>{
//   res.status(200).json({
//       status : true,
//       msg : "success",
//       data : data,
//       amount: newamt, 
     
      
//   })
// }) .catch((error) => {
//   res.status(400).json({
//     status: false,
//     msg: "error",
//     error: "error",
//   });
// });
 }
// ;
  }


 



exports.gettransaction = async (req, res) => {
  const findall = await Mobilerecharge.find().sort({ sortorder: 1 }).populate("walletId") .populate({
    path: "walletId",
    populate: {
      path: "customer",
    },
  })
  if (findall) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findall,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};


exports.getusertransaction = async (req, res) => {
  const findone = await Mobilerecharge.find({ walletId: req.params.id })  .populate({
    path: "walletId",
    populate: {
      path: "customer",
    },
  })
  if (findone) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findone,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};

 