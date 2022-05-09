const express = require("express");
const router = express.Router();
  
const {
    addbileerlist,
   
  
} = require("../controller/elc_billerlist");

//router.post("/user/signup", signup);
router.post("/admin/addbileerlist", addbileerlist);

module.exports = router;
