const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const { tokenverify } = require("../functions/tokenverify");

const {
  addbrand,
  editbrand,
  viewonebrand,
  allbrand,
  deletebrand,
  brand_img,
  search_brand,
  totalbrand
} = require("../controller/brand");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log(file);
    let path = `./uploadesimages`;
    if (!fs.existsSync("uploadesimages")) {
      fs.mkdirSync("uploadesimages");
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

//Paths
router.post("/admin/addbrand", uploads.single("brand_img"),tokenverify, addbrand);
router.post("/admin/editbrand/:id", uploads.single("brand_img"), editbrand);
router.get("/admin/viewonebrand/:id", viewonebrand);
router.get("/admin/allbrand", allbrand);
router.get("/admin/deletebrand/:id", deletebrand);
router.get("/admin/search_brand", search_brand);
//router.post("/admin/brandimage/:id", uploads.single("brand_img"), brand_img);
router.get("/admin/totalbrand", totalbrand);
module.exports = router;
 