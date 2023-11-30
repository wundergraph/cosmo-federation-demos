import { Consultancy, Cosmo, Documentation, Employee, Product, ProductName } from './types';

export const employees: Employee[] = [
  {
    __typename: 'Employee',
    id: 1,
    products: [ProductName.CONSULTANCY, ProductName.COSMO, ProductName.ENGINE, ProductName.MARKETING, ProductName.SDK],
    notes: 'Jens notes reoslved by products',
  },
  {
    __typename: 'Employee',
    id: 2,
    products: [ProductName.COSMO, ProductName.SDK],
    notes: 'Dustin notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 3,
    products: [ProductName.CONSULTANCY, ProductName.MARKETING],
    notes: 'Stefan notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 4,
    products: [ProductName.FINANCE, ProductName.HUMAN_RESOURCES, ProductName.MARKETING],
    notes: 'Björn notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 5,
    products: [ProductName.ENGINE, ProductName.SDK],
    notes: 'Sergiy notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 7,
    products: [ProductName.COSMO, ProductName.SDK],
    notes: 'Suvij notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 8,
    products: [ProductName.COSMO, ProductName.SDK],
    notes: 'Nithin notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 9,
    products: [ProductName.CONSULTANCY, ProductName.COSMO, ProductName.ENGINE, ProductName.SDK],
    notes: 'Alberto notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 10,
    products: [ProductName.CONSULTANCY, ProductName.COSMO, ProductName.SDK],
    notes: 'Eelco notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 11,
    products: [ProductName.FINANCE],
    notes: 'Alexandra notes resolved by products',
  },
  {
    __typename: 'Employee',
    id: 12,
    products: [ProductName.CONSULTANCY, ProductName.COSMO, ProductName.ENGINE, ProductName.SDK],
    notes: 'David notes resolved by products',
  },
];

export const consultancy: Consultancy = {
  __typename: 'Consultancy',
  upc: 'consultancy',
  name: ProductName.CONSULTANCY,
};

export const cosmo: Cosmo = {
  __typename: 'Cosmo',
  upc: 'cosmo',
  name: ProductName.COSMO,
  repositoryURL: 'https://github.com/wundergraph/cosmo',
};

export const documentation: Documentation = {
  url: '',
  urls: [],
};

export const products: Product[] = [consultancy, cosmo, documentation];