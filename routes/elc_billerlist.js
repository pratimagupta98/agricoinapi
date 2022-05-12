const express = require("express");
const router = express.Router();
  
const {
    addbileerlist,
    electricity_operator
  
} = require("../controller/elc_billerlist");

//router.post("/user/signup", signup);
router.post("/admin/addbileerlist", addbileerlist);
router.get("/admin/electricity_operator", electricity_operator);



module.exports = router;
