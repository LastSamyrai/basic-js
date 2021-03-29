const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let count = 0;
      let depth = 0;
      for (let i = 0; i < arr.length; i++) {
        count = this.calculateDepth(arr[i]);
        if (count > depth) {
             depth = count;
        }
      }
      return depth + 1;
    } else {
      return 0;
    }
  }
};

