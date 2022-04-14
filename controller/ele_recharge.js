const EleRecharge = require("../models/ele_recharge.js");

exports.Elec_Recharge = async (req, res) => {
  // const{MobileNo,REQTYPE,} = req.body
  var request = require("request");

  create_randomString(7);
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
  console.log("Result", randomString);
  var options = {
    method: "POST",
    //  'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=[MobileNo]&APIKey=[APIKey]&REQTYPE=RECH&REFNO=[REFNO]&SERCODE=[ServiceCode/OperatorCode]&CUSTNO=[ConsumerNo]&REFMOBILENO=[CustomerMobileNo]&AMT=[AMOUNT]&STV=[IsSTV]&RESPTYPE=JSON',

    body: JSON.stringify({
      REFNO: randomString,
      MobileNo: req.body.MobileNo,
      APIKey: req.body.APIKey,
      REQTYPE: req.body.REQTYPE,
      SERCODE: req.body.SERCODE,
      CUSTNO: req.body.CUSTNO,
      REFMOBILENO: req.body.REFMOBILENO,
      AMT: req.body.AMT,
      STV: req.body.STV,
      PCODE: req.body.PCODE,
      LAT: req.body.LAT,
      LONG: req.body.LONG,
      RESPTYPE: req.body.RESPTYPE,
    }),
    //  'url': `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&APIKey=${req.body.APIKey}&REQTYPE=${req.body.REQTYPE}&REFNO=${randomString}&SERCODE=${req.body.SERCODE}&CUSTNO=${req.body.CUSTNO}&REFMOBILENO=${req.body.REFMOBILENO}&AMT=${req.body.AMT}&STV=${req.body.STV}&RESPTYPE=JSON`,

    url: `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&amp;APIKey=${req.body.APIKey}&amp;REQTYPE=${req.body.REQTYPE}&amp;REFNO=${randomString}&amp;SERCODE=${req.body.SERCODE}&amp;CUSTNO=${req.body.CUSTNO}&amp;REFMOBILE
    NO=${req.body.REFMOBILENO}&amp;AMT=${req.body.AMT}&amp;STV=${req.body.STV}&amp;FIELD1=[FIELD1]&amp;FIELD2=[FIELD2]&amp;FIELD3=[FIELD3]&amp;FIELD4=[FIELD4]&amp;FIELD5=[FIELD5]&amp;PCODE=${req.body.PCODE}&amp;LAT=${req.body.LAT}&amp;LONG=${req.body.LONG}&amp;RESPTYPE=${req.body.JSON}`,
  };
  console.log(options);
  request(options, function (error, response) {
    if (error) {
      throw new Error(error);
      res.json(error);
      console.log(response.body);
    }

    res.send(response.body);
    var serverRes = response.body;
    return serverRes;
  });
};

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
