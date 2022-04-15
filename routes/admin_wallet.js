const express = require("express");
const router = express.Router();

const {
    addAmount,
    getalldata
   
} = require("../controller/admin_wallet");

//Paths
router.post("/admin/addAmount", addAmount);
router.get("/admin/getalldata", getalldata);

module.exports = router;













 