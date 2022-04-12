const express = require("express");
const router = express.Router();

const {
    moRecharge,
    balanceApi
 // mobileRecharge,
  
} = require("../controller/mo_recharge");

//Paths

router.post("/admin/moRecharge", moRecharge);
router.post("/admin/balanceApi", balanceApi);
 


// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);
 
module.exports = router;
