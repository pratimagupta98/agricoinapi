const express = require("express");
const router = express.Router();

const {
   
    addCirles,getcircles
} = require("../controller/circles_code");

//path
router.post("/admin/addCirles", addCirles);
router.get("/admin/getcircles", getcircles);


 

 

module.exports = router;
