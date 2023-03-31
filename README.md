# Project Title

My Library Frontend

## Demo link:

The site can be accessed at:

- [sweepsouthconnect.com](https://sweepsouthconnect.com/)
- [sweepsouthconnectqa.net](https://sweepsouthconnectqa.net/)

## Table of Contents:

- [Technologies](#technologies)
- [Setup](#setup)
- [Running the application](#running-the-application)
- [Generating schemas](#generating-schemas)

## Technologies

Technologies used are:

<ol>
<li>Next js - react js service side framework. More info: [next js](https://nextjs.org/docs/getting-started)</li>
<li>Material ui - component library inspired by google. More info: [material-ui](https://mui.com/material-ui/getting-started/installation/)</li>
<li>Typescript - superset of javascript that provides types when writing javascript code. More info: [typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)</li>
<li> GraphQl code generator - graphql code generator that syncs with backend graphql endpoint and generates schemas for frontend use. More info: [codegen](https://www.graphql-code-generator.com/docs/getting-started) </li>
</ol>

## Setup

- Download or clone the repository
- Run `yarn install`

## Running the application

- Go to the root directory of the application
- Create a `.env` file.
- Copy the contents of `env.sample` file
- Change `NEXT_PUBLIC_GRAPHQL_ENDPOINT` value to point to local instance of the backend server eg: NEXT_PUBLIC_GRAPHQL_ENDPOINT=http://localhost:8080/graphql/
- Run `yarn dev` and navigate to `http://localhost:3000` to view the app

## Generating schemas

- Go to the root directory of the application,
- Open the graphql folder. You will see two files:
  - mutations - where mutation queries are contained.
  - queries - where queries are contained.
- After adding a query or a mutation in either of the folders. Navigate to the root directory and run `yarn codegen`
