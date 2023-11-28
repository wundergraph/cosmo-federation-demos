export enum Country {
  AMERICA = 'AMERICA',
  ENGLAND = 'ENGLAND',
  GERMANY = 'GERMANY',
  INDIA = 'INDIA',
  NETHERLANDS = 'NETHERLANDS',
  PORTUGAL = 'PORTUGAL',
  UKRAINE = 'UKRAINE',
}

export enum Department {
  ENGINEERING = 'ENGINEERING',
  MARKETING = 'MARKETING',
  OPERATIONS = 'OPERATIONS',
}

export type Details = {
  forename: string;
  surname: string;
  location: Country;
};

export type Employee = {
  __typename: 'Employee';
  id: number;
  details: Details;
  notes: string;
  role: RoleType;
};


export enum EngineerType {
  BACKEND = 'BACKEND',
  FRONTEND = 'FRONTEND',
  FULLSTACK = 'FULLSTACK',
}

export type Engineer = {
  departments: [Department.ENGINEERING] | [Department.ENGINEERING, Department.MARKETING | Department.OPERATIONS];
  engineerType: EngineerType;
  title: string[];
};

export type Marketer = {
  departments: [Department.MARKETING] | [Department.MARKETING, Department.ENGINEERING | Department.OPERATIONS];
  title: string[];
};

export enum OperationType {
  FINANCE = 'FINANCE',
  HUMAN_RESOURCES = 'HUMAN_RESOURCES',
}

type Operator = {
  departments: [Department.OPERATIONS] | [Department.OPERATIONS, Department.ENGINEERING | Department.MARKETING];
  operatorType: OperationType[];
  title: string[];
};

export type RoleType = Engineer | Marketer | Operator;

export type Consultancy = {
  __typename: 'Consultancy';
  upc: string;
  lead: Employee;
};

export type Cosmo = {
  __typename: 'Cosmo';
  upc: string;
  engineers: Employee[];
  lead: Employee;
};

export type SDK = {
  __typename: 'SDK';
  upc: string;
  engineers: Employee[];
  owner: Employee;
};

export type Product = Consultancy | Cosmo | SDK;

export type _Entity = Consultancy | Cosmo | Employee | SDK;

export type _Service = {
  sdl: string;
};