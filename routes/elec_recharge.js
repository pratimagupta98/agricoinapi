const express = require("express");
const router = express.Router();

const {
    elec_recharge,
    gettransaction
  
} = require("../controller/elec_recharge.js");

//Paths

// router.post("/admin/elec_recharge", elec_recharge);
// router.get("/admin/gettransaction", gettransaction);
 

// router.get("/admin/operators/auto-detect/:phone/:country", detectoperator);
// router.get("/admin/getoperatorbyid/:id", getoperatorbyid);
// router.get("/admin/getallcountries", getallcountries);

module.exports = router;