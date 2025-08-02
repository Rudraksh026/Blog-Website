const express = require("express");
const auth = require("../auth-controller/controller")

const router = express.Router();

router.get("/",auth.home)
router.post("/login",auth.login)
router.post("/signup",auth.signup)

module.exports = router