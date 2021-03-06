const Purchaseorder = require("../models/newpurchaseorder");
const Seller = require("../models/seller");


exports.addnewpurchaseorder = async (req, res) => {
  const {
    //seller,
    supplier,
    product,
    stock_due,
    gstIn,
    payment_due,
    orderId,
    invoiceNo,
    invoice_date,
    amount,
    transportation_cost,
    grand_total,
    instructions
  } = req.body;

  create_randomString(12);
  function create_randomString(string_length) {
    (randomString = ""),
      (characters =
        "1234567890");
    for (var i, i = 0; i < string_length; i++) {
      randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomString;
  }


  // generateRandomNumber(6)
  // function generateRandomNumber(numberOfCharacters) {
  //   var randomValues = "";
  //   var stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';
  //   var sizeOfCharacter = stringValues.length;
  //   for (var i = 0; i < numberOfCharacters; i++) {
  //     randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
  //   }
  //   return randomValues;
  // }
  // console.log(generateRandomNumber(6));
  // str(7);
  // function str(strlength) {
  //   (randomstr = ""),
  //     (chars =
  //       "1234567890");
  //   for (var i, i = 0; i < strlength; i++) {
  //     randomstr += chars.charAt(
  //       Math.floor(Math.random() * chars.length)
  //     );
  //   }
  //   return randomstr;
  // }




  const invoiceDate = new Date();
  invoiceDate.getTime();

  const newpurchaseorder = new Purchaseorder({
    //seller: seller,
    supplier: supplier,
    product: product,
    stock_due: stock_due,
    gstIn: gstIn,
    payment_due: payment_due,
   orderId: randomString,
    invoiceNo: randomString,
    invoice_date: invoiceDate,
    amount: amount,
    transportation_cost: transportation_cost,
    grand_total : grand_total,
    instructions : instructions
  });
  newpurchaseorder.save().then((data) => {
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

exports.getpurchaseorder = async (req, res) => {
  const findall = await Purchaseorder.find() 
    .sort({ sortorder: 1 }).populate("product")
    .populate("supplier").then((data) => {
      res.status(200).json({
        status: true,
        msg: "success",

        data: data

      })
    }).catch((error) => {
      res.status(400).json({
        status: false,
        msg: "error",
        error: error
      })
    })
};


exports.editnewpurchaseorder = async (req, res) => {
  const findandUpdateEntry = await Purchaseorder.findOneAndUpdate(
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


exports.getonepurchaseorder = async (req, res) => {
  const findone = await Purchaseorder.findOne({ _id: req.params.id }).populate("product").populate("supplier")
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
exports.delpurchaseorder = async (req, res) => {
  try {
    const deleteentry = await Purchaseorder.deleteOne({ _id: req.params.id });
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





