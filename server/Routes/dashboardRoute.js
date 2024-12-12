const router = require('express').Router();
const dashController = require("../Controllers/dashboardController");

router.get('/dashboard', dashController.getTime)

module.exports = router;