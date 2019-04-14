const mysql = require('promise-mysql');
const config = require('../../config/config');
const logger = require('./logger');

let pool = mysql.createPool({
    connectionLimit: config.dbData.connectionLimit,
    host: config.dbData.dbURL,
    user: config.dbData.dbUser,
    password: config.dbData.dbPassword,
    database: config.dbData.database
});

let connection = async () => {
    try {
        return await pool.getConnection();
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

let Query = async (sql) => {
    try {
        const conn = await connection();

        console.log(conn);

        if(conn.fatal != true) {
            let result = conn.query(sql);
            conn.release();
            return result;
        }
        else {
            logger.error(conn);
        }
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

let PreparedQuery = async (sql,statements) => {
    try {
        const conn = await connection();

        if(conn.fatal != true) {
            let result = conn.query(sql, statements);
            conn.release();
            return result;
        }
        else {
            logger.error(conn);
        }
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

module.exports = {
    Query,
    PreparedQuery
};