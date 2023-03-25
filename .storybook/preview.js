import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#000',
      },
      {
        name: 'light',
        value: '#fff',
      },
    ],
  },
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'theme-dark', color: '#000' },
      { name: 'light', class: 'theme-light', color: '#fff' }
    ],
  },
};
