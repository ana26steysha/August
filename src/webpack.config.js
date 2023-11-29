const path = require("path");

module.exports = {
  entry: "./src/index.js", // Путь к вашему входному файлу
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Путь к выходной директории
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Регулярное выражение для выбора файлов JavaScript
        exclude: /node_modules/, // Исключить папку node_modules
        use: {
          loader: "babel-loader", // Использовать babel-loader для обработки файлов
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Подключите необходимые пресеты Babel
          },
        },
      },
    ],
  },
};
