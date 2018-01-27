require('dotenv').config();
const {
    PORT: port
} = process.env;

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const db = require('./db');

const app = new Koa();
const router = new Router();
const api = require('./api');

const jwtMiddleware = require('lib/middlewares/jwt');

db.connect();

app.use(jwtMiddleware);
app.use(bodyParser());

const fs = require('fs');
const logDir = 'log';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

const logger = require('lib/logger');

app.listen(port, () => {
    logger.info(`MandalArt API server is listening to port ${port}`);
});