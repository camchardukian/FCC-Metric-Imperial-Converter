function ConvertHandler() {
  this.getNum = function(input) {
    if (parseFloat(input) <= 0) {
      return "invalid number";
    }
    const alphabetOnlyRegex = /[A-Za-z]/;
    for (let i = 0; i < input.length; i += 1) {
      if (alphabetOnlyRegex.test(input[i])) {
        return this.evalInitialInput(input.substr(0, i));
      }
    }
  };

  this.evalInitialInput = function(initialInputNumber) {
    const digitRegex = /\d/;
    if (!digitRegex.test(initialInputNumber)) {
      return 1;
    }
    const splitInitNumber = initialInputNumber.split("/");
    if (splitInitNumber.length === 1 && splitInitNumber[0]) {
      return Number(splitInitNumber[0]);
    } else if (splitInitNumber.length === 2) {
      return Number(splitInitNumber[0] / splitInitNumber[1]);
    } else {
      return "invalid number";
    }
  };

  this.getUnit = function(input) {
    const validUnits = ["gal", "L", "mi", "km", "lbs", "kg"];
    const processedInput = input.replace(/[-0-9.\/]/g, "");
    if (validUnits.includes(processedInput)) {
      return processedInput;
    } else {
      return "invalid unit";
    }
  };

  this.getReturnUnit = function(initUnit) {
    let result;
    const unitObject = {
      gal: "L",
      L: "gal",
      mi: "km",
      km: "mi",
      lbs: "kg",
      kg: "lbs"
    };
    result = unitObject[initUnit];

    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    const spelledOutUnits = {
      gal: "gallon",
      L: "liter",
      mi: "mile",
      km: "kilometer",
      lbs: "pound",
      kg: "kilogram"
    };
    result = spelledOutUnits[unit];
    return result;
  };

  this.convert = function({ initNum, initUnit }) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case "gal":
        return initNum * galToL;

      case "L":
        return initNum / galToL;

      case "kg":
        return initNum / lbsToKg;

      case "lbs":
        return initNum * lbsToKg;

      case "mi":
        return initNum / miToKm;

      case "km":
        return initNum / miToKm;

      default:
        return "invalid input";
    }
  };

  this.getString = function({ initNum, initUnit, returnNum, returnUnit }) {
    const shouldConcatLetterS = ({ unit, number }) => {
      if (number != 1) {
        return unit + "s";
      } else {
        return unit;
      }
    };
    let spelledOutInitUnit = this.spellOutUnit(initUnit);
    spelledOutInitUnit = shouldConcatLetterS({
      unit: spelledOutInitUnit,
      number: initNum
    });
    let spelledOutReturnUnit = this.spellOutUnit(returnUnit);
    spelledOutReturnUnit = shouldConcatLetterS({
      unit: spelledOutReturnUnit,
      number: returnNum
    });

    return `${initNum} ${spelledOutInitUnit} converts to ${returnNum} ${spelledOutReturnUnit}`;
  };
}

module.exports = ConvertHandler;
