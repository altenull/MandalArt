const Joi = require('joi');
const User = require('../../../db/models/User');

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

    ctx.body = user;
    // @TODO 토큰 생성.. payload 부분.
}

exports.localLogin = async (ctx) => {
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

    ctx.body = user;
};


// auth.post('/login/local', authCtrl.localLogin);
// auth.get('/exists/:key(email|nickname)/:value', authCtrl.exists);
// auth.post('/logout', authCtrl.logout);