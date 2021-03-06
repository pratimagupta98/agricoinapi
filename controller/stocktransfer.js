 const Stocktransfer = require("../models/stocktransfer");


exports.addstocktransfer = (req,res)=>{
   
    const {product,reference_no,from_warehouse,to_warehouse,transfer_date,delivery_duedate,transfer_type,reason} = req.body

   let total_qty = 0;
  for (let i = 0; i < product.length; i++) {
    total_qty = total_qty + product[i].qty;
  }

  let total_amount = 0;
  for (let i = 0; i < product.length; i++) {
    total_amount =total_amount + product[i].amount;
   }
    
    const newStocktransfer = new Stocktransfer({
        product : product,
        reference_no : reference_no,
        from_warehouse :from_warehouse,
        to_warehouse : to_warehouse,
        transfer_date :transfer_date,
        delivery_duedate :delivery_duedate,
        transfer_type : transfer_type,
        reason :reason ,
        total_qty: total_qty,
        total_amount: total_amount,

    })
    newStocktransfer.save().then((data) => {
      res.status(200).json({
        status: true,
        msg: "successfully Order",
        data: data
        
      })
    })
      .catch((error) => {
        res.status(400).json({
          status: false,
          msg: "error",
          error: error
        })
      })
  
  };
    

    exports.editstocktranfer = async (req, res) => {
      const findandUpdateEntry = await Stocktransfer.findOneAndUpdate(
        {
          _id: req.params.id,
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
          status: "error",
          error: "error",
        });
      }
    };

    exports.getstocktransfer = async (req, res) => {
      const findall = await Stocktransfer.find().sort({ sortorder: 1 }).populate("reason").populate("transfer_type").populate("product")
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
    
    exports.getonestocktransfer = async (req, res) => {
      const findone = await Stocktransfer.findOne({ _id: req.params.id }).populate("reason").populate("transfer_type").populate("product")
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
exports.delstocktransfer = async(req,res) =>{
    try {
        const deleteentry   =  await Stocktransfer.deleteOne({_id : req.params.id})
        res.status(200).json({
            status : true,
            msg : "success",
            data : deleteentry
        })
    }catch(error){
        res.status(400).json({
            status : false,
            msg : "error",
            error : error
        })
    }
} 


 
 


