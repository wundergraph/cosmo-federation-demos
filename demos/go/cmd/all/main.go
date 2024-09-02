package main

import (
	"context"
	"flag"
	"log"

	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs"
)

var (
	debug     = flag.Bool("debug", false, "Enable debug logging")
	employees = flag.Int("employees", 4001, "Port for employees subgraph")
	family    = flag.Int("family", 4002, "Port for family subgraph")
	hobbies   = flag.Int("hobbies", 4003, "Port for hobbies subgraph")
	products  = flag.Int("products", 4004, "Port for products subgraph")
	// 4005 is used for graphqlmetrics in development, skip it for ergonomics
	availability            = flag.Int("availability", 4007, "Port for availability subgraph")
	mood                    = flag.Int("mood", 4008, "Port for mood subgraph")
	productsFeatureSubgraph = flag.Int("products_fg", 4010, "Port for products feature subgraph")
)

func main() {
	flag.Parse()
	config := subgraphs.Config{
		Ports: subgraphs.Ports{
			Employees:    *employees,
			Family:       *family,
			Hobbies:      *hobbies,
			Products:     *products,
			Availability: *availability,
			Mood:         *mood,
			ProductsFG:   *productsFeatureSubgraph,
		},
		EnableDebug: *debug,
	}
	ctx := context.Background()
	subgraphs, err := subgraphs.New(ctx, &config)
	if err != nil {
		log.Fatal(err)
	}
	log.Fatal(subgraphs.ListenAndServe(ctx))
}
