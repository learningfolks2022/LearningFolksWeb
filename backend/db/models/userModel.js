const mongoose = require("mongoose");

const CONSTANT = require("../../utils/constants/appConstants");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    mobile: {
        type: Number
    },
    address: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    detailsFlag: {
        type: Boolean,
        default: false
    },
    verified: {
        type: Boolean,
        default: false
    },
    college:{
        type:String,
        trim:true
    }
});

const User = mongoose.model(CONSTANT.MODELS.USER, userSchema);

module.exports = User;