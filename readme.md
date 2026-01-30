# Projeto de Filmes

Este é um projeto de API de filmes desenvolvido com AdonisJS.

## Tecnologias Utilizadas

*   [AdonisJS](https://adonisjs.com/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [SQLite](https://www.sqlite.org/index.html) (para desenvolvimento)

## Começando

1.  **Clone o repositório:**
    ```bash
    git clone <url-do-repositorio>
    cd filmes
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Copie o arquivo de ambiente:**
    ```bash
    cp .env.example .env
    ```

4.  **Gere uma chave de aplicativo:**
    ```bash
    node ace generate:key
    ```

5.  **Execute as migrações do banco de dados:**
    ```bash
    node ace migration:run
    ```

6.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O servidor estará rodando em `http://localhost:3333`.

## Scripts Disponíveis

*   `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload.
*   `npm run build`: Compila o código TypeScript para JavaScript.
*   `npm start`: Inicia o servidor em modo de produção.
*   `npm test`: Executa os testes.
*   `npm run lint`: Executa o linter.
*   `npm run format`: Formata o código com o Prettier.

## Estrutura do Projeto

*   `app/controllers`: Contém os controladores HTTP.
*   `app/models`: Contém os modelos do Lucid (ORM).
*   `config`: Contém os arquivos de configuração.
*   `database/migrations`: Contém as migrações do banco de dados.
*   `start/routes.ts`: Arquivo para definição de rotas.
*   `tests`: Contém os arquivos de teste.
