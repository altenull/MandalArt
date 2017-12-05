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

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`MandalArt server is listening to port ${port}`);
});