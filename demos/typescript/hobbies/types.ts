export enum Country {
  AMERICA = 'AMERICA',
  ENGLAND = 'ENGLAND',
  GERMANY = 'GERMANY',
  INDONESIA = 'INDONESIA',
  KOREA = 'KOREA',
  NETHERLANDS = 'NETHERLANDS',
  PORTUGAL = 'PORTUGAL',
  SERBIA = 'SERBIA',
  SPAIN = 'SPAIN',
  TAIWAN = 'TAIWAN',
  THAILAND = 'THAILAND',
}

export enum ExerciseType {
  CALISTHENICS = 'CALISTHENICS',
  HIKING = 'HIKING',
  SPORT = 'SPORT',
  STRENGTH_TRAINING = 'STRENGTH_TRAINING',
}

export enum GameGenre {
  ADVENTURE = 'ADVENTURE',
  BOARD = 'BOARD',
  CARD = 'CARD',
  FPS = 'FPS',
  RPG = 'RPG',
  ROGUELITE = 'ROGUELITE',
  SIMULATION = 'SIMULATION',
  STRATEGY = 'STRATEGY',
}

export enum ProgrammingLanguage {
  CSHARP = 'CSHARP',
  GO = 'GO',
  RUST = 'RUST',
  TYPESCRIPT = 'TYPESCRIPT',
}

export type Exercise = {
  __typename: 'Exercise';
  category: ExerciseType;
};

type Flying = {
  __typename: 'Flying';
  planeModels: string[];
  yearsOfExperience: number;
};

type Gaming = {
  __typename: 'Gaming';
  genres: GameGenre[];
  name: string;
  yearsOfExperience: number;
};

type Programming = {
  __typename: 'Programming';
  languages: ProgrammingLanguage[];
};

type Travelling = {
  __typename: 'Travelling';
  countriesLived: Country[];
};

type Other = {
  __typename: 'Other';
  name: string;
};

export type Hobby = Exercise | Flying | Gaming | Other | Programming | Travelling;

export type Employee = {
  __typename: 'Employee';
  id: number;
  hobbies: Hobby[];
};

export type SDK = {
  __typename: 'SDK';
  upc: string;
  clientLanguages: ProgrammingLanguage[];
};

export type _Entity = Employee | SDK;

export type _Service = {
  sdl: string;
};