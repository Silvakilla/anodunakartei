import chalk from "chalk";

let log = console.log;
let error = (err) => { log(chalk.keyword('red')('[ERROR] ' + err.stack)); };
let warning = (message) => { log(chalk.keyword('orange')('[WARN] ' + message)); };
let debug = (message) => { log(chalk.keyword('blue')('[DEBUG] ' + message)); };
let info = (message) => { log(chalk.keyword('green')('[INFO] ' + message)); };

module.exports = {
    debug,
    info,
    warning,
    error
};