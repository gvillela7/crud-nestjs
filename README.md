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

</p>
 
## Description
Simple CRUD API example using nestJS and typeORM with MySQL, one-to-many relationship.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
# Usage
### Create User
POST
```
# http://localhost:3000/api/v1/users/create
{
  "name": "João Gomes",
  "email": "jg@flamengo.com.br",
  "phones": [
	{
      "number": "55 21 9 9615-0000"
	},
	{
	  "number": "55 21 9 9736-1111"
	}
  ]
}
```
### Find User
GET
```
# http://localhost:3000/api/v1/users/find/1

```
### Get All Users
GET
```
# http://localhost:3000/api/v1/users/getAll
```

### Update User
PATCH
```
# http://localhost:3000/api/v1/users/update/1
{
  "name": "João Gomes",
  "email": "jg@flamengo.com.br",
  "phones": [
	{
	  "id": 1,
      "number": "55 21 9 9615-0000"
	},
	{
	  "id": 2,
	  "number": "55 21 9 9736-1111"
	}
  ]
}
```
### Delete User
DELETE
```
# http://localhost:3000/api/v1/users/delete/1
```
