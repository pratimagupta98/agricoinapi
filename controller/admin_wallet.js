const AdminWallet = require("../models/admin_wallet");
const Wallet = require("../models/wallet");

const Mobilerecharge = require("../models/mobileRecharge");


exports.addAmount = async (req, res) => {
  const {walletId,customer, amount ,status} = req.body;

  const newAdminWallet = new AdminWallet({
    //customer: customer,
    walletId:walletId,
    //walletId: uuidv4(),
    amount: amount,
    status:status
    
    
  });

  const getdata = await Wallet.findOne({_id :req.body.walletId})
  console.log("Getdata",getdata)
  if(getdata){
    let oldamt = getdata.amount
      console.log("amout",oldamt)
      currntamt = parseInt(oldamt)+ parseInt(req.body.amount)
      console.log("Result",currntamt)
    }
  
  const findandUpdateEntry = await Wallet.findOneAndUpdate(
    
      { _id: req.body.walletId },
      
      { $set: {amount:currntamt,status:"success"} },
      
    //     { amount: currntamt },
         
    // { $set: {status:"success"} },
    { new: true }
  );
 
  newAdminWallet.save().then((data)=>{
    res.status(200).json({
        status : true,
        msg : "success",
        data : data,
        amount: currntamt, 
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
  const findall = await AdminWallet.find().populate("customer") 
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