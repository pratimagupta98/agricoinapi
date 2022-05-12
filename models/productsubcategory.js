const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subproductcategorySchema = new Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    product_img: {
      type: String,
    },
    productcategory: {
      type: Schema.Types.ObjectId,
      ref: "productcategory",
    },
    sortorder: {
      type: Number,
    },
    status: {
      type: String,
      default: "Active",
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "seller",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subproductcategory", subproductcategorySchema);
