# Contributing

Flaregun docs are built using [Docusaurus 2](https://docusaurus.io/) and are written in MDX.

## Setup requirements

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/getting-started)

## Steps for contributing

We use the [fork-and-branch git workflow](https://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow/).

- Fork the repo and clone it:
  ```bash
  git clone https://github.com/<your-username>/graphql-engine
  ```
- Move to the `docs` folder via the command line and checkout to a new branch:
  ```bash
  cd docs
  git checkout -b <new-branch-name>
  ```
- Install dependencies:
  ```
  yarn install
  ```
- For development, live reload and auto build while you're editing and saving files:
  ```bash
  yarn start
  ```
- Make the required changes.
- (Optional) Build docs to produce build files and verify:

  ```bash
  yarn build
  ```

  - The generated docs are in `build`.
  - View the built files by running a webserver:
    ```bash
    yarn serve
    ```

- Commit the changes. Follow the common guidelines for commit messages at the [main contributing guide](../CONTRIBUTING.md#common-guidelines).
- Push the changes to your fork and submit a pull request.

### Changelog

In order for all the checks to pass on GitHub, it's required to do one of the following:

- Make an entry to the `CHANGELOG.md` file (under "Next release") to describe the change from a user's perspective.

- Add the `no-changelog-required` label.

For docs, a changelog entry is required for the following:

- Entire new docs pages
- Considerable changes in the overall structure

For small changes (such as fixes, adding examples, UI changes etc.), the `no-changelog-required` label will suffice.

## Some guidelines while adding docs

### Style guide

Please follow our [guide on how to write docs pages](https://github.com/hasura/graphql-engine/wiki/How-to-write-docs-pages) in order to keep the structure and style of our docs consistent.

[Page Structure](./wiki/page-structure.mdx)

### Pre-commit checks

- Just before committing your changes, delete your local `build` folder completely and then build docs again. Scan the output and look for any syntax warnings (e.g. title underline too short, could not lex literal block, etc.).
  Ideally there should not be any syntax warnings that are being thrown.

## Notes

- Docs are currently deployed manually. Changes will not reflect immediately after a PR gets merged.
- The search is powered by [Algolia](https://www.algolia.com/) and is updated everyday. Your local changes
  will not be reflected in search results.
