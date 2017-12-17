const Router = require('koa-router');
const mandalart = new Router();

const mandalartCtrl = require('./mandalart.ctrl');

mandalart.post('/', mandalartCtrl.write);
mandalart.put('/:id', mandalartCtrl.modify);
mandalart.delete('/:id', mandalartCtrl.delete);
mandalart.get('/', mandalartCtrl.get);

module.exports = mandalart;