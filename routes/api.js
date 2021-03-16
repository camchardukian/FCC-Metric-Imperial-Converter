"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get((req, res, next) => {
    console.log("i rannnnn", req);
    let input = req.query.input;
    console.log("input", input);
  });
};
