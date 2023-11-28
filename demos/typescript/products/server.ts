import { createServer } from '@graphql-yoga/node';
import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import { baseSchema } from '../utils';
import { consultancy, cosmo, employees, products } from './data';
import { _Entity, _Service, Consultancy, Cosmo, Employee, Product, ProductName } from './types';

const port = 4004;

const typeDefs = baseSchema + readFileSync(path.join(__dirname + '/products.graphql')).toString();

function getUrlForProductName(productName: ProductName): string {
  switch (productName) {
    case ProductName.CONSULTANCY:
      return 'https://cal.com/stefan-avram-wundergraph/wundergraph-introduction';
    case ProductName.COSMO:
      return 'https://cosmo-docs.wundergraph.com/';
    case ProductName.ENGINE:
      return 'https://github.com/wundergraph/graphql-go-tools/blob/master/README.md';
    case ProductName.MARKETING:
      return 'https://wundergraph.com/pricing';
    case ProductName.SDK:
      return 'https://docs.wundergraph.com/';
    default:
      return 'N/A';
  }
}

const resolvers = {
  Consultancy: {
    __resolveReference(ref: { upc: string }): Consultancy | null {
      if (ref.upc === 'consultancy') {
        return consultancy;
      }
      return null;
    },
  },
  Cosmo: {
    __resolveReference(ref: { upc: string }): Cosmo | null {
      if (ref.upc === 'cosmo') {
        return cosmo;
      }
      return null;
    },
  },
  Documentation: {
    url: (_: any, args: { product: ProductName }): string => {
      return getUrlForProductName(args.product);
    },
    urls: (_: any, args: { products: ProductName[] }): string[] => {
      const links: string[] = [];
      for (const productName of args.products) {
        links.push(getUrlForProductName(productName));
      }
      return links;
    },
  },
  Employee: {
    __resolveReference(ref: { id: number }): Employee | null {
      for (const employee of employees) {
        if (employee.id === ref.id) {
          return employee;
        }
      }
      return null;
    },
  },
  Products: {
    __resolveType(obj: any): string | null {
      if (obj.upc === 'consultancy') {
        return 'Consultancy';
      }
      if (obj.upc === 'cosmo') {
        return 'Cosmo';
      }
      if (obj.url !== undefined) {
        return 'Documentation';
      }
      return null;
    },
  },
  Queries: {
    productTypes: (): Product[] => {
      return products;
    },
    _entities(_: any, args: { representations: any[] }): _Entity[] | null {
      const output: _Entity[] = [];
      for (const representation of args.representations) {
        switch (representation.__typename) {
          case 'Consultancy':
            output.push(consultancy);
            break;
          case 'Cosmo':
            output.push(cosmo);
            break;
          case 'Employee':
            for (const employee of employees) {
              if (employee.id === representation.id) {
                output.push(employee);
                break;
              }
            }
            break;
        }
      }
      return output.length > 0 ? output : null;
    },
    _service(): _Service {
      return {
        sdl: typeDefs,
      };
    },
  },
};

export function createSchemaExtensionsTestServer(port = 4000) {
  return createServer({
    port,
    schema: {
      typeDefs,
      resolvers,
    },
  });
}

if (require.main === module) {
  const server = createSchemaExtensionsTestServer(port);
  server.start().then(() => console.log(`Yoga GraphQL server started on port ${port}.`));
}
