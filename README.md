# cosmo-federation-demos

This repository contains a demo of [WunderGraph Cosmo](https://cosmo-docs.wundergraph.com/) Federation capabilities.
It uses the command-line [`wgc`](https://cosmo-docs.wundergraph.com/cli/intro) to compose a federated schema from multiple subgraphs and run it with the [`Cosmo Router`](https://cosmo-docs.wundergraph.com/router). The router is the component that understands the GraphQL Federation protocol. It is responsible for routing requests to the correct service and for aggregating the responses.

## Getting started

We made it easy to get started with the demo. Just follow the steps below.

## Prerequisites
1. Install the dependencies `npm install`

### Running the demo

```bash
npm start
```

Finally, go to [http://localhost:3002](http://localhost:3002) and try out the example query [./example-queries.graphql](``./example-queries.graphql``)!

> [!NOTE]
> You can also run subgraphs in Go. To do so, run `npm run start-go` instead.

### Generating the router configuration (optional)

> [!NOTE]
> If you have not changed the schemas, this step is not necessary.

```bash
npm run compose
```