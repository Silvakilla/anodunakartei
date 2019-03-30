import jwt from 'jsonwebtoken';

export function GenerateSessionToken (payload, key) {
    let token = jwt.sign(payload, key);
    localStorage.setItem('session',token);
}

export function GenerateToken (payload, key) {
    return jwt.sign(payload, key);
}
