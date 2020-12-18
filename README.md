# Lerna-Rollup-Typescript Starter Config

A minimal config that provides configuration for a multi-package repository with the following features:

- Bundled with Rollup
- TypeScript support
- ESLint (linting, uses the `standard` config with a few extras)
- Jest (unit tests)
- Prettier (opinionated code formatting)
- Individual package configs extend base configs

## Installation

Clone the repo:

```bash
git clone git@github.com:andyjessop/lerna-rollup-typescript.git
```

Install dependencies

```bash
cd lerna-rollup-typescript
npm i
```

Get started by linking and building the packages:

```bash
./node_modules/.bin/lerna bootstrap
./node_modules/.bin/lerna build
```

There's not much else to write here. The rest is up to the docs at:

- [Lerna](https://github.com/lerna/lerna)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Prettier](https://prettier.io/)
