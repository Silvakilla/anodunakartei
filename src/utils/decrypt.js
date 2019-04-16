const crypto = require('crypto');

function decrypt(payload) {
    let object = JSON.parse(payload);

    if(object !== null) {
        let val1 = Buffer.from(object.val1, 'hex');
        let val2 = Buffer.from(object.val2, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-gcm', Buffer.from(config.cryptoData.secret), val1);
        let decrypted = decipher.update(val2, 'hex', 'utf8');
        return JSON.parse(decrypted);
    }
}

module.exports = decrypt;