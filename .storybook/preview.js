export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Formación',
               ['Index', 'Storybook', 
                              [`Primeros pasos`,'Conocimientos - Basicos',  
                                                        ['Conceptos','Componentes.stories.tsx|jsx']
                              ]
                ]
              ]},
  },
}