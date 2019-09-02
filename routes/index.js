const router = require("express").Router();
const path = require("path");



// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../clint/public/index.html"));
});

module.exports = router;