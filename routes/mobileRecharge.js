 
const express = require("express");
const router = express.Router();

const {
   

  mobile_recharge,
  gettransaction,
  getusertransaction,
  elec_paybill,
  Elec_paybill
} = require("../controller/mobileRecharge");

//Paths

router.post("/admin/mobile_recharge", mobile_recharge);
router.get("/admin/gettransaction", gettransaction);
router.get("/admin/getusertransaction/:id", getusertransaction);
router.post("/admin/elec_paybill", elec_paybill);
router.get("/admin/Elec_paybill", Elec_paybill);


// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
