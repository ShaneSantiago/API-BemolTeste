
 
<!-- PROJECT TITLE -->
<h1 align='center'id="top"> :rocket: == Sistema de cadastro== :rocket: </h1>


<!-- PROJECT SOBRE -->
<h2 id="sobre">:notebook: Sobre </h2>

<p align="justify">Uma API para cadastrar, buscar, editar e também deletar</p>

## Instruções:
<p align="justify">Basta clonar o repositório e logo após abrir o código usar o comando npm install e npm start para o projeto ficar online.
Precisará criar uma tabela no banco de dados e acrecentar as credenciais do seu banco. Para facilitar, a API está online para testes.
Abaixo tem mais informações sobre o projeto</p>

<h2 id="site">:earth_americas: Link da API </h2>
<p>🔗 <a href="https://api-cadastro2.herokuapp.com/" target="_blank"> API </a>  </p>
<!-- <a href="https://api-cadastro2.herokuapp.com/" onclick="return ! window.open(this.href);"> Open in a new window</a> -->

## Endpoints
**<p>Criar aluno:** Esse endpoint deve receber os seguintes parametros: </br>
**Metodo Post:** http://localhost:3003/alunos/signup
 - "nome": "Teste",
 - "cpf": "10-10-2020",
 - "cep": "00000000000",
 - "tel": "12345678",
 - "bairro": "teste",
 - "cidade": "teste",
 - "logradouro": "teste",
 - "uf": "teste"
</p>

**<p>Buscar usuário:** </br>
  **Metodo Get:** http://localhost:3003/usuario
</p>

**<p>Buscar usuário por ID:** </br>
 **Metodo Get:** http://localhost:3003/usuario/:id
</p>

**<p>Editar usuario:** </br>
 **Metodo Put:** http://localhost:3003/edit/usuario/:id </br>
 Deve receber o ID do usuario que será alterado
 para alterar alguma informação do usuario deve receber qualquer um parametro abaixo e preencher a nova informação que vai receber:
 - "nome": "",
 - "cpf": "",
 - "cep": "",
 - "tel": "",
 - "bairro": "",
 - "cidade": "",
 - "logradouro": "",
 - "uf": "
</p>

**<p>Delete usuario:** </br>
 **Metodo Delete:** http://localhost:3003/delete/usuario/:id </br>
 Deve receber o ID do usuario que será deletado
</p>


## 🚀 Como executar
* Instale as dependências com
```
  npm install
 ```
* Inicie o servidor com
 ```
 npm run start ou npm dev-start
 ```

### 💻 Tecnologias:
As seguintes tecnologias foram usadas na construção do projeto:
- NodeJS
- Typescript
- MySQL

<!-- PROJECT IT WORKS-->
<h2 id="funciona">:heavy_check_mark: O que funciona</h2>

### Integração com API
- [x] Listagem de usuário;
- [x] Post usuário;
- [x] Get usuário;
- [x] Get usuário por ID;
- [x] Put usuário;
- [x] Delete usuário;








# API-BemolTeste
