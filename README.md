
 
<!-- PROJECT TITLE -->
<h1 align='center'id="top"> :rocket: == Sistema de cadastro== :rocket: </h1>


<!-- PROJECT SOBRE -->
<h2 id="sobre">:notebook: Sobre </h2>

<p align="justify">Uma API para cadastrar alunos, buscar, editar e também deletar</p>

## Instruções:
<p align="justify">Basta clonar o repositório e logo após abrir o código usar o comando npm install e npm start para o projeto ficar online. Abaixo tem mais informações sobre o projeto</p>

## Endpoints
**<p>Criar aluno:** Esse endpoint deve receber os seguintes parametros: </br>
**Metodo Post:** http://localhost:3003/alunos/signup
 - "nome": "Teste",
 - "nascimento": "10-10-2020",
 - "cpf": "00000000000",
 - "tel": "12345678",
 - "bairro": "teste"
</p>

**<p>Buscar alunos:** </br>
  **Metodo Get:** http://localhost:3003/alunos
</p>

**<p>Buscar alunos por ID:** </br>
 **Metodo Get:** http://localhost:3003/aluno/:id
</p>

**<p>Editar aluno:** </br>
 **Metodo Put:** http://localhost:3003/edit/aluno/:id </br>
 Deve receber o ID do aluno que será alterado
 para alterar alguma informação do aluno deve receber qualquer um parametro abaixo e preencher a nova informação que vai receber:
 - "nome": "",
 - "nascimento": "",
 - "cpf": "",
 - "tel": "",
 - "bairro": ""
</p>

**<p>Delete aluno:** </br>
 **Metodo Delete:** http://localhost:3003/delete/aluno/:id </br>
 Deve receber o ID do aluno que será deletado
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
- [x] Listagem de Alunos;
- [x] Post aluno;
- [x] Get alunos;
- [x] Get aluno por ID;
- [x] Put aluno;
- [x] Delete aluno;








# API-BemolTeste
