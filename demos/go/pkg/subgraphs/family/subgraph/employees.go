package subgraph

import "github.com/wundergraph/cosmo-federation-demos/demos/go/pkg/subgraphs/family/subgraph/model"

var engaged = model.MaritalStatusEngaged
var married = model.MaritalStatusMarried

func String(s string) *string {
	return &s
}

var employees = []*model.Employee{
	{
		ID: 1,
		Details: &model.Details{
			Forename:      "Jens",
			Surname:       "Neuse",
			Middlename:    String(""),
			HasChildren:   true,
			MaritalStatus: &married,
			Nationality:   model.NationalityGerman,
			A:             "A",
		},
	},
	{
		ID: 2,
		Details: &model.Details{
			Forename:      "Dustin",
			Surname:       "Deus",
			Middlename:    String("Klaus"),
			HasChildren:   false,
			MaritalStatus: &engaged,
			Nationality:   model.NationalityGerman,
			A:             "A",
		},
	},
	{
		ID: 3,
		Details: &model.Details{
			Forename:      "Stefan",
			Surname:       "Avram",
			HasChildren:   false,
			Middlename:    String(""),
			MaritalStatus: &engaged,
			Nationality:   model.NationalityAmerican,
			Pets: []model.Pet{
				model.Alligator{
					Class:     model.ClassReptile,
					Gender:    model.GenderUnknown,
					Name:      "Snappy",
					Dangerous: "yes",
				},
			},
			A: "A",
		},
	},
	{
		ID: 4,
		Details: &model.Details{
			Forename:      "Björn",
			Surname:       "Schwenzer",
			HasChildren:   true,
			Middlename:    String("Volker"),
			MaritalStatus: &married,
			Nationality:   model.NationalityGerman,
			Pets: []model.Pet{
				model.Dog{
					Breed:  model.DogBreedGoldenRetriever,
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Abby",
				},
				model.Pony{
					Class:  model.ClassMammal,
					Gender: model.GenderMale,
					Name:   "Survivor",
				},
			},
			A: "A",
		},
	},
	{
		ID: 5,
		Details: &model.Details{
			Forename:      "Sergiy",
			Surname:       "Petrunin",
			HasChildren:   false,
			MaritalStatus: &engaged,
			Middlename:    String(""),
			Nationality:   model.NationalityUkrainian,
			Pets: []model.Pet{
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Blotch",
					Type:   model.CatTypeStreet,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderMale,
					Name:   "Grayone",
					Type:   model.CatTypeStreet,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderMale,
					Name:   "Rusty",
					Type:   model.CatTypeStreet,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Manya",
					Type:   model.CatTypeHome,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderMale,
					Name:   "Peach",
					Type:   model.CatTypeStreet,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderMale,
					Name:   "Panda",
					Type:   model.CatTypeHome,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Mommy",
					Type:   model.CatTypeStreet,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Terry",
					Type:   model.CatTypeHome,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Tilda",
					Type:   model.CatTypeHome,
				},
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderMale,
					Name:   "Vasya",
					Type:   model.CatTypeHome,
				},
			},
			A: "A",
		},
	},
	{
		ID: 7,
		Details: &model.Details{
			Forename:    "Suvij",
			Surname:     "Surya",
			Middlename:  String(""),
			HasChildren: false,
			Nationality: model.NationalityIndian,
			A:             "A",
		},
	},
	{
		ID: 8,
		Details: &model.Details{
			Forename:    "Nithin",
			Surname:     "Kumar",
			Middlename:  String(""),
			HasChildren: false,
			Nationality: model.NationalityIndian,
			A:             "A",
		},
	},
	{
		ID: 10,
		Details: &model.Details{
			Forename:    "Eelco",
			Surname:     "Wiersma",
			Middlename:  String(""),
			HasChildren: false,
			Nationality: model.NationalityDutch,
			Pets: []model.Pet{
				model.Mouse{
					Class:  model.ClassMammal,
					Gender: model.GenderUnknown,
					Name:   "Vanson",
				},
			},
			A:             "A",
		},
	},
	{
		ID: 11,
		Details: &model.Details{
			Forename:      "Alexandra",
			Surname:       "Neuse",
			Middlename:    String(""),
			HasChildren:   true,
			MaritalStatus: &married,
			Nationality:   model.NationalityGerman,
			A:             "A",
		},
	},
	{
		ID: 12,
		Details: &model.Details{
			Forename:      "David",
			Surname:       "Stutt",
			HasChildren:   false,
			MaritalStatus: &married,
			Nationality:   model.NationalityEnglish,
			Pets: []model.Pet{
				model.Cat{
					Class:  model.ClassMammal,
					Gender: model.GenderFemale,
					Name:   "Pepper",
					Type:   model.CatTypeHome,
				},
			},
			A:             "A",
		},
	},
}
