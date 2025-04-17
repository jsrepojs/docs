<p align="center">
  <a href="https://jsrepo.dev">
    <picture>
      <img src="https://github.com/user-attachments/assets/fb4b84c3-8f81-4e1d-a049-ed909c3dae68">
    </picture>
    <h1 align="center">jsrepo</h1>
  </a>
</p>

# jsrepo docs

The docs site for jsrepo

## Development

```bash
pnpm install

pnpm dev
```

### Environment variables

You'll need to provide the following environment variables:

```.env
GITHUB_TOKEN=""
GITLAB_TOKEN=""
UPSTASH_REDIS_URL=""
UPSTASH_REDIS_TOKEN=""
DATABASE_URL="" # postgres db
```

## Contributing

Make sure to format and lint the code before submitting a PR!

```bash
pnpm format

pnpm lint
```
