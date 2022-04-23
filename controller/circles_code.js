const Circle = require("../models/circles_code");
 

exports.addCirles = async (req, res) => {
  const {circle_code,circle_name
   
  } = req.body;
 
   
  const newCircle = new Circle({
    circle_code :circle_code,
    circle_name :circle_name
  
  });
  newCircle
    .save()
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
        msg: "Cirles Added",
        data: error,
      });
    });
};



exports.getcircles = async(req,res) =>{
    const findetails = await Circle.find().sort({ sortorder: 1 });

    if(findetails){
    res.status(200).json({
        status :true,
        msg : "success",
        data : findetails
    })
    }else{
        res.status(200).json({
            status :false,
            msg : "error",
            error : "error"
        })
    }
}