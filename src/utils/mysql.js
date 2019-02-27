import mysql from 'promise-mysql';
import config from '../../config/index';
import logger from './logger';

let pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.dbURL,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.database
});

let connection = () => {
    return pool.getConnection()
        .then((connection) => {
            return connection;
        })
        .catch((err) => {
            logger.error(err);
            throw err;
        });
};

let query = (sql) => {
    return connection()
        .then((conn) => {
            let result = conn.query(sql);
            conn.release();
            return result;
        })
        .then((rows) => {
            return rows;
        })
        .catch((err) => {
            logger.error(err);
            return err;
        });
};

let preparedQuery = (sql,statements) => {
    return connection()
        .then((conn) => {
            let result = conn.query(sql,statements);
            conn.release();
            return result;
        })
        .then((rows) => {
            return rows
        })
        .catch((err) => {
            logger.error(err);
            return err;
        });
};

module.exports = {
    query,
    preparedQuery
};