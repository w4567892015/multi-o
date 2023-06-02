# Nestjs Object

## Description

What is DTO, BO, DAO, PO, VO ?

DTO, BO, DAO, PO, VO are design patterns and acronyms that are commonly used in software development. They are used to organize the codebase and separate the concerns of different layers of an application:

- <b>DTO (Data Transfer Object)</b>: The data transfer object is used for service creation input and output because the services are shared between applications.

- <b>BO (Business Object)</b>: The business object is used for service to a repository.

- <b>DAO (Data Access Object)</b>: The data access object is used for database input and output.

- <b>PO (Persistence Object)</b>: The persistence object is the repository response object.

- <b>VO (Value Object)</b>: The value object is used for client response.

## Definition

### Restful
![design](https://github.com/w4567892015/multi-o/blob/main/pic/rest-design.png)


### Graphql
![design](https://github.com/w4567892015/multi-o/blob/main/pic/graphql-design.png)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start <app>

# watch mode
$ npm run start:dev <app>

```

## Test

```bash
# unit tests
$ npm run test <app>

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
