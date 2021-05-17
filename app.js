const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');

const app = new Koa();
app.use(koaStatic(path.resolve(__dirname, 'dist')));
app.listen(3000);