---
title: auth
description: Authenticate to jsrepo.com.
lastUpdated: 5-5-2025
---

```sh
jsrepo auth
```

## Usage

Authenticate to jsrepo.com:

```sh
jsrepo auth
```

Logout of jsrepo.com:

```sh
jsrepo auth --logout
```

Login using a token:

```sh
jsrepo auth --token <...>
```

## Options

### `--token`

The token to use for authenticating to your service.

#### Usage

```sh
jsrepo auth --token <...>
```

### `--logout`

Executes the logout flow.

#### Usage

```sh
jsrepo auth --logout
```

### `--cwd`

Run the current command on the provided directory absolute or relative.

#### Usage

```sh
jsrepo auth --cwd ./sites/docs
```

### `-h, --help`

Help with the command.

#### Usage

```sh
jsrepo add --help
```
