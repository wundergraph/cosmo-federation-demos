export enum ProductName {
  CONSULTANCY= 'CONSULTANCY',
  COSMO = 'COSMO',
  ENGINE = 'ENGINE',
  FINANCE = 'FINANCE',
  HUMAN_RESOURCES = 'HUMAN_RESOURCES',
  MARKETING = 'MARKETING',
  SDK = 'SDK',
};

export type Consultancy = {
  __typename: string;
  upc: string;
  name: ProductName;
};

export type Cosmo = {
  __typename: string;
  upc: string;
  name: ProductName;
  repositoryURL: string;
};

export type Documentation = {
  url: string;
  urls: string[];
};

export type Product = Consultancy | Cosmo | Documentation;

export type Employee = {
  __typename: string;
  id: number;
  products: ProductName[];
  notes: string;
};

export type _Entity = Consultancy | Cosmo | Employee;

export type _Service = {
  sdl: string;
};