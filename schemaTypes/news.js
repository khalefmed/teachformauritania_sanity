import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [ 
    defineField({
      name: 'news_headline_en',
      title: 'New headline in English',
      type: 'string',
    }),
    defineField({
      name: 'news_headline_fr',
      title: 'New headline in frensh',
      type: 'string',
    }),
    defineField({
      name: 'news_headline_ar',
      title: 'New headline in Arab',
      type: 'string',
    }),
    
    defineField({
      name: 'news_script_en',
      title: 'News Script in English',
      type: 'text',
    }),
    defineField({
      name: 'news_script_fr',
      title: 'News Script in Frensh',
      type: 'text',
    }),
    defineField({
      name: 'news_script_ar',
      title: 'News Script in Arab',
      type: 'text',
    }),

    defineField({
      name: 'news_image',
      title: 'News image ',
      type: 'image',
    }),

    defineField({
      name: 'news_date',
      title: 'News date ',
      type: 'date',
    }),
  ],
})
