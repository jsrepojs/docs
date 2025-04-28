---
title: publish
description: Publish your registry to jsrepo.com.
lastUpdated: 4-28-2025
---

```sh
jsrepo publish
```

## Usage

Publish your registry to [jsrepo.com](https://jsrepo.com):

```sh
jsrepo publish
```

## Options

### `--private`

When publishing the first version of the registry make it private.

#### Usage

```sh
jsrepo publish --private
```

### `--name`

The name of the registry to publish.

#### Usage

```sh
jsrepo publish --name @ieedan/std
```

### `--ver`

The version of the registry to publish.

#### Usage

```sh
jsrepo publish --ver 0.0.1
```

### `--dry-run`

Test the publish but don't list on jsrepo.com.

#### Usage

```sh
jsrepo publish --dry-run
```

### `--dirs`

The directories containing the categories. Corresponding config key: `dirs`

#### Usage

```sh
jsrepo publish --dirs ./src ./blocks
```

### `--include-blocks`

Include only the blocks with these names. Corresponding config key: `includeBlocks`

#### Usage

```sh
jsrepo publish --include-blocks math logger
```

### `--include-categories`

Include only the categories with these names. Corresponding config key: `includeCategories`

#### Usage

```sh
jsrepo publish --include-categories utils scripts
```

### `--exclude-blocks`

Do not include the blocks with these names. Corresponding config key: `excludeBlocks`

#### Usage

```sh
jsrepo publish --exclude-blocks math logger
```

### `--exclude-categories`

Do not include the categories with these names. Corresponding config key: `excludeCategories`

#### Usage

```sh
jsrepo publish --exclude-categories utils scripts
```

### `--list-blocks`

List only the blocks with these names. Corresponding config key: `listBlocks`

#### Usage

```sh
jsrepo publish --list-blocks math logger
```

### `--list-categories`

List only the categories with these names. Corresponding config key: `listCategories`

#### Usage

```sh
jsrepo publish --list-categories utils scripts
```

### `--do-not-list-blocks`

Do not list the blocks with these names. Corresponding config key: `doNotListBlocks`

#### Usage

```sh
jsrepo publish --do-not-list-blocks math logger
```

### `--do-not-list-categories`

Do not list the categories with these names. Corresponding config key: `doNotListCategories`

#### Usage

```sh
jsrepo publish --do-not-list-categories utils scripts
```

### `--exclude-deps`

Prevent these dependencies from being included in the `jsrepo-manifest.json` file. Corresponding config key: `excludeDeps`

#### Usage

```sh
jsrepo publish --exclude-deps svelte react
```

### `--allow-subdirectories`

Allow subdirectories to be built. Corresponding config key: `allowSubdirectories`

#### Usage

```sh
jsrepo publish --allow-subdirectories
```

### `--verbose`

More verbose logging. (May be used to troubleshoot issues)

#### Usage

```sh
jsrepo publish --verbose
```

### `--cwd`

Run the current command on the provided directory absolute or relative.

#### Usage

```sh
jsrepo publish --cwd ./sites/docs
```

### `-h, --help`

Help with the command.

#### Usage

```sh
jsrepo publish --help
```
