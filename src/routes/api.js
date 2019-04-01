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
            logger.error(error);
        });
});

router.get('/getDetailedRecords', (req,res) => {
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
        logger.error(error);
    });
});

router.get('/getDetailedRecord/:id', (req,res) => {
    mysql.PreparedQuery(sqlStrings.detailedRecord.getDetailedRecordById,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getFullDetailedRecord/:id', (req,res) => {
    mysql.PreparedQuery(sqlStrings.detailedRecord.getFullDetailedRecord,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getShortRecords', (req,res) => {
    mysql.Query(sqlStrings.shortRecord.getAllShortRecords)
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
        logger.error(error);
    });
});

router.get('/getShortRecord/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.shortRecord.getShortRecordById,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getPhobias',(req,res) => {
    mysql.Query(sqlStrings.phobia.getAllPhobias)
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
        logger.error(error);
    });
});

router.get('/getPhobia/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.phobia.getAllPhobiaById,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getPhobiaByName/:name',(req,res) => {
    mysql.PreparedQuery(sqlStrings.phobia.getAllPhobiaByName,req.params.name)
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
        logger.error(error);
    });
});

router.get('/getPhobiaForRecord/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.phobia.getAllPhobiasForId,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getRecordEntries',(req,res) => {
    mysql.Query(sqlStrings.recordEntry.getAllRecordEntries)
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
        logger.error(error);
    });
});

router.get('/getRecordEntries/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.recordEntry.getAllRecordEntriesForId,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getRecordEntry/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.recordEntry.getRecordEntryById,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getUser',(req,res) => {
    mysql.Query(sqlStrings.user.getAllUser)
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
        logger.error(error);
    });
});

router.get('/getUser/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.user.getUserById,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getUserByEmail/:email',(req,res) => {
    mysql.PreparedQuery(sqlStrings.user.getUserByEmail,req.params.email)
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
        logger.error(error);
    });
});

router.get('/getPermissions',(req,res) => {
    mysql.Query(sqlStrings.permission.getAllPermissions)
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
        logger.error(error);
    });
});

router.get('/getPermission/:id',(req,res) => {
    mysql.PreparedQuery(sqlStrings.permission.getPermissionById,req.params.id)
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
        logger.error(error);
    });
});

router.get('/getPermissionByName/:name',(req,res) => {
    mysql.PreparedQuery(sqlStrings.permission.getPermissionByName,req.params.name)
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
        logger.error(error);
    });
});

module.exports = router;