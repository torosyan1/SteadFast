import '../../env';

import jwt from 'jsonwebtoken';

function encrypt(data) {
    return jwt.sign(data, process.env.jwtKey);
}

function createToken(data) {
    return `Bearer ${encrypt(data)}`;
}

export default {
    createToken,
};
