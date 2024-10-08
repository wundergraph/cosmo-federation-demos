package mood

import (
	"github.com/99designs/gqlgen/graphql"
	"github.com/wundergraph/graphql-go-tools/v2/pkg/engine/datasource/pubsub_datasource"

	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/mood/subgraph"
	"github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/mood/subgraph/generated"
)

func NewSchema(natsPubSubByProviderID map[string]pubsub_datasource.NatsPubSub) graphql.ExecutableSchema {
	return generated.NewExecutableSchema(generated.Config{Resolvers: &subgraph.Resolver{
		NatsPubSubByProviderID: natsPubSubByProviderID,
	}})
}
