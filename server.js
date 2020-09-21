const express = require("express"); //express作为server启动方案，也可取koa以及其他方案
const next = require("next");
// const compression = require("compression");  //压缩插件 若配 nginx，这个可不需要
const devProxy = {
  "/api": {
    target: process.env.API_HOST,
    // pathRewrite: {"^/api": "/api"},
    changeOrigin: true
  }
}; //代理配置
console.log('代理：', process.env.API_HOST)
const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== "production";
const app = next({
  dir: "src",
  dev
});

const handle = app.getRequestHandler();
let server;
app.prepare()
.then(() => {
  server = express();
  // Set up the proxy.
  if (devProxy) {
    const proxyMiddleware = require("http-proxy-middleware");
    Object.keys(devProxy).forEach(function(context) {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }
  if (!dev) {
    // server.use(compression()); //gzip
  }
  server.get("/login", (req, res) => {
    app.render(req, res, "/login");
  });
  // 首页重定义
  server.get("/", (req, res) => {
    app.render(req, res, "/home");
  });
  server.all("*", (req, res) => handle(req, res));
  server.listen(port, err => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on port ${port} [${env}]`);
  });
})
.catch(err => {
  console.log("An error occurred, unable to start the server");
});
