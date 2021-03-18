"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get((req, res, next) => {
    let input = req.query.input;
    const initUnit = convertHandler.getUnit(input);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const spelledOutInitUnit = convertHandler.spellOutUnit(initUnit);
    const spelledOutReturnUnit = convertHandler.spellOutUnit(returnUnit);

    res.json({
      initNum: "placeholder initNum",
      initUnit,
      returnNum: "placeholder returnNum",
      returnUnit,
      string: `example number of ${spelledOutInitUnit} converts to example number of ${spelledOutReturnUnit}`
    });
  });
};
