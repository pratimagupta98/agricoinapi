const express = require("express");
const router = express.Router();

const {
    operators,accesstoken,detectoperator,getoperatorbyid,getallcountries
  
} = require("../controller/operators");

//Paths

router.get("/admin/accesstoken", accesstoken);

router.get("/admin/operators", operators);
router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
router.get("/admin/getoperatorbyid/:id", getoperatorbyid);
router.get("/admin/getallcountries", getallcountries);

    
module.exports = router;
