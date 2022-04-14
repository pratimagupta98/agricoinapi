const express = require("express");
const router = express.Router();

const {
    totalBalance,
  mobileRecharge,
  addOperators,
  getOperators,
  demo,
  operatorbytype
} = require("../controller/mo_operators");

//Paths

router.post("/admin/totalBalance", totalBalance);
router.post("/admin/mobileRecharge", mobileRecharge);
router.post("/admin/addOperators", addOperators);
router.get("/admin/getOperators", getOperators);
router.get("/admin/operatorbytype/:id", operatorbytype);

router.post("/admin/demo", demo);


// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);
// router.get("/admin/getallcountries", getallcountries);

module.exports = router;