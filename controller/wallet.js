const Wallet = require("../models/wallet");
//const { v4: uuidv4 } = require("uuid");
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
 


// exports.deposite_wallet = async (req, res) => {
//   const {customer, amount,pay_method,depsite_file } = req.body;

//   const newWallet = new Wallet({
//     customer: customer,
//     //walletId: uuidv4(),
//     amount: amount,
//     depsite_file : depsite_file,
//     pay_method :pay_method
//   });
    
//   // if(req.file){
//   //   const resp = await cloudinary.uploader.upload(req.file.path);
//   //     if (resp) {
//   //       newWallet.depsite_file = resp.secure_url;
//   //       fs.unlinkSync(req.file.path);
  
//   newWallet.save(function (err, data) {
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
// }
// //};
//}

 
exports.deposite_wallet = async (req, res) => {
  const { customer, amount, pay_method,  status } = req.body;

  const newWallet = new Wallet({
    customer: customer,
    amount: amount,
    pay_method: pay_method,
     depsite_file: depsite_file,
    status: status,
  });
  const getdata = await Wallet.findOne({customer :req.body.customer})
  console.log("Getdata",getdata)
  if(getdata){
    let oldamt = getdata.amount
      console.log("amout",oldamt)
      currntamt = parseInt(oldamt)+ parseInt(req.body.amount)
      console.log("Result",currntamt)
    }
  const findandUpdateEntry = await Wallet.findOneAndUpdate(
      { customer: req.body.customer },
      
      {$set: {amount:currntamt}} ,
      
      
         
    
    
    //{ $set: {status:"success"} },
    { new: true }
  );
   
      const resp = await cloudinary.uploader.upload(req.file.path);
      if (resp) {
        newWallet.depsite_file = resp.secure_url;
        fs.unlinkSync(req.file.path);
        newBrand.save().then(
          res.status(200).json({
            status: true,
            msg: "success",
            data: newWallet,
          })
        );
      } else {
        res.status(200).json({
          status: false,
          msg: "img not uploaded",
        })
   
        .catch((error) => {
          res.status(400).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
    }
  }

exports.getone = async (req, res) => {
  const getdata = await Wallet.findOne({customer:req.params.id})
  console.log(getdata)
 if(getdata){

   let oldamt = getdata.amount
   console.log("amout",oldamt)
  
    currntbalance = parseInt(oldamt)+ parseInt(req.body.amount)
   console.log("Result",currntbalance)
 

    
   // console.log(sum);
    //console.log(findone)
    res.status(200).json({
      status: true,
      msg: "success",
      data: getdata,
       // total: sum,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};


exports.updatewallet = async (req, res) => {

  const findandUpdateEntry = await Wallet.findOneAndUpdate(

    
    {
      
      $and: [
        { userId: req.body.id },
        { amount: currntamt },
      ],
    },
    { $set: req.body },
    { new: true }
  );
  if (findandUpdateEntry) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findandUpdateEntry,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }

}
 
exports.deposite_wallet = async (req, res) => {
  const { customer, amount,pay_method,depsite_file,status} = req.body;

  const newWallet = new Wallet({
    customer: customer,
    amount: amount,
    pay_method :pay_method,
    depsite_file :depsite_file,
    status :status,
   
  });
 
  if(req.file){
        const resp = await cloudinary.uploader.upload(req.file.path);
          if (resp) {
            newWallet.depsite_file = resp.secure_url;
            fs.unlinkSync(req.file.path);
          
  newWallet.save().then((data)=>{
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
}
}
  
 


// exports.addwallet = async (req, res) => {
//   const {userId,amount} = req.body
//   let userobject = {
//     userId: userId,
//     amount: amount,
//   };
//   let result = await Wallet.create(userobject);
//   //await DealershipBayMap.insertMany(bay_map);
// const getdata = await wallet.findOne({userId:req.body.id})
// console.log(getdata)
// if(getdata){
//   let oldamt = getdata.amount
//   console.log("amout",oldamt)
//   let currntamt = oldamt+ req.body.amount
//   console.log("Result",currntamt)
// }
//   // res.successr(res, result);
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

exports.del_wallet = async (req, res) => {
  try {
    const deleteentry = await Wallet.deleteOne({ _id: req.params.id });
    res.status(200).json({
      status: true,
      msg: "success",
      data: deleteentry,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      msg: "error",
      error: error,
    });
  }
};



exports.getalltransaction = async (req, res) => {
  const findone = await Wallet.find({ customer: req.params.id });
  if (findone) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findone,
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};