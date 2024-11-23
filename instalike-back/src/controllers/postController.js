import { getTodosPosts } from "../models/postModel.js";

export async function listarPosts (req, res) {
  // Chama a função getTodosPosts para obter os posts do banco de dados.
  const posts = await getTodosPosts();
  // Envia os posts como resposta em formato JSON com status 200 (sucesso).
  res.status(200).json(posts);
}