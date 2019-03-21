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

let connection = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;
    }
    catch (err) {
        logger.error(err);
        throw err;
    }
};

let query = async (sql) => {
    try {
        const conn = await connection();
        let result_1 = conn.query(sql);
        conn.release();
        const rows = result_1;
        return rows;
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

let preparedQuery = async (sql,statements) => {
    try {
        const conn = await connection();
        let result_1 = conn.query(sql, statements);
        conn.release();
        const rows = result_1;
        return rows;
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

export default {
    query,
    preparedQuery
};