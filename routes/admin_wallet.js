const express = require("express");
const router = express.Router();

const {
    addAmount,
    getalldata,
    usersuccess_depositelist
     
} = require("../controller/admin_wallet");

//Paths
router.post("/admin/addAmount", addAmount);
router.get("/admin/getalldata", getalldata);
router.get("/admin/usersuccess_depositelist/:id", usersuccess_depositelist);


module.exports = router;



 









 