const ElecBlist = require('../models/elc_billerlist');


exports.addbileerlist = async (req, res) => {

    const { code, service, param, optional1, optional2, optional3, amount_range, min, max, type, bill_fetch, bbps,isText, bbpsStatus} = req.body

    const newElecBlist = new ElecBlist({
        code: code,
        service: service,
        param: param,
        optional1: optional1,
        optional2: optional2,
        optional3: optional3,
        amount_range: amount_range,
        min: min,
        max: max,
        type: type,
        bill_fetch: bill_fetch,
        bbps: bbps,
        isText:isText,
        bbpsStatus:bbpsStatus

    });

    const findexist = await ElecBlist.findOne({ code: code })
    if (findexist) {
        res.status(400).json({
            status: false,
            msg: "Already Exist",
            data: {}
        })
    } else {
    
        newElecBlist.save()
            .then(
                res.status(200).json({
                    status: true,
                    msg: "success",
                    data: newElecBlist
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


exports.electricity_operator = async(req,res)=>{
    const getelectype = await ElecBlist.find({type :"ELECTRICITY"})

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


   