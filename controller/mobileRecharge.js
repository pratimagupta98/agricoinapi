const Mobilerecharge = require("../models/mobileRecharge");
const Wallet = require("../models/wallet");
//const wallet = require("../models/wallet");

// exports.mobile_recharge = async(req,res)=>{
 
// var request = require('request');

// // const newMobilerecharge = new Mobilerecharge({
// //   customerId : customerId,
// //   amount : amount,
// //   biller_code : biller_code,
// //   number : number,
// // })


// create_randomString(15);
//   function create_randomString(string_length) {
//     (randomString = ""),
//       (characters = "ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ");
//     for (var i, i = 0; i < string_length; i++) {
//       randomString += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return randomString;
//   }
  
//   // const newMobilerecharge = new Mobilerecharge({
//   //   walletId : walletId,
//   //   amount : amount,
//   //   biller_code : biller_code,
//   //   number : number,
    
//   // })
// var options = {
//   'method': 'POST',
//   'url': 'https://api.zuelpay.com/utility/recharge/transaction',
//   'headers': {
//      'Token': 'ZKEY6f426c359d25311a48b1287f6',
//     'Accept': 'application/json',
//     'Content_Type': 'application/json'
//   },
// }
// var data = {
//   amount: req.body.amount,
//   biller_code: req.body.biller_code,
//   number: req.body.number,
//   agent_id: "SOXY" +randomString,
//    walletId : req.body.walletId
// }

// // request(options, function (error, response) {
// //   if (error){
// //     throw new Error(error);
// //     res.json(error) ;
// //   } 
  
// //   console.log(response.body);
// //   res.send(response.body);
// //    var serverRes = response.body
// //    return serverRes
// // })
 
// // }

//   // body: JSON.stringify({
//   //   "request": {
//   //     "amount": req.body.amount,
//   //     "biller_code": req.body.biller_code,
//   //     "number": req.body.number,
//   //     "agent_id": "SOXY" +randomString,
//   //     "walletId" : req.body.walletId
//   //   }
//   // })




// // let result = await Mobilerecharge.create(options);
// // console.log(result)

// // Mobilerecharge.create(options, function (error, response) {
// //   if (error) {
// //     console.log(error);
// //     res.json({
// //       error
// //     });
// //   } else {
// //     //callback(null, { payulink: response });
// //     // You will get a link in response to redirect to payUMoney
// //     res.json({
// //       response
// //     });
// //     console.log(response);
// //   }
// // });
// // };


// // ************************
// // let result = await Mobilerecharge.create(options);
// // console.log(result)
// request(options, function (error, response) {
//   if (error){
//     throw new Error(error);
//     res.json(error) ;
//   } 
  
//   //console.log(response.body);
//   res.send(response.body);
//    var serverRes = response.body
//    return serverRes
// })
 
// }
// *********************



// exports.mobile_recharge =async(req,res) =>{


//   var request = require('request');
//   var options = {
//     'method': 'POST',
//     'url': 'https://api.zuelpay.com/utility/recharge/transaction',
//     'headers': {
//       'Token': 'ZKEY6f426c359d25311a48b1287f6',
//       'Accept': 'application/json'
//     }
//   };
// //   request(options, function (error, response) {
// //     if (error) throw new Error(error);
// //     console.log(response.body);
// //   });
  

// // }

// request(options, function (error, response) {
//   if (error){
//    throw new Error(error);
//    res.json(error) ;
//   console.log(response.body);
//   }
//   res.send(response.body);
//   var serverRes = response.body
//   return serverRes
// }); 
// }


// exports.mobile_recharge =async(req,res)=>{
// var https = require('follow-redirects').https;
// var fs = require('fs');

// var options = {
//   'method': 'POST',
//   'hostname': 'api.zuelpay.com',
//   'path': '/utility/recharge/transaction',
//   'headers': {
//     'Token': 'ZKEY6f426c359d25311a48b1287f6',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// var postData = JSON.stringify({
//   "amount": 10,
//   "biller_code": "IDP",
//   "number": 8121787777,
//   "agent_id"  : "ZLP000000100002201124"
// });

// req.write(postData);

// req.end();

// }



// exports.mobile_recharge =async(req,res)=>{
// var https = require('follow-redirects').https;
// var fs = require('fs');

// var options = {
//   'method': 'POST',
//   'hostname': 'api.zuelpay.com',
//   'path': '/utility/recharge/transaction',
//   'headers': {
//     'Token': 'ZKEY6f426c359d25311a48b1287f6',
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function (chunk) {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });

//   res.on("error", function (error) {
//     console.error(error);
//   });
// });

// var postData = JSON.stringify({
//   "request": {
//     "amount": "10",
//     "biller_code": "IDP",
//     "number": "9748876319",
//     "agent_id": "ZLP000000100002201154"
//   }
// });

// req.write(postData);

// req.end()
// res.send(response.body);
//   var serverRes = response.body
//   return serverRes

 
// }
const ElecBlist = require('../models/elc_billerlist');



exports.mobile_recharge = async(req,res)=>{

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
    status:req.body.status,
    amount:req.body.amount,
    biller_code:req.body.biller_code,
    number: req.body.number,
    recharge_type :req.body.recharge_type,
    agent_id:"SOXY" +randomString, 
  } 

 
  // const getdata = await Wallet.findOne({customer :req.body.customer})
  // if(getdata){

  // }


var request = require('request');
// create_randomString(15);
//   function create_randomString(string_length) {
//     (randomString = ""),
//       (characters = "ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ");
//     for (var i, i = 0; i < string_length; i++) {
//       randomString += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return randomString;
//   }
 
var options = {
  'method': 'POST',
  'url': 'https://api.zuelpay.com/utility/recharge/transaction',
  'headers': {
    'Token': 'ZKEY6f426c359d25311a48b1287f6',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  
  body: JSON.stringify({
    "request": {
      walletId: req.body.walletId,
      amount: req.body.amount,
      biller_code:req.body.biller_code,
      number: req.body.number,
      agent_id:"SOXY" +randomString,
      recharge_type :req.body.recharge_type
    }
  })

};

 let result = await Mobilerecharge.create(data);


 console.log(result)

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

exports.elec_paybill = async(req,res)=>{

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
 let result = await Mobilerecharge.create(data)

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

exports.Elec_paybill = async (req, res) => {
  const findall = await Mobilerecharge.find().sort({ sortorder: 1 }).populate("code")
  
  let codetype = await Mobilerecharge
        .find({code:req.body.code })
        console.log("codetype",codetype)
        
       console.log("result............", codetype);
      // if (type == null) {
      //   res.status(400).json({
      //     status: false,
      //     msg: "record not found",
      //   });
      // }
       let codearr = [];
      for (const element of codetype) {
        if (element.code.type.toUpperCase() == "ELECTRICITY") {
          console.log("element", element);
          codearr.push(element.code.type);
          
        }
      }
   
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

