const express = require("express");
const router = express.Router();

const {
  operatorLookup,
  Plans
  // mobileRecharge,
} = require("../controller/mo_recharge");

//Paths

router.post("/admin/operatorLookup", operatorLookup);
router.post("/admin/Plans", Plans);

// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
 