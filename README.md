Aqui está o script formatado corretamente em Markdown, pronto para ser copiado e colado:

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

## 

## Links Úteis

- [Google Gemini](https://cloud.google.com/generative-ai)
- [Geração da chave de API do Gemini](https://console.cloud.google.com/)
- [Integração do Front-End com o Back-End](https://github.com/alura-cursos/imersao-backend-gemini-2024-front/archive/refs/heads/main.zip)
- [Discord da Imersão](https://discord.com/invite/86zUvgfRjN)
