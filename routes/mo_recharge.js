const express = require("express");
const router = express.Router();

const {
  Recharge,
  Plans
  // mobileRecharge,
} = require("../controller/mo_recharge");

//Paths

router.post("/admin/Recharge", Recharge);
router.post("/admin/Plans", Plans);

// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
 