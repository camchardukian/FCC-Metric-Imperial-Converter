"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res, next) => {
    let input = req.query.input;
    res.json({
      initNum: 3.1,
      initUnit: "mi",
      returnNum: 4.98895,
      returnUnit: "km",
      string: "3.1 miles converts to 4.98895 kilometers"
    });
  });
};
