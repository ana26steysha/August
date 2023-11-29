const cors = require("cors"); // Импортируйте пакет cors
const express = require("express");
const app = express();
const port = 3001;

app.use((req, res, next) => {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

const corsOptions = {
  origin: [
    "http://localhost:3000", // Для фронтенда
    "http://localhost:3001", // Для вашего сервера
    // Добавьте другие разрешенные домены, если необходимо
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsOptions));

app.get("/api/information/json", (req, res) => {
  const jsonData = { message: "Hello, world!" };
  res.json(jsonData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
