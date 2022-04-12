const Operators = require("../models/mo_operators");

exports.addOperators = async (req, res) => {
  const {
    service,
    code,
    re_type
  } = req.body;

  const newOperators = new Operators({
    service: service,
    code :code,
    re_type : re_type
  });

  const findexist = await Operators.findOne({ service: service });
  if (findexist) {
    res.status(400).json({
      status: false,
      msg: "Already Exists",
      data: {},
    });
  } else {
    newRecharge
      .save()
      .then(
        res.status(200).json({
          status: true,
          msg: "success",
          data: newRecharge,
        })
      )
      .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });
  }
};

exports.getOperators = async (req, res) => {
  const findall = await Operators.find().sort({ sortorder: 1 });
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

exports.totalBalance = async (req, res) => {
  const { MobileNo, APIKey, REQTYPE, RESPTYPE } = req.body;

  var request = require("request");

  const API_KEY = "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG";
  var options = {
    method: "POST",
    body: req.body,
    APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
    url: `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=8121787777&APIKey=vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG&REQTYPE=BAL&RESPTYPE=JSON`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
    }),
  };
  request(options, function (error, response) {
    if (error) {
      throw new Error(error);
      res.json(error);
    }
    res.send(response.body);
    console.log(response.body);
    //const serverRes = response.body
    //return response.body
  });
  // res.end()
};

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

exports.mobileRecharge = async (req, res) => {
  const {
    MobileNo,
    APIKey,
    REQTYPE,
    REFNO,
    SERCODE,
    CUSTNO,
    REFMOBILENO,
    AMT,
    STV,
    RESPTYPE

  } = req.body;

  const newRecharge = new Recharge({
    MobileNo:MobileNo,
    APIKey:APIKey,
    REQTYPE:REQTYPE,
    REFNO:REFNO,
    SERCODE:SERCODE,
    CUSTNO:CUSTNO,
    REFMOBILENO:REFMOBILENO,
    AMT:AMT,
    STV:STV,
    RESPTYPE:RESPTYPE
  });

  const findexist = await Recharge.findOne({ service: service });
  if (findexist) {
    res.status(400).json({
      status: false,
      msg: "Already Exists",
      data: {},
    });
  } else {
    newRecharge
      .save()
      .then(
        res.status(200).json({
          status: true,
          msg: "success",
          data: newRecharge,
        })
      )
      .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error,
        });
      });
  }
};


exports.mobileRecharge = async (req, res) => {
  var request = require("request");
  const { MobileNo, APIKey, REQTYPE, REFNO,SERCODE,CUSTNO,REFMOBILENO,AMT,STV,RESPTYPE } = req.body;

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

  const newRecharge = new Recharge({
    MobileNo :MobileNo,
   // APIKey : APIKey,
    REQTYPE :REQTYPE,
    REFNO :randomString,
    SERCODE :SERCODE,
    CUSTNO : CUSTNO,
    REFMOBILENO :REFMOBILENO,
    AMT :AMT,
    STV :STV,
    RESPTYPE :RESPTYPE,
    'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx',

  })
  newRecharge
  .save()
  .then(
    res.status(200).json({
      status: true,
      msg: "success",
      data: newRecharge,
    })
  )
  .catch((error) => {
    res.status(400).json({
      status: false,
      msg: "error",
      error: error,
    });
  });
}

  
  // var newRecharge = new Recharge({
  //   MobileNo: MobileNo,
  //   REQTYPE: REQTYPE,
  //   REFNO :REFNO,
  //   SERCODE :SERCODE,
  //   CUSTNO :CUSTNO,
  //   REFMOBILENO :REFMOBILENO,
  //   AMT :AMT,
  //   STV :STV,
  //   RESPTYPE :RESPTYPE
   
  // });

//   var options = {
//     method: "POST",
//     body: req.body,
//     MobileNo :  req.body,
//     // APIKey : APIKey,
//      REQTYPE : REQTYPE,
//      REFNO : REFNO,
//      SERCODE : SERCODE,
//      CUSTNO :  CUSTNO,
//      REFMOBILENO : REFMOBILENO ,
//      AMT : AMT ,
//      STV : STV  ,
//      RESPTYPE :req.body.RESPTYPE,

//      'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx',
//     // url: `https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=${req.body.MobileNo}&APIKey=['vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG']&REQTYPE=RECH&REFNO=${req.body.REFNO}&SERCODE=${req.body.ServiceCode}&CUSTNO=${req.body.ConsumerNo}&REFMOBILENO=${req.body.REFMOBILENO}&AMT=${req.body.AMT}&STV=0&RESPTYPE=JSON`,
    
//     //  headers: {
//     //   "Content-Type": "application/json",
//     // },
//     body: JSON.stringify({
//       APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",

      
//     }),
  
//   }
  
//   console.log(options);

//   Recharge.create(options, function (err, data) {
//     console.log(data);
//     res.json({
//       data: data,
//     });
//     if (err) {
//       res.json({
//         err: err,
//       });
//     }
//   });
// };

//   request(options, function (error, response) {
//     if (error) {
//       throw new Error(error);
//       res.json(error);
//     }
//     res.send(response.body);
//     console.log(response.body);
//     //const serverRes = response.body
//     //return response.body
//   });
//   // res.end()
// };

// exports.mobileRecharge = async (req, res) => {
//   var request = require("request");

//   var options = {
//     method: "POST",
//     body: req.body,
//     //  'url': 'https://auth.reloadly.com/oauth/token',
//     url: "https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx?MobileNo=8121787777&APIKey=vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG&REQTYPE=RECH&REFNO=AB81217877AA912&SERCODE=ID&CUSTNO=7489651191&REFMOBILENO=8461809095&AMT=10&STV=0&RESPTYPE=JSON",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       APIKey: "vzfWPhGe8GQRWHarKgzFVXJYxmkgFLdZrUG",
//     }),
//   };
//   request(options, function (error, response) {
//     if (error) {
//       throw new Error(error);
//       res.json(error);
//     }
//     res.send(response.body);
//     console.log(response.body);
//     //const serverRes = response.body
//     //return response.body
//   });
//   // res.end()
// };


exports.demo = async (req,res)=>{
 // const{MobileNo,REQTYPE,} = req.body
var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://www.rechargedaddy.in/RDRechargeAPI/RechargeAPI.aspx',
  
  body: JSON.stringify({
    MobileNo:req.body.MobileNo,
    APIKey : req.body.APIKey,
    REQTYPE:req.body.REQTYPE,
    REFNO: req.body.REFNO,
    SERCODE: req.body.SERCODE,
    CUSTNO : req.body.CUSTNO,
    REFMOBILENO :req.body.REFMOBILENO ,
    AMT : req.body.AMT ,
    STV : req.body.STV ,
    RESPTYPE :req.body.RESPTYPE,
  })

};
console.log(options);
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
})
}