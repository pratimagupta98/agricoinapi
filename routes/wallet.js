const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const { verifytoken } = require("../functions/verifytoken");


const { deposite_wallet, getwallet ,balanceApi,addwallet,del_wallet,getone,getalltransaction} = require("../controller/wallet");


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let path = `./img`;
      if (!fs.existsSync("img")) {
        fs.mkdirSync("img");
      }
      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {
    if (
      file.mimetype.includes("jpeg") ||
      file.mimetype.includes("png") ||
      file.mimetype.includes("jpg")
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  let uploads = multer({ storage: storage });

  
// Paths

router.post("/admin/deposite_wallet",uploads.single("depsite_file"), deposite_wallet);
 
router.get("/admin/getwallet", getwallet);
router.get("/admin/getone",verifytoken, getone);
router.post("/admin/balanceApi", balanceApi);
//router.post("/admin/addwallet", addwallet);
router.get("/admin/del_wallet/:id", del_wallet);
router.get("/admin/getalltransaction/:id", getalltransaction);

module.exports = router;
 