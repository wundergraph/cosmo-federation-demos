package employees

import (
	"github.com/99designs/gqlgen/graphql"

	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/employees/subgraph"
	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/employees/subgraph/generated"
)

func NewSchema() graphql.ExecutableSchema {
	return generated.NewExecutableSchema(generated.Config{Resolvers: &subgraph.Resolver{}})
}
