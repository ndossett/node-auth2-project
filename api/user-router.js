const { register, login } = require("./user-controller");

const mw = require("./middleware");

const { Router } = require("express");
const router = Router();


// router.get("/", mw.restricted, get)
//use restricted middleware here to protect -- needs a valid token

router.post("/register", register)

router.post("/login", login)

module.exports = router;