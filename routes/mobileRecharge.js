 
const express = require("express");
const router = express.Router();

const {
   

  mobile_recharge,
  gettransaction,
  getusertransaction,
  elec_recharge,
  Elec_gettransaction
} = require("../controller/mobileRecharge");

//Paths

router.post("/admin/mobile_recharge", mobile_recharge);
router.get("/admin/gettransaction", gettransaction);
router.get("/admin/getusertransaction/:id", getusertransaction);
router.post("/admin/elec_recharge", elec_recharge);
router.get("/admin/Elec_gettransaction", Elec_gettransaction);


// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
