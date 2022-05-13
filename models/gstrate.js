const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gstrateSchema = new mongoose.Schema(
    {
        gst_title: {
            type: String,
            require: true,
          },
          value: {
            type: Number,
            require: true,
          },
          desc: {
            type: String,
            reuire: true,
          },
          seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "seller",
          },
},
{ timestamps: true }
)
module.exports = mongoose.model("gstrate", gstrateSchema);




 