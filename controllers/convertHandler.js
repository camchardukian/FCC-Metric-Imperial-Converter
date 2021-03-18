function ConvertHandler() {
  this.getNum = function(input) {
    let result;

    return result;
  };

  this.getUnit = function(input) {
    let result;
    const validUnits = ["gal", "L", "mi", "km", "lbs", "kg"];
    const processedInput = input.replace(/[0-9.\/]/g, "");
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

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  };
}

module.exports = ConvertHandler;
