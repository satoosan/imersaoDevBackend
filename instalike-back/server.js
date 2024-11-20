import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando..");
});

app.get("/api", (req, res) => {
  res.status(200).send("Boas vindas à Imersão!");
});

// app.get("/livro", (req, res) => {
//   res.status(200).send({
//     "titulo": "O Senhor dos Anéis",
//     "autor": "J.R.R. Tolkien",
//     "ano": 1954,
//     "genero": "Fantasia"
//   });
// });

