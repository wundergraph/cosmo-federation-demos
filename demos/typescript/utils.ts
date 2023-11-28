export const baseSchema = `
  directive @override(from: String!) on FIELD_DEFINITION

  directive @key(fields: openfed_FieldSet!, resolvable: Boolean = true) repeatable on OBJECT
  
  directive @shareable on FIELD_DEFINITION | OBJECT
  
  scalar openfed_FieldSet
`;