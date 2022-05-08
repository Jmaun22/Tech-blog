const router = require("express").Router();

// finish the required routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dash", dashboardRoutes);
// finish the other needed routes with router.use()

module.exports = router;