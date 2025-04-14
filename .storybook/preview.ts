import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    // Intercetta automaticamente le funzioni che iniziano con "on"
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // Abilita i controlli con le props di tipo colore
        color: /(background|color)$/i,
        // Abilita i controlli per le props di tipo data
        date: /Date$/i,
      },
    },
  },
};

export default preview;