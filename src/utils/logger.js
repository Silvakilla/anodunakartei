const chalk = require('chalk');

let log = console.log;
let date = new Date();

let timestamp = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

let error = (err) => { log(chalk.keyword('red')('[ERROR] ' + timestamp + ' ' + err.stack)); };
let warning = (message) => { log(chalk.keyword('orange')('[WARN] ' + timestamp + ' ' + message)); };
let debug = (message) => { log(chalk.keyword('green')('[DEBUG] ' + timestamp + ' ' + message)); };
let info = (message) => { log(chalk.keyword('white')('[INFO] ' + timestamp + ' ' + message)); };

module.exports = {
    debug,
    info,
    warning,
    error
};