"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function(app) {
  let convertHandler = new ConvertHandler();
  app.route("/api/convert").get((req, res, next) => {
    let input = req.query.input;
    const initUnit = convertHandler.getUnit(input);
    const initNum = convertHandler.getNum(input);
    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const returnNum = convertHandler.convert({ initNum, initUnit });
    const string = convertHandler.getString({
      initNum,
      initUnit,
      returnNum,
      returnUnit
    });

    if (initNum === "invalid number" && initUnit === "invalid unit") {
      res.json({
        string: "invalid number and unit"
      });
      return;
    }
    if (initNum === "invalid number") {
      res.json({
        string: "invalid number"
      });
      return;
    }

    if (initUnit === "invalid unit") {
      res.json({
        string: "invalid unit"
      });
      return;
    }
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string
    });
  });
};
