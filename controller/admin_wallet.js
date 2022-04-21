const AdminWallet = require("../models/admin_wallet");
 


exports.addAmount = async (req, res) => {
  const {walletId, amount ,status} = req.body;

  const newAdminWallet = new AdminWallet({
    walletId: walletId,
    //walletId: uuidv4(),
    amount: amount,
    status:status
    
  });
  newAdminWallet.save().then((data)=>{
    res.status(200).json({
        status : true,
        msg : "success",
        data : data
    })
}).catch((error)=>{
    res.status(400).json({
        status : false,
        error : "error",
        error : error
    })
})

}

 

exports.getalldata = async (req, res) => {
  const findall = await AdminWallet.find().populate("walletId").populate({
      path: "walletId",
      populate: {
        path: "customer",
      },
    })
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