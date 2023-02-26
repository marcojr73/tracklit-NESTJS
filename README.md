<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Api reference

- **POST** Fazer cadastro
    
    Para fazer cadastro, faça uma requisição `POST` para o endpoint "/auth/sign-up"
    
    enviando um corpo no formato
    
    ```jsx
    {
    	email: "...",
    	name: "...",
    	image: "...",
    	password: "..."
    }
    ```
    
- **POST** Fazer login
    
    Para fazer cadastro, faça uma requisição `POST` para o endpoint "/auth/sign-in"
    
    enviando um corpo no formato
    
    ```jsx
    {
    	email: "...",
    	password: "..."
    }
    ```
    
    O servidor responderá com um objeto no formato
    
    ```json
    {
        "id": 3,
        "name": "Joe",
        "image": "https://http.cat/411.jpg",
        "email": "joe@respondeai.com.br",
        "password": "123456",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
    }
    ```
    
- **POST** Criar hábito
    
    Para criar um hábito, faça uma requisição `POST` para o endpoint "/habits"
    
    enviando um corpo no formato
    
    ```jsx
    {
    	name: "Nome do hábito",
    	days: [1, 3, 5] // segunda, quarta e sexta
    }
    ```
    
    e um cabeçalho `Authorization` com formato `Bearer TOKEN`
    
    O servidor responderá com um objeto no formato
    
    ```json
    {
    	id: 1,
    	name: "Nome do hábito",
    	days: [1, 3, 5]
    }
    ```
    
- **GET** Listar hábitos
    
    Para listar os hábitos do usuário, faça uma requisição `GET` o endpoint "/habits"
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`
    
    O servidor responderá com uma array no formato
    
    ```json
    [
    	{
    		id: 1,
    		name: "Nome do hábito",
    		days: [1, 3, 5]
    	},
    	{
    		id: 2,
    		name: "Nome do hábito 2",
    		days: [1, 3, 4, 6]
    	}
    ]
    ```
    
- **DELETE** Deletar hábito
    
    Para excluir um hábito do usuário, faça uma requisição `DELETE` para o endpoint "/habits/ID_DOHABITO"
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`, subtituindo `ID_DO_HABITO` na URL pelo id do hábito a ser deletado.
    
    **Dica**: pesquise sobre como enviar um request `DELETE` com axios
    
- **GET** Buscar hábitos de hoje
    
    Para fazer listar os hábitos do usuário, faça uma requisição `GET` para o endpoint /habits
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`
    
    O servidor responderá com um array no formato
    
    ```json
    [
        {
            "id": 3,
            "name": "Acordar",
            "done": true,
            "currentSequence": 1,
            "highestSequence": 1
        }
    ]
    ```
    
- **POST** Marcar hábito como feito
    
    Para fazer listar os hábitos do usuário, faça uma requisição `POST` para o endpoint "/habits/ID_DO_HABITO/check"
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`, substituindo `ID_DO_HABITO` na URL pelo id do hábito a ser marcado.
    
    Se:
    
    - O hábito já estiver marcado
    - O hábito não for do dia atual
    - O hábito não for do usuário logado
    
    o servidor vai responder com `Bad Request (400)`.
    
- **POST** Desmarcar hábito como feito
    
    Para fazer listar os hábitos do usuário, faça uma requisição `POST` para o endpoint "/habits/ID_DOHABITO/uncheck"
    ```
    
    com um cabeçalho `Authorization` com formato `Bearer TOKEN`, substituindo `ID_DO_HABITO` na URL pelo id do hábito a ser marcado.
    
    Se:
    
    - O hábito não estiver marcado
    - O hábito não for do dia atual
    - O hábito não for do usuário logado
    
    o servidor vai responder com `Bad Request (400)`.


## Stay in touch

- Author - Marco Júnior
- linkedin - https://www.linkedin.com/in/marcojr73/
- website - https://portfolio-marcojr73.vercel.app/

## License

Nest is [MIT licensed](LICENSE).
