const express = require("express");
const router = express.Router();
  
const {
    addMo_Dthoper,
    dthlist,
    prepaidlist,
    postpaidlist
  
} = require("../controller/pre_post_dth");

//router.post("/user/signup", signup);
router.post("/admin/addMo_Dthoper", addMo_Dthoper);
router.get("/admin/dthlist", dthlist);
router.get("/admin/prepaidlist", prepaidlist);
router.get("/admin/postpaidlist", postpaidlist);




module.exports = router;
