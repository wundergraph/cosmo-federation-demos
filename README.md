# cosmo-federation-demos

This repository contains a demo of [WunderGraph Cosmo](https://cosmo-docs.wundergraph.com/) Federation capabilities. It showcases to implement subgraphs in TypeScript and Go and how to compose them into a federated graph.
It uses the command-line [`wgc`](https://cosmo-docs.wundergraph.com/cli/intro) to compose a federated schema from multiple subgraphs and the [`Cosmo Router`](https://cosmo-docs.wundergraph.com/router) to run the Federated Graph. The router is the component that understands the GraphQL Federation protocol. It is responsible for routing requests to the correct service and for aggregating the responses.

## Getting started

We made it easy to get started with the demo. Just follow the steps below.

## Prerequisites
1. Install the dependencies `npm install`

### Running the demo with TypeScript Subgraphs

```bash
npm start
```

Finally, go to [http://localhost:3002](http://localhost:3002) and try out the example query [`./example-queries.graphql`](./example-queries.graphql)!

### Using Go Subgraphs

You can also run subgraphs in Go. To do so, you need to have the [Go toolchain installed](https://go.dev/doc/install).

```bash
npm start-go
```

### Generating the router configuration (optional)

You can update the subgraph schemas and regenerate the router configuration by running:

```bash
npm run compose
# or
npm run compose-go
```

This will require a restart of the router so press `CTRL+C` and run `npm start` again.

💫 If you like to learn more about federation, check out the [Cosmo Docs](https://cosmo-docs.wundergraph.com/).
