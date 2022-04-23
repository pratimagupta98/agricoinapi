const mongoose = require("mongoose");

const CircleSchema = new mongoose.Schema(
  {
    
    circle_code	: {
      type: Number,
    },
    circle_name: {
      type: String,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("circles_code", CircleSchema);
