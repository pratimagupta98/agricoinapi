const mongoose = require("mongoose");

const AdminwalletSchema = new mongoose.Schema(
    {
        walletId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "wallet",

        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "customer",

        },
        

        // walletId: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: "user",
        //type: String,
        //required: true,
        //},
        add_amount: {
            type: Number,

        },
        status : {
            type : String
        },
        currntamt:{
type :Number
}
    },
    { timestamps: true }
);

module.exports = mongoose.model("adminwallet", AdminwalletSchema);
