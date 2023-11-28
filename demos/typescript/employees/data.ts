import { Consultancy, Cosmo, Country, Department, Employee, EngineerType, OperationType, Product, SDK } from './types';

export const employees: Employee[] = [
  {
    __typename: 'Employee',
    id: 1,
    details: {
      forename: 'Jens',
      surname: 'Neuse',
      location: Country.GERMANY,
    },
    role: {
      departments: [Department.ENGINEERING, Department.MARKETING],
      engineerType: EngineerType.BACKEND,
      title: ['Founder', 'CEO'],
    },
    notes: 'Jens notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 2,
    details: {
      forename: 'Dustin',
      surname: 'Deus',
      location: Country.GERMANY,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.FULLSTACK,
      title: ['Co-founder', 'Tech Lead'],
    },
    notes: 'Dustin notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 3,
    details: {
      forename: 'Stefan',
      surname: 'Avram',
      location: Country.AMERICA,

    },
    role: {
      departments: [Department.MARKETING],
      title: ['Co-founder', 'Head of Growth'],
    },
    notes: 'Stefan notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 4,
    details: {
      forename: 'Björn',
      surname: 'Schwenzer',
      location: Country.GERMANY,
    },
    role: {
      departments: [Department.OPERATIONS, Department.MARKETING],
      operatorType: [OperationType.HUMAN_RESOURCES, OperationType.FINANCE],
      title: ['Co-founder', 'COO'],
    },
    notes: 'Björn notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 5,
    details: {
      forename: 'Sergiy',
      surname: 'Petrunin',
      location: Country.UKRAINE,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.BACKEND,
      title: ['Senior GO Engineer'],
    },
    notes: 'Sergiy notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 7,
    details: {
      forename: 'Suvij',
      surname: 'Surya',
      location: Country.INDIA,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.FULLSTACK,
      title: ['Software Engineer'],
    },
    notes: 'Suvij notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 8,
    details: {
      forename: 'Nithin',
      surname: 'Kumar',
      location: Country.INDIA,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.FULLSTACK,
      title: ['Software Engineer'],
    },
    notes: 'Nithin notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 9,
    details: {
      forename: 'Alberto',
      surname: 'Garcia Hierro',
      location: Country.PORTUGAL,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.BACKEND,
      title: ['Senior Backend Engineer'],
    },
    notes: 'Alberto notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 10,
    details: {
      forename: 'Eelco',
      surname: 'Wiersma',
      location: Country.NETHERLANDS,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.FRONTEND,
      title: ['Senior Frontend Engineer'],
    },
    notes: 'Eelco notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 11,
    details: {
      forename: 'Alexandra',
      surname: 'Neuse',
      location: Country.GERMANY,
    },
    role: {
      departments: [Department.OPERATIONS],
      operatorType: [OperationType.FINANCE],
      title: ['Accounting & Finance'],
    },
    notes: 'Alexandra notes resolved by employees',
  },
  {
    __typename: 'Employee',
    id: 12,
    details: {
      forename: 'David',
      surname: 'Stutt',
      location: Country.ENGLAND,
    },
    role: {
      departments: [Department.ENGINEERING],
      engineerType: EngineerType.FULLSTACK,
      title: ['Software Engineer'],
    },
    notes: 'David notes resolved by employees',
  },
];

export const engineers = employees.filter(employee => Department.ENGINEERING in employee.role.departments);
export const marketers = employees.filter(employee => Department.MARKETING in employee.role.departments);
export const operators = employees.filter(employee => Department.OPERATIONS in employee.role.departments);

export const consultancy: Consultancy = {
  __typename: 'Consultancy',
  upc: 'consultancy',
  lead: employees[0],
};

export const cosmo: Cosmo = {
  __typename: 'Cosmo',
  upc: 'cosmo',
  engineers,
  lead: employees[1],
};

export const sdk: SDK = {
  __typename: 'SDK',
  upc: 'sdk',
  engineers,
  owner: employees[0],
};

export const products: Product[] = [consultancy, cosmo, sdk];