const Orderproduct = require("../models/orderproduct");
const Store = require("../models/store");
const { v4: uuidv4 } = require("uuid");
const Seller = require("../models/seller");
const Product = require("../models/product");
const { populate } = require("../models/orderproduct");

exports.addorder = async (req, res) => {
  console.log();

  // const getstore = await Store.findOne({product : req.params.id})
  //  if(getstore){
  // const seller = getstore.seller
  //console.log(req.params.id)
  const getproduct = await Product.findOne({ _id: req.body.product});
  //console.log(getproduct)
  if (getproduct) {
    //const seller = getstore.Seller;
    const getstore = await Store.findOne({ _id: getproduct.store });

    const {
      //  seller,
      product,
      order_type,
      payment_type,
      orderId,
      qty,
      purchaseprice,
      delivery_address,
      order_date,
      status,
      //size,
      //color,
    } = req.body;

    // const verifycoupon = await Coupon.find({CouponTitle:})

    const newOrderproduct = new Orderproduct({
      customer: req.userId,
      seller: getstore?.seller,
      product: product,
      order_type: order_type,
      payment_type: payment_type,
      orderId: uuidv4(),
      qty: qty,
      purchaseprice: purchaseprice,
      delivery_address: delivery_address,
      order_date: order_date,
      // size: size,
      //color: color,
      status: status,
    });

    const findexist = await Orderproduct.findOne({
      $and: [
        { customer: req.userId },
        { product: product },
        { purchaseprice: purchaseprice },
        { qty: qty },
      ],
    });
    if (findexist) {
      await Orderproduct.findOneAndUpdate({
        $and: [
          { customer: req.userId },
          { product: product },
          { purchaseprice: purchaseprice },
          { qty: qty },
          { new: true },
        ],
      })
        .then((data) => {
          res.status(200).json({
            status: true,
            msg: "success",
            data: data,
          });
        })
        .catch((error) => {
          res.status(200).json({
            status: false,
            msg: "error",
            error: error,
          });
        });
    } else {
      newOrderproduct.save(function (err, data) {
        if (err) {
          res.status(400).json({
            status: false,
            msg: "Error Occured",
            error: err,
          });
        } else {
          res.status(200).json({
            status: true,
            msg: "Product added to order",
            data: data,
          });
        }
      });
    }
  }
};

exports.getorder = async (req, res) => {
  const findall = await Orderproduct.find({ customer: req.userId })
    .sort({ sortorder: 1 })
    .populate("customer")
    .populate("product")
    .populate("seller")
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

exports.getorderbysellerbytoken = async (req, res) => {
  const getstore = await Store.findOne({ product: req.params.id });

  const findone = await Orderproduct.find({ id: req.sellerId })
    .populate("product")
    .populate("customer")
    .populate("delivery_address")
    // .populate({
    //   path: "product",
    //   populate: {
    //     path: "product",
    //   },
    // })
    .populate("seller");
  if (findone) {
    res.status(200).json({
      status: true,
      msg: "success",
      data: findone,
      //   seller : getseller
    });
  } else {
    res.status(400).json({
      status: false,
      msg: "error",
      error: "error",
    });
  }
};
//}

exports.pending_order = async (req, res, next) => {
  const finddetails = await Orderproduct.find({
    $and: [{ seller: req.sellerId }, { status: "Pending" }],
  })
    .populate("customer")
    .populate("product")
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

exports.delivery_order = async (req, res, next) => {
  const finddetails = await Orderproduct.find({
    $and: [{ customer: req.userId }, { status: "Delivery" }],
  })
    .populate("customer")
    .populate("product")
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

exports.cancelled_order = async (req, res, next) => {
  const finddetails = await Orderproduct.find({
    $and: [{ customer: req.userId }, { status: "Cancel" }],
  })
    .populate("customer")
    .populate("product")
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

exports.complete_order = async (req, res, next) => {
  const finddetails = await Orderproduct.find({
    $and: [{ customer: req.userId }, { status: "Complete" }],
  })
    .populate("customer")
    .populate("product")
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

exports.salesbyseller = async (req, res) => {
  const findall = await Orderproduct.find({
    $and: [{ id: req.sellerId }, { status: "Complete" }],
  })
    .populate("customer")
    .populate("product")
    // .populate({
    //   path: "product",
    //   populate: {
    //     path: "seller",
    //   },
    // })
    .then((data) => {
      res.status(200).json({
        status: true,
        msg: "success",
        data: data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        error: "error",
        error: error,
      });
    });
};

exports.del_order = async (req, res) => {
  try {
    const deleteentry = await Orderproduct.deleteOne({ _id: req.params.id });
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

exports.totalorder = async (req, res) => {
  await Orderproduct.countDocuments()
    .then((data) => {
      res.status(200).json({
        status: true,
        data: data,
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: false,
        msg: "error",
        error: error,
      });
    });
};

exports.editOrder = async (req, res) => {
  const findandUpdateEntry = await Orderproduct.findOneAndUpdate(
    {
      $and: [{ id: req.sellerId }, { _id: req.params.id }],
    },
    { $set: req.body },
    { new: true }
  )
    .then((result) => {
      res.status(200).json({
        status: true,
        msg: "Order Update",
        data: result,
      });
    })
    .catch((error) => {
      res.status(200).json({
        status: true,
        msg: "error",
        error: error,
      });
    });
};

exports.viewoneOrder = async (req, res) => {
  const findone = await Orderproduct.findOne({
    $and: [{ id: req.sellerId }, { _id: req.params.id }],
  })
    .populate("product")
    .populate("customer")
    .populate("delivery_address");
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
