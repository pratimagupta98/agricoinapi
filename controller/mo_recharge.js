const Recharge = require("../models/mo_operators");


// exports.moRecharge = async (req,res)=>{
//     // const{MobileNo,REQTYPE,} = req.body
//    var request = require('request');

//    create_randomString(7);
//   function create_randomString(string_length) {
//     (randomString = ""),
//       (characters =
//         'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ');
//     for (var i, i = 0; i < string_length; i++) {
//       randomString += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return randomString;
//   }
//   console.log("Result",randomString)
//    var options = {
//      'method': 'POST',
//     //  'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=[MobileNo]&APIKey=[APIKey]&REQTYPE=RECH&REFNO=[REFNO]&SERCODE=[ServiceCode/OperatorCode]&CUSTNO=[ConsumerNo]&REFMOBILENO=[CustomerMobileNo]&AMT=[AMOUNT]&STV=[IsSTV]&RESPTYPE=JSON',
     
//      body: JSON.stringify({
//         REFNO : randomString,
//        MobileNo:req.body.MobileNo,
//        APIKey : req.body.APIKey,
//        REQTYPE:req.body.REQTYPE,
//        SERCODE: req.body.SERCODE,
//        CUSTNO : req.body.CUSTNO,
//        REFMOBILENO :req.body.REFMOBILENO ,
//        AMT : req.body.AMT ,
//        STV : req.body.STV ,
//        RESPTYPE :req.body.RESPTYPE,
//      }),
//      'url': `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&APIKey=${req.body.APIKey}&REQTYPE=${req.body.REQTYPE}&REFNO=${randomString}&SERCODE=${req.body.SERCODE}&CUSTNO=${req.body.CUSTNO}&REFMOBILENO=${req.body.REFMOBILENO}&AMT=${req.body.AMT}&STV=${req.body.STV}&RESPTYPE=JSON`,
   
//    };
//    console.log(options);
//    request(options, function (error, response) {
//     if (error){
//      throw new Error(error);
//      res.json(error) ;
//     console.log(response.body);
//     }
    
     
//     res.send(response.body);
//     var serverRes = response.body
//     return serverRes
    
//   }); 

//   }
  

// exports.mobileRecharge = async (req, res) => {
//   var request = require("request");

// exports.balanceApi = async (req,res)=>{
//     // const{MobileNo,REQTYPE,} = req.body
//    var request = require('request');

   
//    var options = {
//      'method': 'POST',
     
//      body: JSON.stringify({
//        MobileNo:req.body.MobileNo,
//        APIKey : req.body.APIKey,
//        REQTYPE:req.body.REQTYPE,
//        RESPTYPE :req.body.RESPTYPE,
//      }),
//      'url': `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&APIKey=${req.body.APIKey}&REQTYPE=${req.body.REQTYPE}&RESPTYPE=${req.body.RESPTYPE}`,
   
//    };
//    console.log(options);
//    request(options, function (error, response) {
//     if (error){
//      throw new Error(error);
//      res.json(error) ;
//     console.log(response.body);
//     }
//     res.send(response.body);
//     var serverRes = response.body
//     return serverRes
//   }); 
  
//   }
  







exports.Recharge = async(req,res) =>{
  const { number } = req.body;

var request = require('request');
var options = {
  'number' :  req.body.number,
  'method': 'POST',
  'url': 'https://api.zuelpay.com/utility/addon/opt_lookup',
  'headers': {
    'Token': 'ZKEY6f426c359d25311a48b1287f6',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  
  body: JSON.stringify({
    "request": {
      "number": req.body.number
    }
  })
  

}
let result = await Recharge.create(options);
console.log(result)

request(options, function (error, response) {
  if (error){
    throw new Error(error);
    res.json(error) ;
  } 
  
  //console.log(response.body);
  res.send(response.body);
   var serverRes = response.body
   return serverRes
})
 
}



 
exports.Plans = async(req,res) =>{

const {code,circle_code} = req.body
var request = require('request');
var data = {
  'method': 'POST',
  'code' : req.body.code,
  'circle_code' : req.body.circle_code,
  'url': 'https://api.zuelpay.com/utility/addon/browseplan',
  'headers': {
    'Token': 'ZKEY6f426c359d25311a48b1287f6',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "request": {
      "code": req.body.code,
      "circle_code": req.body.circle_code
    }
  })

}
// let result = await Recharge.create(options);
// console.log(result)

request(data, function (error, response) {
  if (error){
    throw new Error(error);
    res.json(error) ;
  } 
  
  console.log(response.body);
  res.send(response.body);
   var serverRes = response.body
   return serverRes
})
 
}