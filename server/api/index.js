const router = require("express").Router();

//require all api sub-routers
router.use("/templates", require("./templateRouter"));

router.use((req, res, next) => {
  const err = new Error("Uh Oh! API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
