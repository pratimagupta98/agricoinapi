 
const express = require("express");
const router = express.Router();

const {
   

  mobile_recharge,
  gettransaction
} = require("../controller/mobileRecharge");

//Paths

router.post("/admin/mobile_recharge", mobile_recharge);
router.get("/admin/gettransaction", gettransaction);


// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);

module.exports = router;
