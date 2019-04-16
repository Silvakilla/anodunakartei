const crypto = require('crypto');

function encryptLocal(itemName,payload) {
    let val1 = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(config.cryptoData.secret), val1);
    let encrypted = cipher.update(payload, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    let finished = {
        val1: val1.toString('hex'),
        val2: encrypted.toString('hex') 
    }

    localStorage.setItem(itemName, JSON.stringify(finished));
}

function encryptData(payload) {
    let val1 = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-gcm', Buffer.from(config.cryptoData.secret), val1);
    let encrypted = cipher.update(payload, 'utf8');
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    
    let finished = {
        val1: val1.toString('hex'),
        val2: encrypted.toString('hex') 
    }

    return JSON.stringify(finished);
}

module.exports = {
    encryptLocal,
    encryptData
}