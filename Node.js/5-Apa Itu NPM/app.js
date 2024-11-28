const validator = require("validator");

console.log(validator.isEmail("alvin@gmail.com"));
console.log(validator.isMobilePhone("089612345678", "id-ID"));
console.log(validator.isNumeric("08912345o"));
