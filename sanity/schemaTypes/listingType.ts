import {defineField, defineType} from 'sanity'

export const listingType = defineType({
  name: 'listing',
  title: 'Ogłoszenie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł ogłoszenia',
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
      title: 'Cena',
      type: 'number',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Na sprzedaż', value: 'for-sale'},
          {title: 'Sprzedany', value: 'sold'},
          {title: 'W trakcie', value: 'pending'},
          {title: 'Rezerwacja', value: 'reserved'},
        ],
        layout: 'radio',
      },
      initialValue: 'for-sale',
    }),
    defineField({
      name: 'propertyType',
      title: 'Typ nieruchomości',
      type: 'string',
      options: {
        list: [
          {title: 'Dom', value: 'house'},
          {title: 'Mieszkanie', value: 'apartment'},
          {title: 'Bliźniak', value: 'townhouse'},
          {title: 'Działka', value: 'land'},
          {title: 'Komercyjny', value: 'commercial'},
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Lokalizacja',
      type: 'object',
      fields: [
        defineField({
          name: 'street',
          title: 'Ulica',
          type: 'string',
        }),
        defineField({
          name: 'city',
          title: 'Miasto',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'postCode',
          title: 'Kod pocztowy',
          type: 'string',
        }),
        defineField({
          name: 'region',
          title: 'Województwo',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Kraj',
          type: 'string',
          initialValue: 'Poland',
        }),
      ],
    }),
    defineField({
      name: 'details',
      title: 'Szczegóły nieruchomości',
      type: 'object',
      fields: [
        defineField({
          name: 'bedrooms',
          title: 'Pokoje',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'bathrooms',
          title: 'Łazienki',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'area',
          title: 'Powierzchnia (m²)',
          type: 'number',
          validation: (rule) => rule.positive(),
        }),
        defineField({
          name: 'lotSize',
          title: 'Powierzchnia działki (m²)',
          type: 'number',
          validation: (rule) => rule.positive(),
        }),
        defineField({
          name: 'yearBuilt',
          title: 'Rok budowy',
          type: 'number',
        }),
        defineField({
          name: 'floors',
          title: 'Liczba pięter',
          type: 'number',
          validation: (rule) => rule.min(1),
        }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Udogodnienia',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Garaż', value: 'garage'},
          {title: 'Ogród', value: 'garden'},
          {title: 'Balkon', value: 'balcony'},
          {title: 'Taras', value: 'terrace'},
          {title: 'Piwnica', value: 'basement'},
          {title: 'Klimatyzacja', value: 'air-conditioning'},
          {title: 'Ogrzewanie centralne', value: 'central-heating'},
          {title: 'Kominek', value: 'fireplace'},
          {title: 'System alarmowy', value: 'security-system'},
          {title: 'Pompa ciepła', value: 'heat-pump'},
          {title: 'Ogrzewanie podłogowe', value: 'floor-heating'},
          {title: 'Zmiękczacz wody', value: 'water-softener'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria zdjęć',
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
      name: 'videos',
      title: 'Filmy',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'video',
          title: 'Film',
          fields: [
            defineField({
              name: 'title',
              title: 'Tytuł filmu',
              type: 'string',
            }),
            defineField({
              name: 'file',
              title: 'Plik wideo',
              type: 'file',
              options: {
                accept: 'video/*',
              },
              description: 'Prześlij plik wideo lub podaj link do YouTube poniżej',
            }),
            defineField({
              name: 'youtubeUrl',
              title: 'Link do YouTube',
              type: 'url',
              description: 'Np. https://www.youtube.com/watch?v=... lub https://youtu.be/...',
              validation: (rule) =>
                rule.uri({scheme: ['https']}).custom((url) => {
                  if (!url) return true
                  if (
                    url.includes('youtube.com/watch') ||
                    url.includes('youtu.be/') ||
                    url.includes('youtube.com/embed/')
                  ) {
                    return true
                  }
                  return 'Podaj prawidłowy link do YouTube'
                }),
            }),
          ],
          validation: (rule) =>
            rule.custom((video) => {
              if (!video) return true
              const v = video as {file?: unknown; youtubeUrl?: string}
              if (!v.file && !v.youtubeUrl) {
                return 'Dodaj plik wideo lub link do YouTube'
              }
              return true
            }),
          preview: {
            select: {title: 'title', youtubeUrl: 'youtubeUrl'},
            prepare({title, youtubeUrl}) {
              return {
                title: title || 'Film',
                subtitle: youtubeUrl ? 'YouTube' : 'Plik wideo',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publikacji',
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