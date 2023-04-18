# Playwright V/S Cypress with Vite

## Comparison

| Feature | Playwright | Cypress |
| --- | --- | --- |
| Auto test generation | ✅ [Stable support with VS Code Extension](https://playwright.dev/docs/codegen#recording-a-test) | ⚠️ [Experimental Studio support](https://docs.cypress.io/guides/references/cypress-studio) |
| Visual Compression/Regression Testing | ✅ [Supports out of the box](https://playwright.dev/docs/test-snapshots) | ⚠️ [DIY support with external tools and libraries](https://docs.cypress.io/guides/tooling/visual-testing#Do-It-Yourself) |
| Video Recording | ✅ [Built-in](https://playwright.dev/docs/videos) | ✅ [Built-in](https://docs.cypress.io/guides/guides/screenshots-and-videos#Videos) |
| Custom Commands | ⚠️ [Based on custom selectors](https://playwright.dev/docs/extensibility) | ✅ [Built-in](https://docs.cypress.io/api/cypress-api/custom-commands) |
| Mock API Requests/Responses | ✅ [Built-in](https://playwright.dev/docs/mock) | ✅ [Built-in](https://docs.cypress.io/api/cypress-api/custom-commands) |
| Parallelization | ✅ [Uses worker threads - enabled by default](https://playwright.dev/docs/test-parallel) | 🛑 [Worse support - asks for Cypress Cloud CI](https://docs.cypress.io/guides/guides/parallelization) |
| UI Mode | ⚠️ [Experimental and Preview](https://playwright.dev/docs/release-notes#introducing-ui-mode-preview) | ✅ [Built-in](https://docs.cypress.io/guides/getting-started/opening-the-app) |
| Learning Curve | ⚠️ Little steep learning curve | ✅ Intuitive APIs and commands |
| Documentation | ⚠️ [Difficult to understand docs](https://playwright.dev/docs/intro) | ✅ [Easier docs](https://docs.cypress.io/guides/overview/why-cypress) |
| Speed | ✅ Very fast as compared since can run parallel | 🛑 Overall a slow experience with multiple tests |
| Flakyness | ✅ Better support to handle flakyness with waitUntil and retries | ⚠️ Multiple reporting of cypress flakyness with frameworks |

## Compare by running Playwright and Cypress

This repo contains a vite app, you can compare both playwright and cypress tests by running the following scripts and evaluating the time differences: `npm run test:playwright` and `npm run test:cypress`. You can clearly see some difference in the time taken to run both the tests, even with only test suite to be run. With multiple tests running in parallel, playwright will have an upper hand with speed and performance.
