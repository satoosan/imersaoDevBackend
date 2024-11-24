# Aula 4 - Enviando Dados para o Banco de Dados

Na quarta aula da Imersão Dev, aprendemos a enviar informações para a base de dados, focando na criação de posts em uma rede social. Os principais tópicos abordados foram:

**Verbos HTTP:** Discutimos os quatro verbos principais (GET, POST, PUT e DELETE) e como utilizá-los em nosso sistema.

**Estrutura do Projeto:** Revisitamos a organização do projeto, com pastas específicas para configuração, modelos, rotas e controladores.

**Criação de Rota POST:** Implementamos uma rota para criar novos posts, utilizando o verbo POST para enviar dados ao servidor.

**Manipulação de Requisições:** Aprendemos a extrair dados do corpo da requisição usando ```req.body``` e a importância do tratamento de exceções com ```try``` e ```catch```.

**Integração com o MongoDB:** Criamos uma função no modelo para inserir novos posts no banco de dados, utilizando ```insertOne```.

**Upload de Imagens:** Introduzimos o multer para gerenciar o upload de arquivos, permitindo que os usuários enviem imagens para o servidor.

**Renomeação de Arquivos:** Implementamos a lógica para renomear os arquivos enviados com o ID gerado pelo MongoDB, garantindo uma associação única entre os posts e suas imagens.

Ao final da aula, realizamos testes práticos utilizando o Postman para verificar se os dados estavam sendo corretamente enviados e armazenados.

**Instrutores:**
- Guilherme Lima
- Juliana Amoasei
- André David

Gerado pela Aluri.