# Serverless AWS starter

This project is a starter template for writing web applications on [AWS](https://aws.amazon.com/) with [Serverless](https://www.serverless.com/) using:

- [Node.js](https://nodejs.dev/) server using [Express](https://expressjs.com/)
- [React](https://reactjs.org/) client with Material-UI (using [create-react-app](https://create-react-app.dev/))
- [Typescript](https://www.typescriptlang.org/)

## Setup

- Install Node.js `lts/fermium` (v14) installed. Note: this project includes a `.nvmrc` file to set this.
- Install AWS cli - https://formulae.brew.sh/formula/awscli
- Install Serverless - https://www.serverless.com/framework/docs/getting-started

Create credentials for an IAM user in AWS and configure the AWS cli to use those credentials - https://docs.aws.amazon.com/cli/latest/reference/configure/

## Running locally

From the root of this project:

```bash
npm run install:all
npm run start:client
npm run start:server
```
When running locally the server runs on port 8080 and the client runs on port 3000. In local mode the client is configured to proxy any unknown requests to the server. This allows local development of
backend API endpoints while maintaining hot-reloading etc in the client. Access the application via http://localhost:3000 and it will automatically proxy API calls to the server.

Both the `start:client` and `start:server` scripts watch for changes and automatically recompile, restart etc.

## Deploying to AWS

Deploy the application to AWS:

```bash
npm run deploy
```

