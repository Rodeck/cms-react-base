import {defineType, defineField} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const realizacjaType = defineType({
  name: 'realizacja',
  title: 'Realizacje',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł',
      type: 'string',
      validation: (rule) => rule.required().error('Tytuł jest wymagany'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required().error('Slug jest wymagany'),
    }),
    defineField({
      name: 'images',
      title: 'Zdjęcia',
      description: 'Pierwsze zdjęcie będzie wyświetlane na stronie głównej realizacji',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Tekst alternatywny',
              type: 'string',
              validation: (rule) =>
                rule.required().warning('Tekst alternatywny jest ważny dla SEO i dostępności'),
            }),
          ],
        },
      ],
      validation: (rule) => rule.required().min(1).error('Dodaj przynajmniej jedno zdjęcie'),
    }),
    defineField({
      name: 'projectType',
      title: 'Typ projektu',
      type: 'string',
      options: {
        list: [
          {title: 'Budowa', value: 'budowa'},
          {title: 'Remont', value: 'remont'},
          {title: 'Wykończenia', value: 'wykonczenia'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error('Typ projektu jest wymagany'),
    }),
    defineField({
      name: 'year',
      title: 'Rok realizacji',
      type: 'number',
      validation: (rule) =>
        rule
          .required()
          .min(2000)
          .max(new Date().getFullYear())
          .error('Podaj prawidłowy rok realizacji'),
    }),
    defineField({
      name: 'squareMeters',
      title: 'Metraż (m²)',
      type: 'number',
      description: 'Opcjonalne - powierzchnia projektu w metrach kwadratowych',
      validation: (rule) => rule.positive().warning('Metraż powinien być liczbą dodatnią'),
    }),
    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().error('Opis jest wymagany'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      projectType: 'projectType',
      year: 'year',
      images: 'images',
    },
    prepare({title, projectType, year, images}) {
      const typeLabels: Record<string, string> = {
        budowa: 'Budowa',
        remont: 'Remont',
        wykonczenia: 'Wykończenia',
      }
      return {
        title,
        subtitle: `${typeLabels[projectType] || projectType} • ${year}`,
        media: images?.[0],
      }
    },
  },
  orderings: [
    {
      title: 'Rok (najnowsze)',
      name: 'yearDesc',
      by: [{field: 'year', direction: 'desc'}],
    },
    {
      title: 'Rok (najstarsze)',
      name: 'yearAsc',
      by: [{field: 'year', direction: 'asc'}],
    },
    {
      title: 'Typ projektu',
      name: 'projectType',
      by: [{field: 'projectType', direction: 'asc'}],
    },
  ],
})
