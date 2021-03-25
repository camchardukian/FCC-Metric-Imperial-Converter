const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");
let convertHandler = new ConvertHandler();
suite("Unit Tests", function() {
  test("#1 -- convertHandler should correctly read a whole number input.", () => {
    const result = convertHandler.getNum("1kg");
    assert.equal(result, 1);
  });
  test("#2 -- convertHandler should correctly read a decimal number input.", () => {
    const result = convertHandler.getNum("10.4km");
    assert.typeOf(result, "number");
  });
  test("#3 -- convertHandler should correctly read a fractional input.", () => {
    const result = convertHandler.getNum("10/4lbs");
    assert.typeOf(result, "number");
  });
  test("#4 -- convertHandler should correctly read a fractional input with a decimal.", () => {
    const result = convertHandler.getNum("4.283/4.23mi");
    assert.typeOf(result, "number");
  });
  test("#5 -- convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", () => {
    const result = convertHandler.getNum("4/3/3gal");
    assert.equal(result, "invalid number");
  });
  test("#6 -- convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", () => {
    const result = convertHandler.getNum("L");
    assert.equal(result, 1);
  });
  test("#7 -- convertHandler should correctly read each valid input unit.", () => {
    let result = [];
    const unitsArray = ["gal", "L", "mi", "km", "lbs", "kg"];
    result.push(convertHandler.getUnit("3.42/8.94gal"));
    result.push(convertHandler.getUnit("3.42/8.94L"));
    result.push(convertHandler.getUnit("3.42/8.94mi"));
    result.push(convertHandler.getUnit("3.42/8.94km"));
    result.push(convertHandler.getUnit("3.42/8.94lbs"));
    result.push(convertHandler.getUnit("3.42/8.94kg"));
    assert.deepEqual(result, unitsArray);
  });
  test("#8 -- convertHandler should correctly return an error for an invalid input unit.", () => {
    const result = convertHandler.getUnit("52kgggg");
    assert.equal(result, "invalid unit");
  });
  test("#9 -- convertHandler should return the correct return unit for each valid input unit.", () => {
    let result = [];
    const unitsArray = ["gal", "L", "mi", "km", "lbs", "kg"];
    result.push(convertHandler.getReturnUnit("L"));
    result.push(convertHandler.getReturnUnit("GAL"));
    result.push(convertHandler.getReturnUnit("km"));
    result.push(convertHandler.getReturnUnit("MI"));
    result.push(convertHandler.getReturnUnit("kg"));
    result.push(convertHandler.getReturnUnit("lbs"));
    assert.deepEqual(result, unitsArray);
  });
  test("#10 -- convertHandler should correctly return the spelled-out string unit for each valid input unit.", () => {
    let result = [];
    const unitsArray = [
      "gallons",
      "liters",
      "miles",
      "kilometers",
      "pounds",
      "kilograms"
    ];
    result.push(convertHandler.spellOutUnit("gal"));
    result.push(convertHandler.spellOutUnit("L"));
    result.push(convertHandler.spellOutUnit("mi"));
    result.push(convertHandler.spellOutUnit("KM"));
    result.push(convertHandler.spellOutUnit("lbs"));
    result.push(convertHandler.spellOutUnit("KG"));
    assert.deepEqual(result, unitsArray);
  });
});
test("#11 -- convertHandler should correctly convert gal to L.", () => {
  const initNum = Math.random();
  const initUnit = "gal";
  const galToL = 3.78541;
  const result = convertHandler.convert({ initNum, initUnit });
  assert.equal(result, Math.round(initNum * galToL * 100000) / 100000);
});
test("#12 -- convertHandler should correctly convert L to gal.", () => {
  const initNum = Math.random();
  const initUnit = "L";
  const galToL = 3.78541;
  const result = convertHandler.convert({ initNum, initUnit });
  assert.equal(result, Math.round((initNum / galToL) * 100000) / 100000);
});
test("#13 -- convertHandler should correctly convert mi to km.", () => {
  const initNum = Math.random();
  const initUnit = "mi";
  const miToKm = 1.60934;
  const result = convertHandler.convert({ initNum, initUnit });
  assert.equal(result, Math.round(initNum * miToKm * 100000) / 100000);
});
test("#14 -- convertHandler should correctly convert km to mi.", () => {
  const initNum = Math.random();
  const initUnit = "km";
  const miToKm = 1.60934;
  const result = convertHandler.convert({ initNum, initUnit });
  assert.equal(result, Math.round((initNum / miToKm) * 100000) / 100000);
});
test("#15 -- convertHandler should correctly convert lbs to kg.", () => {
  const initNum = Math.random();
  const initUnit = "lbs";
  const lbsToKg = 0.453592;
  const result = convertHandler.convert({ initNum, initUnit });
  assert.equal(result, Math.round(initNum * lbsToKg * 100000) / 100000);
});
test("#16 -- convertHandler should correctly convert kg to lbs.", () => {
  const initNum = Math.random();
  const initUnit = "kg";
  const lbsToKg = 0.453592;
  const result = convertHandler.convert({ initNum, initUnit });
  assert.equal(result, Math.round((initNum / lbsToKg) * 100000) / 100000);
});
