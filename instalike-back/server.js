import express from "express";
import routes from "./src/routes/postRoutes.js";

// Inicializa o servidor Express.
const app = express();
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
  console.log("Servidor escutando..");
});





