const   EleOperator = require("../models/electricity_operators.js");

exports.Elec_Operator = async (req, res) => {
  const {
    service,
    code,
    re_type
  } = req.body;

  const newEleOperator = new EleOperator({
    service: service,
    code :code,
    re_type : re_type
  });

  const findexist = await EleOperator.findOne({ service: service });
  if (findexist) {
    res.status(400).json({
      status: false,
      msg: "Already Exists",
      data: {},
    });
  } else {
    newEleOperator
      .save()
      .then(
        res.status(200).json({
          status: true,
          msg: "success",
          data: newEleOperator,
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

exports.getEleOperators = async (req, res) => {
  const findall = await EleOperator.find().sort({ sortorder: 1 });
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

 
 