# cosmo-federation-demos
WunderGraph Cosmo Federation demonstrations in TypeScript or Go.

## Prerequisites
1. Install `wgc` (0.34+)

 ```bash
  npm i -g wgc@latest
```

## Go
### Additional Prerequisites
1. Install Go 1.21 https://go.dev/doc/install
2. Install Make (optional)
- Windows: https://gnuwin32.sourceforge.net/packages/make.htm
- MacOS: 

```bash
    brew install make
```

### Running the demo
1. Using makefile

```makefile
    make run-go
```

2. From source

- Run the services
```bash
  # run the services
  cd demos/go && go run cmd/all/main.go
```
- Download and run the router
```bash
  # run the router
  wgc router download-binary
  cd router && ./router
```

Go to http://localhost:3002 and try out the example query `./example-queries.graphql`!

### Generating the router configuration
NOTE: If you have not changed the schemas, this step is not necessary.

```bash
   cd router/go
   wgc router compose -i graphs-go.yaml -o ../config.json
```

## TypeScript
### Additional Prerequisites
1. Node 18+ https://nodejs.org/en/download
2. Install the packages

```bash
{package manager} install
```

### Running the demo
1. Using Make

```makefile
    make run-ts
```

2. Using your chosen package manager

```bash
   {package manager} start
```

Go to http://localhost:3002 and try out the example query `./example-queries.graphql`!

### Generating the router configuration
NOTE: If you have not changed the schemas, this step is not necessary.

```bash
   cd router/ts
   wgc router compose -i graphs-ts.yaml -o ../config.json
```