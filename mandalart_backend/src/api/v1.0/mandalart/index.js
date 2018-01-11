const Router = require('koa-router');
const mandalart = new Router();

const mandalartCtrl = require('./mandalart.ctrl');

mandalart.post('/write', mandalartCtrl.write);
mandalart.put('/:id', mandalartCtrl.modify);
mandalart.delete('/:id', mandalartCtrl.delete);
mandalart.get('/', mandalartCtrl.get);
mandalart.get('/older/:id', mandalartCtrl.getOlder);

module.exports = mandalart;