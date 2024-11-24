# Resumo da Aula 5 - Imersão Dev Back-End
Nesta última aula da Imersão Dev Back-End da Alura, focamos na publicação do projeto na Google Cloud, configurando a API e integrando-a com o Google Gemini. 

## Principais Tópicos Abordados:

**Recapitulando o Projeto:** Aprimoramos a lógica de upload de imagens, vinculando cada imagem a um ID único no MongoDB e criando uma nova rota ```/upload/:id``` para atualizar registros existentes.

**Atualizando o Post: Implementamos a função** ```atualizarNovoPost``` no controller para lidar com requisições PUT, permitindo a atualização de dados como descrição e texto alternativo, além da URL da imagem.

**Integração com o Google Gemini:** Criamos o serviço ```geminiService.js``` para interagir com a API do Gemini, gerando descrições automaticamente a partir das imagens enviadas.

**Testando a Integração:** Utilizamos o Postman para testar o upload e a atualização, confirmando que as descrições geradas foram salvas corretamente no banco de dados.

**Integração com o Front-End:** Configuramos um projeto front-end pré-configurado para consumir a API, utilizando o pacote ```cors``` para permitir a comunicação entre o front-end e o back-end.

**Publicação na Google Cloud:** Preparamos o projeto para deploy na Google Cloud, utilizando o Cloud Run para disponibilizar a API na nuvem. O processo incluiu a instalação de dependências e a configuração de variáveis de ambiente.

**Automatização e Vouchers:** Um script ```services.sh``` foi utilizado para automatizar a configuração dos serviços, e vouchers da Google Cloud foram fornecidos aos participantes para facilitar o acesso.

**Instrutores:**
- Guilherme Lima
- Juliana Amoasei
- André David

Gerado pela Aluri.