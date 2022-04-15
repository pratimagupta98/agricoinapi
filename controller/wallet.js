const Wallet = require("../models/wallet");
//const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");


exports.deposite_wallet = async (req, res) => {
  const {customer, amount,pay_method,depsite_file ,status} = req.body;

  const newWallet = new Wallet({
    customer: customer,
    //walletId: uuidv4(),
    amount: amount,
    depsite_file : depsite_file,
    pay_method :pay_method,
    status :status
  });
    
  if(req.file){
    const resp = await cloudinary.uploader.upload(req.file.path);
      if (resp) {
        newWallet.depsite_file = resp.secure_url;
        fs.unlinkSync(req.file.path);
  
  newWallet.save(function (err, data) {
    if (err) {
      res.status(400).json({
        status: false,
        msg: "error occured",
        error: err,
      });
    } else {
      res.status(200).json({
        status: true,
        msg: "Amount added to wallet",
        data: newWallet,
      });
    }
  });
}
};
}

//   (function (err, data) {
//     if (err) {
//       res.status(400).json({
//         status: false,
//         msg: "error occured",
//         error: err,
//       });
//     } else {
//       res.status(200).json({
//         status: true,
//         msg: "Amount added to wallet",
//         data: newWallet,
//       });
//     }
//   });
// };

exports.getwallet = async (req, res) => {
  const findall = await Wallet.find().populate("customer")
    .sort({ sortorder: 1 })
    .then((result) => {
      res.status(200).json({
        status: true,
        msg: "success",
        data: result,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "error",
        error: "error",
      });
    });
};


 
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