const chalk = require("chalk");

console.log(chalk.blue("Hello World!"));
console.log(chalk.italic("Hello World!"));
console.log(chalk.black.bgBlue("Hello World!"));
const pesan = chalk`{bgRed Alvin} Febrianto`;
console.log(pesan);
