const Router = require('koa-router');
const auth = new Router();

const authCtrl = require('./auth.ctrl');

auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
auth.post('/logout', authCtrl.logout);
auth.get('/exists/:key(email|nickname)/:value', authCtrl.exists);
auth.get('/check', authCtrl.check);

module.exports = auth;