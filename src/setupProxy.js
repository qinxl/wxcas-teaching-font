const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  console.log('加载proxy');
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:80/',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api': '/',
      },
    })
  );
};
