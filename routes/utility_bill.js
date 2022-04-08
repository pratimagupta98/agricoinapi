const express = require("express");
const router = express.Router();

const {
    utilitybill, 
  
} = require("../controller/utility_bill");

//Paths

 

router.post("/admin/utilitybill", utilitybill);
 

 //console.log

    
module.exports = router;
