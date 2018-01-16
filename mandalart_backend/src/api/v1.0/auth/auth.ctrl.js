const Joi = require('joi');
const User = require('../../../db/models/User');

// ACCOUNT REGISTER : POST /api/v1.0/auth/register/local
exports.localRegister = async (ctx) => {
    // 데이터 검증
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        nickname: Joi.string().min(1).max(10).required(),
        password: Joi.string().min(8).max(15).required()        
    });

    const result = Joi.validate(ctx.request.body, schema);
    
    if (result.error) {
        ctx.status = 400; // Bad Request
        return;
    }
    
    // 이메일, 닉네임 중복 체크
    let existing = null;
    try {
        existing = await User.findByEmailOrNickname(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    if (existing) {
        ctx.status = 409; // Conflict
        ctx.body = {
            key: existing.email === ctx.request.body.email ? 'email' : 'nickname'
        };
        return;
    }

    // 계정 생성
    let user = null;
    try {
        user = await User.localRegister(ctx.request.body);
    } catch (e) {
        ctx.throw(500, e);
    }

    let token = null;
    try {
        token = await user.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = user;
}

// LOGIN: POST /api/v1.0/auth/login/local
exports.localLogin = async (ctx) => {
    // 데이터 검증
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });

    const result = Joi.validate(ctx.request.body, schema);

    if (result.error) {
        ctx.status = 400; // Bad Request
        return;
    }

    const { email, password } = ctx.request.body;

    let user = null;
    try {
        user = await User.findByEmail(email);
    } catch (e) {
        ctx.throw(500, e);
    }

    if (!user || !user.validatePassword(password)) {
        ctx.status = 403; // Forbidden
        return;
    }

    // 토큰 생성
    let token = null;
    try {
        token = await user.generateToken();
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7});
    ctx.body = user;
};

// LOGOUT: POST /api/v1.0/auth/logout
exports.logout = async (ctx) => {
    ctx.cookies.set('access_token', null, {
        maxAge: 0,
        httpOnly: true
    });
    ctx.status = 204;
};

// EXISTS: GET /api/v1.0/auth/exists/:key(email}nickname)/:value
exports.exists = async (ctx) => {
    const { key, value } = ctx.params;
    let user = null;

    try {
        user = await (key === 'email' ? User.findByEmail(value) : User.findByNickname(value));
    } catch (e) {
        ctx.throw(500, e);
    }

    ctx.body = {
        exists: user !== null
    };
}

// CHECK: GET /api/v1.0/auth/check
exports.check = (ctx) => {
    const { user } = ctx.request;

    if (!user) {
        ctx.status = 403; // forbidden
        return;
    }

    ctx.body = user;
};