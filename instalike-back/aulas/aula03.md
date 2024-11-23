# Aula 3 - Conectando a Aplicação ao MongoDB

Na terceira aula da Imersão Dev, avançamos na construção da nossa aplicação, conectando-a a um banco de dados MongoDB na nuvem. Começamos revisando a instalação do driver MongoDB e a configuração da string de conexão, que é crucial para a comunicação com o banco de dados.## 

## Principais Tópicos Abordados:

**Instalação do Driver MongoDB:** Utilizamos o comando ```npm install mongodb``` para adicionar a dependência ao nosso projeto.

**Configuração do Banco de Dados:** Criamos uma conta no MongoDB Atlas, configuramos uma nova database chamada ```imersao-instabytes``` e uma coleção chamada ```posts```.

**Variáveis de Ambiente:** Aprendemos a proteger informações sensíveis, como a string de conexão, utilizando um arquivo ```.env``` e o ```dotenv``` para gerenciar variáveis de ambiente.

**Estrutura do Projeto:** Implementamos uma estrutura modular, separando o código em diferentes arquivos e pastas, como ```routes```, ```controllers``` e ```models```, para melhor organização e manutenção.

**Funções Assíncronas:** Introduzimos o uso de ```async``` e ```await``` para lidar com operações assíncronas, como a conexão ao banco de dados e a busca de dados.

**Implementação de Rotas:** Criamos rotas para manipular requisições e respostas, permitindo que a aplicação retorne dados do banco de dados.

Ao final da aula, conseguimos conectar nossa aplicação ao MongoDB e realizar operações básicas de leitura, preparando o terreno para as próximas aulas, onde iremos manipular os dados de forma mais avançada.

**Instrutores:**
- Guilherme Lima
- Juliana Amoasei
- André David

Gerado pela Aluri.