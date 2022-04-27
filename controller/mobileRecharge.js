const Mobilerecharge = require("../models/mobileRecharge");

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

exports.mobile_recharge = async(req,res)=>{
var request = require('request');
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
      amount: req.body.amount,
      biller_code:req.body.biller_code,
      number: req.body.number,
      agent_id:"SOXY" +randomString,
    }
  })

};

 let result = await Mobilerecharge.create(options);
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

}


