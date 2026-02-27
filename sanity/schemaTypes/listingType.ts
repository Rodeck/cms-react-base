import {defineField, defineType} from 'sanity'

export const listingType = defineType({
  name: 'listing',
  title: 'House Listing',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Listing Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'status',
      title: 'Listing Status',
      type: 'string',
      options: {
        list: [
          {title: 'For Sale', value: 'for-sale'},
          {title: 'Sold', value: 'sold'},
          {title: 'Pending', value: 'pending'},
          {title: 'Reserved', value: 'reserved'},
        ],
        layout: 'radio',
      },
      initialValue: 'for-sale',
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          {title: 'House', value: 'house'},
          {title: 'Apartment', value: 'apartment'},
          {title: 'Townhouse', value: 'townhouse'},
          {title: 'Land', value: 'land'},
          {title: 'Commercial', value: 'commercial'},
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Street Address',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'City',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'postCode',
          title: 'Post Code',
          type: 'string',
        }),
        defineField({
          name: 'region',
          title: 'Region / State',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Country',
          type: 'string',
          initialValue: 'Poland',
        }),
      ],
    }),
    defineField({
      name: 'details',
      title: 'Property Details',
      type: 'object',
      fields: [
        defineField({
          name: 'bedrooms',
          title: 'Bedrooms',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'bathrooms',
          title: 'Bathrooms',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'area',
          title: 'Area (m²)',
          type: 'number',
          validation: (rule) => rule.positive(),
        }),
        defineField({
          name: 'lotSize',
          title: 'Lot Size (m²)',
          type: 'number',
          validation: (rule) => rule.positive(),
        }),
        defineField({
          name: 'yearBuilt',
          title: 'Year Built',
          type: 'number',
        }),
        defineField({
          name: 'floors',
          title: 'Number of Floors',
          type: 'number',
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Garage', value: 'garage'},
          {title: 'Garden', value: 'garden'},
          {title: 'Balcony', value: 'balcony'},
          {title: 'Terrace', value: 'terrace'},
          {title: 'Basement', value: 'basement'},
          {title: 'Air Conditioning', value: 'air-conditioning'},
          {title: 'Central Heating', value: 'central-heating'},
          {title: 'Fireplace', value: 'fireplace'},
          {title: 'Pool', value: 'pool'},
          {title: 'Security System', value: 'security-system'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      city: 'location.city',
      price: 'price',
      media: 'mainImage',
    },
    prepare({title, city, price, media}) {
      return {
        title: title,
        subtitle: `${city || 'No location'} - ${price ? `${price.toLocaleString()} PLN` : 'No price'}`,
        media: media,
      }
    },
  },
})