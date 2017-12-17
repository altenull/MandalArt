const Router = require('koa-router');
const api = new Router();

const auth = require('./auth');
const mandalart = require('./mandalart');

api.use('/auth', auth.routes());
api.use('/mandalart', mandalart.routes());

module.exports = api;