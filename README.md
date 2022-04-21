# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Setup

> You must have a recent version of Node.js (14+) installed. You may use [Volta](https://github.com/volta-cli/volta), a Node version manager, to install the latest version of Node and `npm`, which is a package manager that is included with `node`'s installation.

```sh
$ curl https://get.volta.sh | bash
$ volta install node
```

### Installation

Finally, you will need to install the Node.js dependencies for this project using npm or another package manager:

```sh
$ npm install
```

### Local Development

```sh
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Our docs are deployed using [Cloudflare Pages](https://pages.cloudflare.com).
Every commit pushed to `main` branch will automatically deploy to [developers.minekube.com](https://developers.minekube.com),
and any pull requests opened will have a corresponding staging URL available in the pull request comments.
