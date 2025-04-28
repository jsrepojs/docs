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

### `--dry-run`

Test the publish but don't list on jsrepo.com.

#### Usage

```sh
jsrepo publish --dry-run
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
