import { Country, Employee, ExerciseType, GameGenre, ProgrammingLanguage, SDK } from './types';

export const employees: Employee[] = [
  {
    __typename: 'Employee',
    id: 1,
    hobbies: [
      {
        __typename: 'Exercise',
        category: ExerciseType.SPORT,
      },
      {
        __typename: 'Gaming',
        genres: [GameGenre.FPS],
        name: 'Counter Strike',
        yearsOfExperience: 20.0,
      },
      {
        __typename: 'Other',
        name: 'WunderGraph',
      },
      {
        __typename: 'Programming',
        languages: [ProgrammingLanguage.GO, ProgrammingLanguage.TYPESCRIPT],
      },
      {
        __typename: 'Travelling',
        countriesLived: [Country.ENGLAND, Country.GERMANY],
      }
    ],
  },
  {
    __typename: 'Employee',
    id: 2,
    hobbies: [
      {
        __typename: 'Exercise',
        category: ExerciseType.STRENGTH_TRAINING,
      },
      {
        __typename: 'Gaming',
        genres: [GameGenre.FPS],
        name: 'Counter Strike',
        yearsOfExperience: 0.5,
      },
      {
        __typename: 'Programming',
        languages: [ProgrammingLanguage.GO, ProgrammingLanguage.RUST],
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 3,
    hobbies: [
      {
        __typename: 'Exercise',
        category: ExerciseType.HIKING,
      },
      {
        __typename: 'Exercise',
        category: ExerciseType.SPORT,
      },
      {
        __typename: 'Other',
        name: 'Reading',
      },
      {
        __typename: 'Travelling',
        countriesLived: [Country.AMERICA, Country.SERBIA],
      }
    ],
  },
  {
    __typename: 'Employee',
    id: 4,
    hobbies: [
      {
        __typename: 'Exercise',
        category: ExerciseType.HIKING,
      },
      {
        __typename: 'Flying',
        planeModels: [
          'Aquila AT01', 'Cessna C172', 'Cessna C206', 'Cirrus SR20', 'Cirrus SR22',
          'Diamond DA40', 'Diamond HK36', 'Diamond DA20', 'Piper Cub', 'Pitts Special', 'Robin DR400',
        ],
        yearsOfExperience: 20.0,
      },
      {
        __typename: 'Travelling',
        countriesLived: [Country.AMERICA, Country.GERMANY],
      }
    ],
  },
  {
    __typename: 'Employee',
    id: 5,
    hobbies: [
      {
        __typename: 'Other',
        name: 'Building a house',
      },
      {
        __typename: 'Other',
        name: 'Formula 1',
      },
      {
        __typename: 'Other',
        name: 'Raising cats',
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 7,
    hobbies: [
      {
        __typename: 'Gaming',
        genres: [GameGenre.BOARD],
        name: 'Chess',
        yearsOfExperience: 9.5,
      },
      {
        __typename: 'Other',
        name: 'Watching anime',
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 8,
    hobbies: [
      {
        __typename: 'Exercise',
        category: ExerciseType.STRENGTH_TRAINING,
      },
      {
        __typename: 'Gaming',
        genres: [GameGenre.ADVENTURE, GameGenre.RPG, GameGenre.SIMULATION, GameGenre.STRATEGY],
        name: 'Miscellaneous',
        yearsOfExperience: 17.0,
      },
      {
        __typename: 'Other',
        name: 'Watching anime',
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 9,
    hobbies: [
      {
        __typename: 'Exercise',
        category: ExerciseType.CALISTHENICS,
      },
      {
        __typename: 'Gaming',
        genres: [GameGenre.BOARD],
        name: 'Chess',
        yearsOfExperience: 2.0,
      },
      {
        __typename: 'Programming',
        languages: [ProgrammingLanguage.RUST],
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 10,
    hobbies: [
      {
        __typename: 'Programming',
        languages: [ProgrammingLanguage.TYPESCRIPT],
      },
      {
        __typename: 'Exercise',
        category: ExerciseType.CALISTHENICS,
      },
      {
        __typename: 'Exercise',
        category: ExerciseType.HIKING,
      },
      {
        __typename: 'Exercise',
        category: ExerciseType.STRENGTH_TRAINING,
      },
      {
        __typename: 'Other',
        name: 'saas-ui'
      },
      {
        __typename: 'Travelling',
        countriesLived: [
          Country.GERMANY, Country.INDONESIA, Country.NETHERLANDS, Country.PORTUGAL, Country.SPAIN, Country.THAILAND,
        ],
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 11,
    hobbies: [
      {
        __typename: 'Other',
        name: 'Spending time with the family',
      },
    ],
  },
  {
    __typename: 'Employee',
    id: 12,
    hobbies: [
      {
        __typename: 'Programming',
        languages: [
          ProgrammingLanguage.CSHARP, ProgrammingLanguage.GO, ProgrammingLanguage.RUST, ProgrammingLanguage.TYPESCRIPT,
        ],
      },
      {
        __typename: 'Exercise',
        category: ExerciseType.STRENGTH_TRAINING,
      },
      {
        __typename: 'Gaming',
        genres: [
          GameGenre.ADVENTURE, GameGenre.BOARD, GameGenre.CARD, GameGenre.ROGUELITE,
          GameGenre.RPG, GameGenre.SIMULATION, GameGenre.STRATEGY,
        ],
        name: 'Miscellaneous',
        yearsOfExperience: 25.5,
      },
      {
        __typename: 'Travelling',
        countriesLived: [Country.ENGLAND, Country.KOREA, Country.TAIWAN],
      },
    ],
  },
];

export const sdk: SDK = {
  __typename: 'SDK',
  upc: 'sdk',
  clientLanguages: [ProgrammingLanguage.RUST, ProgrammingLanguage.TYPESCRIPT],
};