---
title: jsrepo.com
description: How to publish and serve your registry on jsrepo.com.
lastUpdated: 4-28-2025
---

[jsrepo.com](https://jsrepo.com) is the best way to host your registry. It has first class support for semantic versioning and private registries so that you can worry less about hosting and more about shipping.

## semver

One of the greatest benefits of hosting your registry on **jsrepo.com** is first class support for [semver](https://semver.org/) (Semantic Versioning).

While using a git provider with tags is a fine solution for basic versioning needs it's far less secure because tags are mutable.

With **jsrepo.com** versions are immutable, meaning they will forever point to the same version of the code that you originally specified.

Versions can be specified for a **jsrepo.com** registry with the same syntax you might see on npm or jsr:

```sh
jsrepo init @ieedan/std@0.0.1
```

**jsrepo** (like npm or jsr) will tag your releases. For instance the latest (non pre-release) version of a registry will be tagged with the `latest` tag. And the latest version of a pre-release will be tagged using it's pre-release label, for instance `1.0.0-next.1` would be tagged with `next`.

You specify a tagged version with the same syntax:

```sh
jsrepo init @ieedan/std@latest
```

## Private registries

**jsrepo.com** also has first class support for private registries. It's easier than ever to share code with your entire team using **jsrepo.com**.

Once you have invited your team to an organization on **jsrepo.com** they will be able to access any public or private registries in the scopes owned by that organization with their own PAT.

## Publishing to jsrepo.com

To get started with [jsrepo.com](https://jsrepo.com) you will need to sign in using your GitHub account.

Next claim a scope [here](https://jsrepo.com/account/scopes/new). Scopes are a prefix added to your registry to group related registries together.

For example:

```sh
@ieedan/std
```

Here `@ieedan` is the scope and `std` is the registry name.

Next you will need to create an access token [here](https://jsrepo.com/account/access-tokens/new).

With your newly created access token, authenticate to the jsrepo CLI like so:

```sh
jsrepo auth jsrepo --token <token>
```

> If you are publishing in a workflow you can use the `JSREPO_TOKEN` environment variable instead.

### Preparing to publish your registry

Now that you have authenticated to the jsrepo CLI you are ready to start publishing registries.

Before we do that however there's a few things we need to do. For starters we need to add the `name` and `version` keys to our `jsrepo-build-config.json` like so.

```jsonc
{
	"name": "@ieedan/std",
	"version": "0.0.1"
	// ...
}
```

These function similarly to the `name` and `version` keys in a `package.json` and tell **jsrepo.com** the name of the registry as well as what `version` to publish it under.

#### Registry Metadata

It's also a good idea to include metadata with your registry if you want it to be easily searchable on **jsrepo.com**.

This can be done using the `meta` key:

```jsonc
{
	// ...
	"meta": {
		"authors": ["Aidan Bleser"],
		"bugs": "https://github.com/ieedan/std/issues",
		"description": "Fully tested and documented TypeScript utilities brokered by jsrepo.",
		"homepage": "https://ieedan.github.io/std/",
		"repository": "https://github.com/ieedan/std",
		"tags": ["typescript", "std", "utilities"]
	}
}
```

### Publishing your registry

Now that your registry is ready to be published let's verify that everything is working correct with the `--dry-run` flag:

```sh
jsrepo publish --dry-run
```

This will check everything and ensure that publishing your registry will succeed. (Even that the version doesn't already exist)

When you are ready to publish your registry just run:

```sh
jsrepo publish
```

If the publish succeeds you should now be able to add blocks from your registry like so:

```sh
jsrepo add --repo @ieedan/std # add from list
jsrepo add @ieedan/std/utils/math # add specific block
jsrepo add --repo @ieedan/std@0.0.1 # add specific version
jsrepo add --repo @ieedan/std@latest # add tagged version
```

## changesets

`jsrepo` registries can now integrate beautifully with [changesets](https://github.com/changesets/changesets).

Here's a quick tutorial on how to set them up...

Start by running the following commands:

```sh
npm install @changesets/cli -D

npm changeset init
```

Now modify your `.changeset/config.json` file like so:

```json showLineNumbers {12-15}
{
	"$schema": "https://unpkg.com/@changesets/config@3.1.1/schema.json",
	"changelog": "@changesets/cli/changelog",
	"commit": false,
	"fixed": [],
	"linked": [],
	"access": "restricted",
	"prettier": false,
	"baseBranch": "main",
	"updateInternalDependencies": "patch",
	"ignore": [],
	"privatePackages": {
		"version": true,
		"tag": true
	}
}
```

Update your `jsrepo-build-config.json`:

```jsonc showLineNumbers {3}
{
	// -- snip --
	"version": "package" // now jsrepo will use the version from your package.json
	// -- snip --
}
```

Next add a custom release script to your `package.json`:

```jsonc showLineNumbers {4}
{
	// -- snip --
	"scripts": {
		"ci:release": "jsrepo publish && changeset tag"
	}
	// -- snip --
}
```

Now we can setup a workflow to publish to **jsrepo.com**:

> Make sure to generate an access token [here](https://jsrepo.com/account/access-tokens/new) and store it in your actions secrets as `JSREPO_TOKEN`

```yaml
name: Publish

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Build & Publish Release
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          commit: 'chore(release): version package'
          title: 'chore(release): version package'
          publish: npm run ci:release
        env:
          JSREPO_TOKEN: ${{ secrets.JSREPO_TOKEN }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_ENV: production
```

Now you can use changesets with `jsrepo` just like with an npm package!
