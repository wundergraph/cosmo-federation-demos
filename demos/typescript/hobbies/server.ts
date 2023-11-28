import { createServer } from '@graphql-yoga/node';
import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import { baseSchema } from '../utils';
import { _Entity, _Service, Employee, Hobby, SDK } from './types';
import { employees, sdk } from './data';

const port = 4003;

const typeDefs = baseSchema + readFileSync(path.join(__dirname + '/hobbies.graphql')).toString();

const resolvers = {
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
  Experience: {
    __resolveType(obj: any): string | null {
      if (obj.planeModels) {
        return 'Flying';
      }
      if (obj.genres) {
        return 'Gaming';
      }
      return null;
    },
  },
  Hobby: {
    __resolveType(obj: Hobby): string | null {
      switch (obj.__typename) {
        case 'Exercise':
          return 'Exercise';
        case 'Flying':
          return 'Flying';
        case 'Gaming':
          return 'Gaming';
        case 'Other':
          return 'Other';
        case 'Programming':
          return 'Programming';
        case 'Travelling':
          return 'Travelling';
        default:
          return null;
      }
    },
  },
  SDK: {
    __resolveReference(ref: { upc: string }): SDK | null {
      if (ref.upc === 'sdk') {
        return sdk;
      }
      return null;
    },
  },
  Query: {
    _entities(_: any, args: { representations: any[] }): _Entity[] | null {
      const output: _Entity[] = [];
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
          case 'SDK':
            output.push(sdk);
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
