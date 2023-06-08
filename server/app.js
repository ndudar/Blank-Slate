const express = require('express');
const app = express();
const path = require("path");

//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use("/api", require("./api"));

// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    res.status(404).end();
  } else {
    next();
  }
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || "INTERNAL SERVER ERROR FROM APP");
});

module.exports = app;
