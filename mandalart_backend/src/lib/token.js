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

exports.jwtMiddledware = async (ctx, next) => {
    const token = ctx.cookies.get('access_token'); // ctx에서 access_token을 읽어옴
    if (!token) // 토큰이 없으면 바로 다음 작업
        return next();
    
    try {
        const decoded = await decodeToken(token); // 토큰을 디코딩

        // 토큰 만료일이 하루밖에 안 남았으면 토큰 재발급
        if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 1) {
            const { _id, /* 여기에 프로필..*/} = decoded;
            const freshToken = await generateToken({ _id, /* 여기에 프로필..*/}, 'user');
            ctx.cookies.set('access_token', freshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
                httpOnly: true
            });
        }

        ctx.request.user = decoded;
    } catch (e) { // 토큰 검증 실패
        ctx.request.user = null;
    }

    return next();
};

exports.generateToken = generateToken;
exports.decodeToken = decodeToken;