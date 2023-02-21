This is a small project to demonstrate the [Mock Service Worker](https://mswjs.io/).

It is a small Vue3 / Vite / TypeScript app which just makes a call to a public API
and displays the result.

For testing, [Vitest](https://vitest.dev) with [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/)
instead of [Vue Test Utils](https://test-utils.vuejs.org) is used.

On a development machine, the API call can be mocked via msw.

I've used [smoke](https://github.com/sinedied/smoke) in the past and want to try msw as an alternative.

# Setup

```bash
npm run install
```

# Run in development mode

```bash
npm run dev
```

# Run tests via vitest

```bash
npm run test
```

# Lint sources via eslint

```bash
npm run lint
```

# Build for production

```bash
npm run build
```

# Preview production build on a local machine

```bash
npm run preview
```

# Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
