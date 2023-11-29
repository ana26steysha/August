const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Путь, который будет проксироваться на сервер Express.js
    createProxyMiddleware({
      target: "http://localhost:3001", // Адрес сервера Express.js
      changeOrigin: true, // Добавьте это, чтобы сменить исходное происхождение запроса
    })
  );
};
