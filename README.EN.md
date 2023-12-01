# Install dependencies(Recommended use pnpm: https://pnpm.io/zh/installation)

npm i -g pnpm # Installed and can be ignored
pnpm i # or npm i

# Start

pnpm dev

````

### Build and Release

```shell
# Test Environment
pnpm build:test

# Github Environment
pnpm build:github

# Prod Environment
pnpm build
````

### Other

```shell
# eslint check
pnpm lint

# eslint check and fix
pnpm lint:fix

# Preview（Need to build first）
pnpm preview

# Commit（husky+commitlint）
pnpm cz
```
