export enum MaritalStatus {
  ENGAGED = 'ENGAGED',
  MARRIED = 'MARRIED',
}

export enum Nationality {
  AMERICAN = 'AMERICAN',
  DUTCH = 'DUTCH',
  ENGLISH = 'ENGLISH',
  GERMAN = 'GERMAN',
  INDIAN = 'INDIAN',
  SPANISH = 'SPANISH',
  UKRAINIAN = 'UKRAINIAN',
}

type NestedSearchInput = {
  maritalStatus?: MaritalStatus;
  hasChildren?: boolean;
};

export type SearchInput = {
  hasPets?: boolean;
  nationality?: Nationality;
  nested?: NestedSearchInput;
}


export enum Class {
  MAMMAL = 'MAMMAL',
  REPTILE = 'REPTILE',
}

export enum CatType {
  HOME = 'HOME',
  STREET = 'STREET',
}

export enum DogBreed {
  GOLDEN_RETRIEVER = 'GOLDEN_RETRIEVER',
  POODLE = 'POODLE',
  ROTTWEILER = 'ROTTWEILER',
  YORKSHIRE_TERRIER = 'YORKSHIRE_TERRIER',
}

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
  UNKNOWN = 'UNKNOWN',
}

type Alligator = {
  __typename: 'Alligator';
  class: Class.REPTILE;
  dangerous: string;
  gender: Gender;
  name: string;
};

type Cat = {
  __typename: 'Cat',
  class: Class.MAMMAL;
  gender: Gender,
  name: string;
  type: CatType;
};

type Dog = {
  __typename: 'Dog',
  breed: DogBreed;
  class: Class.MAMMAL;
  gender: Gender;
  name: string;
};

type Mouse = {
  __typename: 'Mouse',
  class: Class.MAMMAL;
  gender: Gender;
  name: string;
};

type Pony = {
  __typename: 'Pony',
  class: Class.MAMMAL;
  gender: Gender;
  name: string;
};

export type Pet = Alligator | Cat | Dog | Mouse | Pony;

type Details = {
  forename: string;
  surname: string;
  hasChildren: boolean;
  maritalStatus?: MaritalStatus;
  nationality: Nationality;
  pets?: Pet[];
};

export type Employee = {
  __typename: 'Employee';
  id: number;
  details: Details;
};

export type _Service = {
  sdl: string;
};