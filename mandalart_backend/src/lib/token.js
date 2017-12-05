const jwt = require('jsonwebtoken');
const { 
    JWT_SECRET: jwtSecret
} = process.env;

function generateToken(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(payload, jwtSecret, { expiresIn: '7d' },
                (error, token) => {
                    if (error)
                        reject(error);
                    resolve(token);
                }
            );
        }
    );
};

function decodeToken(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, jwtSecret,
                (error, decoded) => {
                    if (error)
                        reject(error);
                    resolve(decoded);
                }
            );
        }
    );
}

exports.generateToken = generateToken;
exports.decodeToken = decodeToken;