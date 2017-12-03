const Router = require('koa-router');
const auth = new Router();

const authCtrl = require('./auth.ctrl');

auth.post('/register/local', authCtrl.localRegister);
auth.post('/login/local', authCtrl.localLogin);
// auth.get('/exists/:key(email|nickname)/:value', authCtrl.exists);
// auth.post('/logout', authCtrl.logout);


module.exports = auth;



// export const checkEmailExists = (email) => axios.get('/api/v1.0/auth/exists/email/' + email);
// export const checkNicknameExists = (nickname) => axios.get('/api/v1.0/auth/exists/nickname/' + nickname);

// export const localRegister = ({email, nickname, password}) => axios.post('/api/v1.0/auth/register/local', { email, nickname, password });
// export const localLogin = ({email, password}) => axios.post('/api/v1.0/auth/login/local', { email, password });

// export const checkStatus = () => axios.get('/api/v1.0/auth/check');
// export const logout = () => axios.post('/api/v1.0/auth/logout');
