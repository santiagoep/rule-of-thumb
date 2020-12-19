# Zemoga UI Test

Following the instructions in this [repository](https://github.com/zemoga/ui-test), develop the proposed ui test. The demo can be found at: ___URL___

For personal and work reasons I was only able to carry out the test on days 16, 17 and 18 after 10pm, for which I had a huge time limitation. However, the result was quite successful.

In the code leave two ways of handling the data, the first is through getServerSideProps where request to a CMS could go, on the other hand, to be able to persist the votes without having a back or database, I used redux-persist.

# New Features!
If I had had a little more time I would have liked to implement:
- E2E with Cypress.
- Unit Testing with JEST
- 100% of coverage.
- Create an api with data mock to simulate a cms.
- Create generic components such as buttons and fonts to reuse them in the code.

Yes, i can and know do it.

### Tech

* __NextJS:__ SSR / Static Site Generator of React. It helps a lot with seo and performance.
* __Redux / Reduxsauce / Redux-Persist:__ To manage the store
* __Styled-Components:__ To manage the component Styles
* __eslint / prettier:__ To maintain defined programming standards. In conjunction with a pre-commit
* __HTML / CSS / JS:__ The base of the web

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd zemoga-ui-test
$ yarn
$ yarn dev
```

For production environments...

```sh
$ yarn
$ yarn build
$ yarn start
```



License
----

MIT

**Free Software, Hell Yeah!**
