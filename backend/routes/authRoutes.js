const express = require("express");

const router = express.Router();

const CONSTANTS = require("../utils/constants/appConstants");

const CTRLS = require("../controllers/authControllers");

const VALIDATOR = require("../middlewares/Validations/authValidations");

router.route(CONSTANTS.AUTH.REGISTER).post(CTRLS.signup);
 
router.route(CONSTANTS.AUTH.LOGIN).post(CTRLS.login);

router.route(CONSTANTS.AUTH.VERIFYEMAIL).post(VALIDATOR.verifyEmail,CTRLS.verifyEmail);

router.route(CONSTANTS.AUTH.VERIFYOTP).post(VALIDATOR.verifyOtp,CTRLS.verifyOtp);

router.route(CONSTANTS.AUTH.NEWPASSWORD).post(VALIDATOR.newPassword,CTRLS.newPassword);

module.exports = router;