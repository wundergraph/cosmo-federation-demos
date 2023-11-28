import { createServer } from '@graphql-yoga/node';
import { readFileSync } from 'node:fs';
import * as path from 'node:path';
import { consultancy, cosmo, employees, engineers, marketers, operators, products, sdk } from './data';
import { _Entity, _Service, Consultancy, Cosmo, Department, Employee, Product, RoleType, SDK } from './types';
import { baseSchema } from '../utils';

const port = 4001;

const typeDefs = baseSchema + readFileSync(path.join(__dirname + '/employees.graphql')).toString();

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
  Identifiable: {
    __resolveType(_: Employee) {
      return 'Employee';
    },
  },
  IProduct: {
    __resolveType(obj: Cosmo | SDK) {
      switch (obj.upc) {
        case 'cosmo':
          return 'Cosmo';
        case 'sdk':
          return 'SDK';
        default:
          return null;
      }
    },
  },
  RoleType: {
    __resolveType(obj: RoleType): string | null {
      switch (obj.departments[0]) {
        case Department.ENGINEERING:
          return 'Engineer';
        case Department.MARKETING:
          return 'Marketer';
        case Department.OPERATIONS:
          return 'Operator';
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
    employee: (_: any, args: { id: number }): Employee | null => {
      if (args.id < 1) {
        return null;
      }
      for (const employee of employees) {
        if (employee.id === args.id) {
          return employee;
        }
      }
      return null;
    },
    employees: (): Employee[] => {
      return employees;
    },
    teammates: (_: any, args: { team: Department }): Employee[] => {
      switch (args.team) {
        case Department.MARKETING:
          return marketers;
        case Department.OPERATIONS:
          return operators;
        default:
          return engineers;
      }
    },
    products: (): Product[] => {
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
