import mysql from 'promise-mysql';
import config from '../../config/index';
import logger from './logger';

let pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.dbURL,
    user: config.dbUser,
    password: config.testDbPassword,
    database: config.database
});

let connection = async () => {
    try {
        return await pool.getConnection();
    }
    catch (err) {
        logger.error(err);
        throw err;
    }
};

let Query = async (sql) => {
    try {
        const conn = await connection();
        let result = conn.query(sql);
        conn.release();
        return result;
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

let PreparedQuery = async (sql,statements) => {
    try {
        const conn = await connection();
        let result = conn.query(sql, statements);
        conn.release();
        return result;
    }
    catch (err) {
        logger.error(err);
        return err;
    }
};

export default {
    Query,
    PreparedQuery
};