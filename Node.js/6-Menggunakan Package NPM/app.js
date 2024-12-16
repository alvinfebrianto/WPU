const chalk = require("chalk");

console.log(chalk.blue("Hello World!"));
console.log(chalk.italic("Hello World!"));
console.log(chalk.black.bgGreen("Hello World!"));
const pesan = chalk`{bgRed Alvin} Febrianto`;
console.log(pesan);
