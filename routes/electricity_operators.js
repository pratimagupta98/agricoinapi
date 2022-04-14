const express = require("express");
const router = express.Router();

const {
    Elec_Operator,
    getEleOperators
  
} = require("../controller/electricity_operators.js");

//Paths

router.post("/admin/Elec_Operator", Elec_Operator);
router.get("/admin/getEleOperators", getEleOperators);
 

// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);
// router.get("/admin/getallcountries", getallcountries);

module.exports = router;