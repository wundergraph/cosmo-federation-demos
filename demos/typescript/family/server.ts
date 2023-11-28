import { createServer } from '@graphql-yoga/node';
import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import { baseSchema } from '../utils';
import { _Service, Employee, Pet, SearchInput } from './types';
import { employees } from './data';

const port = 4002;

const typeDefs = baseSchema + readFileSync(path.join(__dirname + '/family.graphql')).toString();

const resolvers = {
  Animal: {
    __resolveType(obj: Pet): string | null {
      switch (obj.__typename) {
        case 'Alligator':
          return 'Alligator';
        case 'Cat':
          return 'Cat';
        case 'Dog':
          return 'Dog';
        case 'Mouse':
          return 'Mouse';
        case 'Pony':
          return 'Pony';
        default:
          return null;
      }
    },
  },
  Employee: {
    __resolveReference( ref: { id: number }): Employee | null {
      for (const employee of employees) {
        if (employee.id === ref.id) {
          return employee;
        }
      }
      return null;
    },
  },
  Pet: {
    __resolveType(obj: Pet) {
      switch (obj.__typename) {
        case 'Alligator':
          return 'Alligator';
        case 'Cat':
          return 'Cat';
        case 'Dog':
          return 'Dog';
        case 'Mouse':
          return 'Mouse';
        case 'Pony':
            return 'Pony';
        default:
          return null;
      }
    },
  },
  Query: {
    findEmployees(_: any, args: { criteria: SearchInput } ): Employee[] {
      const input = args.criteria;
      const output: Employee[] = [];
      for (const employee of employees) {
        if (input.hasPets !== undefined) {
          const hasPets = employee.details.pets ? employee.details.pets.length > 0 : false;
          if (input.hasPets !== hasPets) {
            continue;
          }
        }
        if (input.nationality !== undefined && employee.details.nationality !== input.nationality) {
          continue;
        }
        if (input.nested !== undefined) {
          if (input.nested.hasChildren !== undefined && employee.details.hasChildren !== input.nested.hasChildren) {
            continue;
          }
          if (input.nested.maritalStatus !== undefined && employee.details.maritalStatus !== input.nested.maritalStatus) {
            continue;
          }
        }
        output.push(employee);
      }
      return output;
    },
    _entities(_: any, args: { representations: any[] }): Employee[] | null {
      const output: Employee[] = [];
      for (const representation of args.representations) {
        switch (representation.__typename) {
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
        sdl: typeDefs
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
