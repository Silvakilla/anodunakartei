let detailedRecord = {
    getAllDetailedRecords: 'select * from DetailedRecord',
    getDetailedRecordById: 'select * from DetailedRecord where id = ?'
};

let shortRecord = {
    getAllShortRecords: 'select * from ShortRecord',
    getShortRecordById: 'select * from ShortRecord where id = ?',
}

let phobia = {
    getAllPhobias: 'select * from Phobia',
    getAllPhobiasForId: 'select * from Phobia where detailedRecord = ?',
    getAllPhobiaById: 'select * from Phobia where id = ?',
    getAllPhobiaByName: 'select * from Phobia where name = ?'
}

let recordEntry = {
    getAllRecordEntries: 'select * from RecordEntry',
    getAllRecordEntriesForId: 'select * from RecordEntry where detailedRecord = ?',
    getRecordEntryById: 'select * from RecordEntry where id = ?',
}

let user = {
    getAllUser: 'select * from User',
    getUserById: 'select * from User where id = ?',
    getUserByEmail: 'select * from User where email = ?',
};

let permission = {
    getAllPermissions: 'select * from Permissions',
    getPermissionById: 'select * from Permissions where id = ?',
    getPermissionByName: 'select * from Permissions where name = ?'
};

export default {
    detailedRecord,
    shortRecord,
    phobia,
    recordEntry,
    user,
    permission
};