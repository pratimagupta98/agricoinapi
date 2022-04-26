const Mobilerecharge = require("../models/mobileRecharge");

exports.mobile_recharge = async(req,res)=>{
  const {walletId,amount,biller_code,number,agent_id} = req.body
//var request = require('request');

// const newMobilerecharge = new Mobilerecharge({
//   customerId : customerId,
//   amount : amount,
//   biller_code : biller_code,
//   number : number,
  
// })


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
  
  const newMobilerecharge = new Mobilerecharge({
    walletId : walletId,
    amount : amount,
    biller_code : biller_code,
    number : number,
    
  })
  const findone = await Mobilerecharge.findOne({  $and: [{ walletId: walletId }, { amount: amount }], });
  const http = require("https");
if(findone){
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
      "amount": req.body.amount,
      "biller_code": req.body.biller_code,
      "number": req.body.number,
      "agent_id": "SOXY" +randomString
    }
  })

};

var req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end()
res.status(200).json({
  status: true,
  msg: "success",
  data : findone,
  details : data

})
}
}


// let result = await newMobilerecharge.create(options);
// console.log(result)

// request(options, function (error, response) {
//   if (error){
//     throw new Error(error);
//     res.json(error) ;
//   } 
  
// })
 
// }











 //console.log(response.body);
  // newMobilerecharge
  // .save()
  // .then((data) => {
  //     res.status(200).json({
  //         status: true,
  //         msg: "success",
  //         data: data,
  //     });
  // })
  // .catch((error) => {
  //     res.status(400).json({
  //         status: false,
  //         msg: "error",
  //         error: error,
  //     });
  // });
  // }