const Recharge = require("../models/mo_operators");


// exports.moRecharge= async (req, res) => {

//     const {
//         MobileNo,
//         REQTYPE,
//         APIKey,
//         RESPTYPE,
//         REFNO,
//         SERCODE,
//         CUSTNO,
//         REFMOBILENO,
//         AMT,
//         STV,
         

//       } = req.body;

//       const newRecharge = new Recharge({
//         MobileNo :MobileNo,
//         REQTYPE:REQTYPE,
//         APIKey:APIKey,
//         RESPTYPE:RESPTYPE,
//         REFNO:REFNO,
//         SERCODE:SERCODE,
//         CUSTNO:CUSTNO,
//         REFMOBILENO:REFMOBILENO,
//         AMT:AMT,
//         STV:STV,
//         RESPTYPE:RESPTYPE,
//         'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx',
//       })
//       newRecharge.save()
//       .then(
//         res.status(200).json({
//           status: true,
//           msg: "success",
//           data: newRecharge,
//         })
//       )
//       .catch((error) => {
//         res.status(400).json({
//           status: false,
//           msg: "error",
//           error: error,
//         });
//       });
//   }

exports.moRecharge = async (req,res)=>{
    // const{MobileNo,REQTYPE,} = req.body
   var request = require('request');

   create_randomString(7);
  function create_randomString(string_length) {
    (randomString = ""),
      (characters =
        'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ');
    for (var i, i = 0; i < string_length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  }
   var options = {
     'method': 'POST',
    //  'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=[MobileNo]&APIKey=[APIKey]&REQTYPE=RECH&REFNO=[REFNO]&SERCODE=[ServiceCode/OperatorCode]&CUSTNO=[ConsumerNo]&REFMOBILENO=[CustomerMobileNo]&AMT=[AMOUNT]&STV=[IsSTV]&RESPTYPE=JSON',
     
     body: JSON.stringify({
        REFNO : req.body.REFNO,
       MobileNo:req.body.MobileNo,
       APIKey : req.body.APIKey,
       REQTYPE:req.body.REQTYPE,
       SERCODE: req.body.SERCODE,
       CUSTNO : req.body.CUSTNO,
       REFMOBILENO :req.body.REFMOBILENO ,
       AMT : req.body.AMT ,
       STV : req.body.STV ,
       RESPTYPE :req.body.RESPTYPE,
     }),
     'url': `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&APIKey=${req.body.APIKey}&REQTYPE=${req.body.REQTYPE}&REFNO=${req.body.REFNO}&SERCODE=${req.body.SERCODE}&CUSTNO=${req.body.CUSTNO}&REFMOBILENO=${req.body.REFMOBILENO}&AMT=${req.body.AMT}&STV=${req.body.STV}&RESPTYPE=JSON`,
   
   };
   console.log(options);
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
  
  }
  


exports.balanceApi = async (req,res)=>{
    // const{MobileNo,REQTYPE,} = req.body
   var request = require('request');

   
   var options = {
     'method': 'POST',
     
     body: JSON.stringify({
       MobileNo:req.body.MobileNo,
       APIKey : req.body.APIKey,
       REQTYPE:req.body.REQTYPE,
       RESPTYPE :req.body.RESPTYPE,
     }),
     'url': `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&APIKey=${req.body.APIKey}&REQTYPE=${req.body.REQTYPE}&RESPTYPE=${req.body.RESPTYPE}`,
   
   };
   console.log(options);
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
  
  }
  