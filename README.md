# BanafshehMC-Website

Static website built with webpack and deployed to Cloudflare Workers as static assets.

## Development

```sh
npm install
npm start
```

## Build

```sh
npm run build
```

The production build is written to `dist/`.

## Preview the production build locally

```sh
npm run preview
```

This builds the site and serves `dist/` through `wrangler dev`.

## Deploy

First-time setup:

```sh
npx wrangler login
```

Then deploy:

```sh
npm run deploy
```

This builds the site and deploys the Worker defined in `wrangler.jsonc`. The site is available at
`https://banafshehmc-website.<your-subdomain>.workers.dev` unless a custom domain or route is configured.

Validate the build and deployment configuration without publishing:

```sh
npm run deploy:dry-run
```
