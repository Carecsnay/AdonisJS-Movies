# API de Filmes e Categorias

Esta é uma API RESTful para gerenciar filmes e suas respectivas categorias, construída com [AdonisJS](https://adonisjs.com/) v6.

## Funcionalidades

- CRUD completo para Filmes.
- Listagem de Categorias.
- Ambiente de desenvolvimento com HMR (Hot Module Replacement).
- Linting e formatação de código com ESLint e Prettier.

## Tecnologias Principais

- [AdonisJS](https://adonisjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lucid ORM](https://docs.adonisjs.com/guides/database/lucid)
- [SQLite](https://www.sqlite.org/index.html) (padrão para desenvolvimento)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 20 ou superior)
- [NPM](https://www.npmjs.com/) ou um gerenciador de pacotes de sua preferência.

## Guia de Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd filmes
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configuração do Ambiente:**
    - Copie o arquivo de exemplo `.env.example` para um novo arquivo `.env`.
      ```bash
      cp .env.example .env
      ```
    - Gere uma chave para a aplicação.
      ```bash
      node ace generate:key
      ```
    - O projeto está configurado para usar SQLite por padrão e não requer configuração adicional de banco de dados para o ambiente de desenvolvimento.

4.  **Execute as Migrations:**
    Para criar as tabelas `filmes` e `categorias` no banco de dados.
    ```bash
    node ace migration:run
    ```

5.  **(Opcional) Popule o Banco de Dados:**
    Se houver seeders disponíveis, popule o banco com dados de teste.
    ```bash
    node ace db:seed
    ```

6.  **Inicie o Servidor:**
    Para iniciar o servidor em modo de desenvolvimento com recarregamento automático.
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:3333`.

## Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR. |
| `npm run build` | Compila o projeto TypeScript para JavaScript. |
| `npm run start` | Inicia o servidor em modo de produção (requer `build`). |
| `npm run test` | Executa a suíte de testes com Japa. |
| `npm run lint` | Analisa o código em busca de erros de padrão. |
| `npm run format`| Formata o código-fonte utilizando Prettier. |

## Endpoints da API

A seguir, a lista de endpoints disponíveis na aplicação:

### Rota Principal
- **`GET /`**
  - Retorna uma mensagem de boas-vindas.
    ```json
    {
      "hello": "AdonisJS Movies"
    }
    ```

### Categorias
- **`GET /categorias`**
  - Retorna uma lista de todas as categorias.

### Filmes (API Resourceful)
O recurso `/filmes` segue o padrão `apiOnly` do AdonisJS.

| Método | URI | Ação |
| :--- | :--- | :--- |
| `GET` | `/filmes` | `index` - Lista todos os filmes. |
| `POST` | `/filmes` | `store` - Cria um novo filme. |
| `GET` | `/filmes/:id` | `show` - Exibe um filme específico. |
| `PUT / PATCH` | `/filmes/:id` | `update` - Atualiza um filme específico. |
| `DELETE` | `/filmes/:id` | `destroy` - Deleta um filme específico. |

---
*Readme gerado e atualizado com base na estrutura do projeto.*