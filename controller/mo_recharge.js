const Recharge = require("../models/mo_recharge");

 
exports.mo_recharge = async (req,res)=>{
  const { MobileNo, APIKey, REQTYPE,RESPTYPE } = req.body;

    var request = require('request');
    

    const API_KEY = "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG"
    var options = {
      'method': 'POST',
      "body" : req.body,
      "APIKey": "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
      'url'  :`https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=8121787777&APIKey=vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG&REQTYPE=BAL&RESPTYPE=JSON`,
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "APIKey": "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
 
      })
    
    };
    request(options, function (error, response) {
      if (error) {
      throw new Error(error);
      res.json(error)
    }
    res.send(response.body)
      console.log(response.body);
      //const serverRes = response.body
      //return response.body
    
    });
    // res.end()
    }

     
//     exports.mobileRecharge = async (req,res)=>{
//         var options = {
//             "method": "POST",
//             "body" : "req.body",
//           //  'url': 'https://auth.reloadly.com/oauth/token',
//             'url'  :'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx',
//             'headers': {
//               'Content-Type': 'application/json',
//             },
//         }
//         // const response = await fetch(url , options)
//         // .then(res => res.json())
//         // .catch(e =>{
//         //     console.error({
//         //         "message " : "success",
//         //         "error" : e,
//         //     })
//         // })

//         const request = async (url) => {
//             const response = await fetch(url);
//             const json = await JSON.stringify(response.json());
//             return json;
//         }
//         let tree = request('humans.json');
    
//         console.log(tree);
    
// console.log("RESPONSE : ",response )
// res.json(response)
//     }


exports.mobileRecharge = async (req,res)=>{
    var request = require('request');
    
    var options = {
      'method': 'POST',
      "body" : req.body,
    //  'url': 'https://auth.reloadly.com/oauth/token',
      'url'  :"https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=[MobileNo]&APIKey=[APIKey]&REQTYPE=RECH&REFNO=[REFNO]&SERCODE=[ServiceCode/OperatorCode]&CUSTNO=[ConsumerNo]&REFMOBILENO=[CustomerMobileNo]&AMT=[AMOUNT]&STV=[IsSTV]&RESPTYPE=JSON",
      'headers': {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
    
        "APIKey": "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
       
      })
    
    };
    request(options, function (error, response) {
      if (error) {
      throw new Error(error);
      res.json(error)
    }
    res.send(response.body)
      console.log(response.body);
      //const serverRes = response.body
      //return response.body
    
    });
    // res.end()
    }