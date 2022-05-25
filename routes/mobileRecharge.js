 
const express = require("express");
const router = express.Router();

const {
   

  mobile_recharge,
  gettransaction,
  getusertransaction,
  elec_paybill,
  elec_bill_listadmin,
  fetch_Bill,
  dth_recharge,
  del_recharges,
  Dth_listadmin,
  elec_bill_admin
} = require("../controller/mobileRecharge");

//Paths

router.post("/admin/mobile_recharge", mobile_recharge);
router.get("/admin/gettransaction", gettransaction);
router.get("/admin/getusertransaction/:id", getusertransaction);
router.post("/admin/elec_paybill", elec_paybill);
router.post("/admin/fetch_Bill", fetch_Bill);

router.get("/admin/elec_bill_listadmin", elec_bill_listadmin);
router.post("/admin/dth_recharge", dth_recharge);

router.get("/admin/del_recharges/:id", del_recharges);
router.get("/admin/Dth_listadmin", Dth_listadmin);
router.get("/admin/elec_bill_admin", elec_bill_admin);



// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
