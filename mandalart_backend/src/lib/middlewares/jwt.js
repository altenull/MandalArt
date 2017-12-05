const { generateToken, decodeToken } = require('../token');

module.exports = async (ctx, next) => {
    const token = ctx.cookies.get('access_token'); // ctx에서 access_token을 읽어옴
    if (!token) {// 토큰이 없으면 바로 다음 작업
        ctx.request.user = null;
        return next();
    }
    
    try {
        const decoded = await decodeToken(token); // 토큰을 디코딩

        // 토큰 만료일이 하루밖에 안 남았으면 토큰 재발급
        if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24 * 1) {
            const { _id, email } = decoded;
            const freshToken = await generateToken({ _id, email}, 'user');
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