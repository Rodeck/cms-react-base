import { type SchemaTypeDefinition } from 'sanity'
import { listingType } from '../../../sanity/schemaTypes/listingType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [listingType],
}
