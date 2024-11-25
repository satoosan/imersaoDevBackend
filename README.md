# Imersão Dev Back-End - Alura

## Índice
- [Introdução](#introdução)
- [Como Utilizar](#como-utilizar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Integração com a API do Google Gemini](#integração-com-a-api-do-google-gemini)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Links Úteis](#links-úteis)

## Introdução
Esta documentação cobre os principais conceitos e implementações abordados durante a Imersão Dev Back-End da Alura, em parceria com o Google Gemini. O objetivo é fornecer uma visão geral do projeto desenvolvido ao longo das aulas.

## Como Utilizar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/satoosan/imersaoDevBackend.git
   cd imersaoDevBackend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione a chave da API do Google Gemini:
   ```ini
   GEMINI_API_KEY=suachaveaqui
   API_URL=http://localhost:3000
   ```

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

5. **Acesse a API:**
   A API estará disponível em `http://localhost:3000`. Ou caso queira acessar pelo Google Cloud: [Instabytes - Backend](https://instalike-back-449200352006.southamerica-east1.run.app/posts)

## 

## Tecnologias Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no back-end.
- **Express:** Framework para construção de APIs.
- **MongoDB:** Banco de dados NoSQL para armazenamento de dados.
- **Multer:** Middleware para manipulação de uploads de arquivos.
- **CORS:** Middleware para permitir requisições de diferentes origens.
- **dotenv:** Para gerenciar variáveis de ambiente.
- **@google/generative-ai:** Biblioteca para interação com a API do Google Gemini.

## 

## Integração com a API do Google Gemini
A API do Google Gemini foi integrada ao projeto para gerar descrições automaticamente para as imagens enviadas.  
A chave da API é armazenada na variável de ambiente `GEMINI_API_KEY`.  
A função `gerarDescriçãoComGemini` no arquivo `geminiService.js` é responsável por interagir com a API e retornar a descrição gerada.

## 

## Estrutura do Projeto

```bash
/seu-repositorio
│
├── /src
│   ├── /controllers
│   │   └── postsController.js
│   ├── /models
│   │   └── postsModel.js
│   ├── /services
│   │   └── geminiService.js
│   ├── /uploads
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Realizar testes
```
Caso for utilizar o Postman, para realizar alguma operação:
1 - Para utilizar o Get
http://localhost:3000/posts ou https://instalike-back-449200352006.southamerica-east1.run.app/posts

2 - Para utilizar o Post
Em Body, em Key deixe como imagem, e em Value, coloque alguma imagem .png

3 - Para utilizar o Put
Na rota, http://localhost:3000/upload/:id, coloque o ":id" da imagem, que tem como acessar pelo método Post
Em Body e em raw, coloque onde está "Text" para "JSON"
Então:
  {
   "alt":"Alguma descrição"
  }
Atualize apenas com o ALT, a descrição, o GEMINI irá colocar sozinho

Ou é possível visualizar diretamente pelo arquivo frontend,
https://github.com/alura-cursos/imersao-backend-gemini-2024-front, apenas seguir o passo a passo no README.
```

## Links Úteis

- [Google Gemini](https://cloud.google.com/generative-ai)
- [Geração da chave de API do Gemini](https://console.cloud.google.com/)
- [Integração do Front-End com o Back-End](https://github.com/alura-cursos/imersao-backend-gemini-2024-front)
- [Discord da Imersão](https://discord.com/invite/86zUvgfRjN)

Feito pela Aluri

Agradecimento a equipe Alura, [Guilherme Lima](https://www.linkedin.com/in/guilherme-lima-developer/), [André David](https://www.linkedin.com/in/andrefdavid/), [Juliana Amoasei](https://github.com/JulianaAmoasei) e [Luciano Martins](https://www.linkedin.com/in/lucianommartins/)
