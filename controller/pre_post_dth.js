const PrePostDth = require('../models/pre_post_dth');


exports.addMo_Dthoper = async (req, res) => {

    const { code, service, param, amount_range, min, max, type,  } = req.body

    const newPrePostDth = new PrePostDth({
        code: code,
        service: service,
        param: param,
        amount_range: amount_range,
        min: min,
        max: max,
        type: type,
      

    });

    const findexist = await PrePostDth.findOne({ code: code })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exist",
            data: {}
        })
    } else {
    
        newPrePostDth.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newPrePostDth
                })
            )
            .catch(error => {
                res.status(400).json({
                    status: false,
                    msg: "error",
                    error: error
                })
            })
    }
}


exports.dthlist = async(req,res)=>{
    const getelectype = await PrePostDth.find({type :"DTH"})

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

  exports.prepaidlist = async(req,res)=>{
    const getelectype = await PrePostDth.find({type :"PREPAID"})

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


  exports.postpaidlist = async(req,res)=>{
    const getelectype = await PrePostDth.find({type :"POSTPAID"})

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