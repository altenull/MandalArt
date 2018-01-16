const Router = require('koa-router');
const mandalart = new Router();

const mandalartCtrl = require('./mandalart.ctrl');

mandalart.get('/', mandalartCtrl.get);
mandalart.get('/older/:id', mandalartCtrl.getOlder);
mandalart.post('/write', mandalartCtrl.write);
mandalart.post('/star', mandalartCtrl.star);
mandalart.delete('/:id', mandalartCtrl.delete);

module.exports = mandalart;