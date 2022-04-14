const express = require("express");
const router = express.Router();

const {
  Elec_Recharge,

  // mobileRecharge,
} = require("../controller/ele_recharge");

//Paths

router.post("/admin/Elec_Recharge", Elec_Recharge);

// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
