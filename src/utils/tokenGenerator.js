import jwt from 'jsonwebtoken';

export function GenerateSessionToken (payload, key) {
    return jwt.sign(payload, key);
}

export function GenerateToken (payload, key) {
    return jwt.sign(payload, key);
}
