const express = require("express");
const { createSports, getallSports, getSportsDetails } = require("../controller/sports");
const router = express.Router();

router.route("/create/sports").post(createSports);
router.route("/get/all/sports").get(getallSports);
router.route("/get/sports/:id").get(getSportsDetails);
module.exports = router;