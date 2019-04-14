const jwt = require('jsonwebtoken');

function GenerateSessionToken (payload, key) {
    return jwt.sign(payload, key);
}

function GenerateToken (payload, key) {
    return jwt.sign(payload, key);
}

module.exports = {
    GenerateSessionToken,
    GenerateToken
}