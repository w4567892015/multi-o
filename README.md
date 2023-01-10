# Nestjs Object

## Description

What is DTO, DO, PO ?

DTO, DO, PO are design patterns and acronyms that are commonly used in software development. They are used to organize the codebase and separate the concerns of different layers of an application:

- <b>DTO (Data Transfer Object)</b>: This is an object that is used to pass data between different layers of an application. DTOs are used to represent the data that should be sent over the network or stored in a database. DTOs are often used to validate incoming data before it is processed by the application.

- <b>DO (Data Object)</b>: This is an object that represents data that is stored in a database. DOs are used to model the data that is stored in the database. They usually include fields that correspond to the columns in a database table.

- <b>PO (Plain Old JavaScript Object)</b>: This is a simple JavaScript object that does not include any methods or behaviors. POJOs are often used to represent data in an application, and are easy to work with in JavaScript and TypeScript.

## Definition

Controller
  - Input > DTO
  - Output > DO

Service
  - Output > DO

DataBase
  - Output > PO

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

## License

Nest is [MIT licensed](LICENSE).
