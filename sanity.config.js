import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'teachformauritania',

  projectId: 'w7grvek7',
  dataset: 'teachformauritania',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
