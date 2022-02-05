const express = require("express");
const router = express.Router();

const {
    operators,accesstoken,detectoperator,getoperatorbyid
  
} = require("../controller/operators");

//Paths

router.get("/admin/accesstoken", accesstoken);

router.get("/admin/operators", operators);
router.get("/admin/detectoperator", detectoperator);
router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

    
module.exports = router;
