const Router = require('express');
const mysql = require('../utils/mysql');
const logger = require('../utils/logger');
const sqlStrings = require('../utils/sqlStrings');
const md5 = require('md5');

let router = new Router();

/**
 * Rückgaben aus DB-Verschlüsseln
 */

router.get('/getDetailedRecords', (req,res) => {
    mysql.Query(sqlStrings.detailedRecord.getAllDetailedRecords)
    .then((result) => {
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503).json({
                message: 'service not available'
            });
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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

router.get('/getUserByName/:username',(req,res) => {
    mysql.PreparedQuery(sqlStrings.user.getUserByUsername,req.params.username)
    .then((result) => {
        if(result === undefined) {
            return res.status(503);
        }

        if(result.fatal === true) {
            return res.status(500).json({
                message: 'query not successful',
                rows: result
            });
        }
        else {
            return res.status(200).json({
                result
            });
        }
    })
    .catch((error) => {
        logger.error(error);
    });
});

router.get('/getOnlyUsernamePassword/:username',(req,res) => {
    mysql.PreparedQuery(sqlStrings.user.getOnlyUsernamePassword,req.params.username)
    .then((result) => {
        if(result === undefined) {
            return res.status(503);
        }

        if(result.fatal === true) {
            return res.status(500).json({
                message: 'query not successful',
                rows: result
            });
        }
        else {
            return res.status(200).json({
                result
            });
        }
    })
    .catch((error) => {
        logger.error(error);
    });
});

router.get('/getAccountData/:username',(req,res) => {
    mysql.PreparedQuery(sqlStrings.user.getAccountData,req.params.username)
    .then((result) => {
        if(result === undefined) {
            return res.status(503);
        }

        if(result.fatal === true) {
            return res.status(500).json({
                message: 'query not successful',
                rows: result
            });
        }
        else {
            return res.status(200).json({
                result
            });
        }
    })
    .catch((error) => {
        logger.error(error);
    });
});

router.post('/addUser',(req,res) => {
    const payload = [req.body.user.username,md5(req.body.user.password),req.body.user.email,req.body.user.characterName]
    mysql.PreparedQuery(sqlStrings.user.addUser,payload)
    .then((result) => {
        if(result === undefined) {
            return res.status(503);
        }

        if(result.fatal === true) {
            return res.status(500).json({
                message: 'query not successful'
            });
        }
        else {
            return res.status(200).json({
                message: 'query successful'
            });
        }
    })
    .catch((error) => {
        logger.error(error);
    });
});

router.patch('/updateUser/:id',(req,res) => {
    // id, {payload aka req.body}
});

router.patch('/updateAccountData/:username',(req,res) => {
    console.log(req);
    //mysql.PreparedQuery(sqlStrings.user.updateAccountData,username).then().catch();
});

router.get('/getPermissions',(req,res) => {
    mysql.Query(sqlStrings.permission.getAllPermissions)
    .then((result) => {
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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
        if(result === undefined) {
            return res.status(503);
        }

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