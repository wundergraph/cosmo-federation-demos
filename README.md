# cosmo-federation-demos
WunderGraph Cosmo Federation demonstrations in TypeScript or Go.

## General Prerequisites
1. Install `wgc` (0.34+)
    ```bash
    npm -i -g wgc@latest
   ```
2. Install Make (optional)
- Windows: https://gnuwin32.sourceforge.net/packages/make.htm
- MacOS: 
```bash
    brew install make
```

## Go Prerequisites
1. Install Go 1.21 https://go.dev/doc/install

## TypeScript Prerequisites
1. Node 18+
2. Install the packages
```bash
{package manager} install
```


## Creating configuration
NOTE: If you have not changed the graph schemas, this step is not necessary.
1. Go
```bash
cd router/go
wgc router compose -i graphs-go.yaml -o ../config.json
```
2. TypeScript
```bash
cd router/ts
wgc router compose -i graphs-ts.yaml -o ../config.json
```

## Running the demo
1. Go
- make
```makefile
    make run-go
```
- from source
```bash
  # run the services
  cd demos/go && go run cmd/all/main.go
```
```bash
  # run the router
  wgc router download-binary
  cd /router && ./router
```
2. TypeScript
- make
```makefile
    make run-ts
```
- with your chosen package manager
```bash
   {package manager} start
```