# UI Component Starter Template 

This is a starter template to build UI components using Vite, React 18, Storybook, TypeScript, TailwindCSS, eslint, and prettier. You can use this template to deploy your UI library to NPM.


## Description

This starter template provides you with the necessary tools to quickly build and test UI components. It includes:

- Vite: a fast build tooling for modern web development.
- React 18: the latest version of the popular JavaScript library for building user interfaces.
- Storybook: an open-source tool for developing UI components in isolation.
- TypeScript: a typed superset of JavaScript that adds type safety to your code.
- TailwindCSS: a utility-first CSS framework for rapidly building custom designs.
- Eslint: a pluggable and configurable linter tool for identifying and reporting on patterns in - JavaScript code.
- Prettier: an opinionated code formatter that ensures consistent formatting across your codebase.


## Getting Started
To get started with this starter template, simply clone the repository and run the following command to install the dependencies:
```bash
npm install
```

Once all package installed, you can run storybook:
```bash
npm run storybook
```

To build & bundle UI component library
```bash
npm run build
```

To build & bundle Storybook for deployment
```bash
npm run build-storybook
```

To run eslint
```bash 
npm run lint
```

## NPM Deployment
to deploy your UI library to NPM, you need to create a new NPM account and then create token for your account. You can follow this [guide](https://docs.npmjs.com/creating-and-viewing-access-tokens) to create a new token:


1. Go to https://www.npmjs.com/settings/USERNNAME/tokens in your web browser, where `USERNNAME` is replaced by your NPM username.
3. Click on the "Generate New Token" dropdown button and select "New Classic Token".
4. Enter your NPM account password when prompted.
5. Enter a description for the token (e.g. "GitHub Actions").
6. Choose the "Automation" scope for the token
6. Click the "Create Token" button at the bottom of the page.
7. Copy the generated token to your clipboard.

Now that you have an access token for NPM, follow these steps to add it to GitHub secrets:

1. Go to your GitHub repository and navigate to Settings > Secrets.
2. Click on "New repository secret" to create a new secret.
3. Give your secret a name `NPM_TOKEN` and paste the access token you generated in step 6 above into the "Value" field.
4. Click "Add secret" to save the secret.

Now you can deploy your UI library to NPM by simply creating a new release on GitHub. Then the script we wrote on `.github/workflows/publish.yaml` should take care of deploying your UI library to NPM.


## Usage
You can create new UI components under the `src/components` folder. Each component should have its own folder with an `index.tsx` file for the component implementation and a `stories.tsx` file for the Storybook stories.

## Contributing
Contributions to this starter template are welcome. Please follow the existing code style and submit a pull request with your changes.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
If you have any questions or comments about this starter template, please create an issue.