import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente.
// A função conectarAoBanco retorna uma conexão com o banco.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// Função assíncrona para obter todos os posts do banco de dados.
export async function getTodosPosts() {
  // Obtém o banco de dados "imersao-instabyte" da conexão.
  const db = conexao.db("imersao-instabyte");
  // Obtém a coleção "posts" do banco de dados.
  const colecao = db.collection("posts");
  // Retorna um array com todos os documentos da coleção.
  return colecao.find().toArray();
}