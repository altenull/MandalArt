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

app.use((ctx, next) => {
    const allowedHosts = [
        'mandalart.kr',
        'mandalart-web.s3-website-us-east-1.amazonaws.com'
    ];
    const origin = ctx.header['origin'];
    allowedHosts.every(el => {
        if(!origin) return false;
        if(origin.indexOf(el) !== -1) {
        ctx.response.set('Access-Control-Allow-Origin', origin);
        return false;
        }
        return true;
    });
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-timebase, Link');
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
    ctx.set('Access-Control-Expose-Headers', 'Link');
    return next();
});

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

const schedule = require('node-schedule');
const awsS3 = require('lib/awsS3');

schedule.scheduleJob('0 * * * *', () => {
    logger.info('log file upload schedule working');
    awsS3.uploadLogFile();
});