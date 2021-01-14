# koa-typescript-starter-kit

yet another boilerplate

## Setup

`node`: 14.x (lts version)

External tools:

- `editorconfig`
- `prettier`
- `eslint`

## Runnable npm scripts

See [`package.json`](./package.json) for runnable scripts.

- `dev`: run a dev server using `ts-node`
- `watch`: watch file changes and run a dev server using `ts-node`
- `test`: run test cases using `jest`
- `build`: build 

**Caveats using absolute imports**:

`tsc` cannot tranform absolute import paths during compile process, when `baseUrl` and `paths` are configured in `tsconfig.json`.

[`ts-patch`](https://github.com/nonara/ts-patch) and [typescript-transform-paths](https://github.com/LeDDGroup/typescript-transform-paths) are used in this project.
You need to run `npx ts-patch install` once after `npm i` (just once, it patches the typescript toolchain.).

## About

[tannineo](https://github.com/tannineo)
