'use strict'

const Koa = require('koa');
const serve = require('koa-static');
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');

const PORT = process.env.PORT || 3000;

const app = new Koa();

render(app, {
    root: `${__dirname}/views`,
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
});

app.use(bodyParser());
app.keys = ['character'];
app
    .use(router.routes())
    .use(router.allowedMethods());
app.use(serve(`${__dirname}/public`));

app.listen(3000, (ctx) => {
    console.log( 'App avilable on http://localhost:3000 🚀' );
})