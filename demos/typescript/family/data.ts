import { CatType, Class, DogBreed, Employee, Gender, MaritalStatus, Nationality } from './types';

export const employees: Employee[] = [
  {
    __typename: 'Employee',
    id: 1,
    details: {
      forename: 'Jens',
      surname: 'Neuse',
      hasChildren: true,
      maritalStatus: MaritalStatus.MARRIED,
      nationality: Nationality.GERMAN,
    },
  },
  {
    __typename: 'Employee',
    id: 2,
    details: {
      forename: 'Dustin',
      surname: 'Deus',
      hasChildren: false,
      maritalStatus: MaritalStatus.ENGAGED,
      nationality: Nationality.GERMAN,
    },
  },
  {
    __typename: 'Employee',
    id: 3,
    details: {
      forename: 'Stefan',
      surname: 'Avram',
      hasChildren: false,
      maritalStatus: MaritalStatus.ENGAGED,
      nationality: Nationality.AMERICAN,
      pets: [
        {
          __typename: 'Alligator',
          'class': Class.REPTILE,
          gender: Gender.UNKNOWN,
          name: 'Snappy',
          dangerous: 'yes',
        },
      ],
    },
  },
  {
    __typename: 'Employee',
    id: 4,
    details: {
      forename: 'Björn',
      surname: 'Schwenzer',
      hasChildren: true,
      maritalStatus: MaritalStatus.MARRIED,
      nationality: Nationality.GERMAN,
      pets: [
        {
          __typename: 'Dog',
          'class': Class.MAMMAL,
          breed: DogBreed.GOLDEN_RETRIEVER,
          gender: Gender.FEMALE,
          name: 'Abby',
        },
        {
          __typename: 'Pony',
          'class': Class.MAMMAL,
          gender: Gender.MALE,
          name: 'Survivor',
        },
      ],
    },
  },
  {
    __typename: 'Employee',
    id: 5,
    details: {
      forename: 'Sergiy',
      surname: 'Petrunin',
      hasChildren: false,
      maritalStatus: MaritalStatus.ENGAGED,
      nationality: Nationality.UKRAINIAN,
      pets: [
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Blotch',
          type: CatType.STREET,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Grayone',
          type: CatType.STREET,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Rusty',
          type: CatType.STREET,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Manya',
          type: CatType.HOME,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Peach',
          type: CatType.STREET,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Panda',
          type: CatType.HOME,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'mommy',
          type: CatType.STREET,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Terry',
          type: CatType.HOME,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Tilda',
          type: CatType.HOME,
        },
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Vasya',
          type: CatType.HOME,
        },
      ],
    },
  },
  {
    __typename: 'Employee',
    id: 7,
    details: {
      forename: 'Suvij',
      surname: 'Surya',
      hasChildren: false,
      nationality: Nationality.INDIAN,
    },
  },
  {
    __typename: 'Employee',
    id: 8,
    details: {
      forename: 'Nithin',
      surname: 'Kumar',
      hasChildren: false,
      nationality: Nationality.INDIAN,
    },
  },
  {
    __typename: 'Employee',
    id: 9,
    details: {
      forename: 'Alberto',
      surname: 'Garcia Hierro',
      hasChildren: true,
      maritalStatus: MaritalStatus.MARRIED,
      nationality: Nationality.SPANISH,
      pets: [
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.MALE,
          name: 'Thor',
          type: CatType.HOME,
        },
      ],
    },
  },
  {
    __typename: 'Employee',
    id: 10,
    details: {
      forename: 'Eelco',
      surname: 'Wiersma',
      hasChildren: false,
      nationality: Nationality.DUTCH,
      pets: [
        {
          __typename: 'Mouse',
          'class': Class.MAMMAL,
          gender: Gender.UNKNOWN,
          name: 'Vanson',
        },
      ],
    },
  },
  {
    __typename: 'Employee',
    id: 11,
    details: {
      forename: 'Alexandra',
      surname: 'Neuse',
      hasChildren: true,
      maritalStatus: MaritalStatus.MARRIED,
      nationality: Nationality.GERMAN,
    },
  },
  {
    __typename: 'Employee',
    id: 12,
    details: {
      forename: 'David',
      surname: 'Stutt',
      hasChildren: false,
      maritalStatus: MaritalStatus.MARRIED,
      nationality: Nationality.ENGLISH,
      pets: [
        {
          __typename: 'Cat',
          'class': Class.MAMMAL,
          gender: Gender.FEMALE,
          name: 'Pepper',
          type: CatType.HOME,
        },
      ],
    },
  },
];