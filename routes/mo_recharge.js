const express = require("express");
const router = express.Router();

const {
  mo_recharge,
  mobileRecharge,
  abc,
} = require("../controller/mo_recharge");

//Paths

router.post("/admin/mo_recharge", mo_recharge);
router.post("/admin/mobileRecharge", mobileRecharge);
router.post("/admin/abc", abc);

// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);
// router.get("/admin/getallcountries", getallcountries);

module.exports = router;
