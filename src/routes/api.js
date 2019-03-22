import { Router } from 'express';
let router = new Router();
import mysql from '../utils/mysql';
import logger from '../utils/logger';
import sqlStrings from '../utils/sqlStrings'

router.get('/connectTest',(req,res) => {
    mysql.Query('SELECT 1')
        .then((result) => {
            if(result.fatal === true) {
                return res.status(500).json({
                    message: 'test not successful',
                    rows: result
                });
            }
            else {
                return res.status(200).json({
                    message: 'test successful',
                    rows: result
                });
            }
        })
        .catch((error) => {
            logger.logError(error);
        });
});

router.get('/getAllDetailedRecords', (req,res) => {
    mysql.Query(sqlStrings.detailedRecord.getAllDetailedRecords)
    .then((result) => {
        if(result.fatal === true) {
            return res.status(500).json({
                message: 'query not successful',
                rows: result
            });
        }
        else {
            return res.status(200).json({
                message: 'query successful',
                rows: result
            });
        }
    })
    .catch((error) => {
        logger.logError(error);
    })
});

module.exports = router;