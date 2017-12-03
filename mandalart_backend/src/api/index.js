const Router = require('koa-router');
const api = new Router();

const versions = {
    '1.0': require('./v1.0')
};

api.use('/v1.0', versions['1.0'].routes());

module.exports = api;