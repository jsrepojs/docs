---
title: tokens
description: Configure access tokens for private registry access and update with AI.
lastUpdated: 4-10-2025
---

```sh
jsrepo tokens
```

## Usage

Choose a service and provide a token:

```sh
jsrepo tokens
```

Authenticate to a specific service:

```sh
jsrepo tokens github
```

Choose a service to logout from:

```sh
jsrepo tokens --logout
```

Logout from a specific service:

```sh
jsrepo tokens github --logout
```

## Options

### `--token`

The token to use for authenticating to your service.

#### Usage

```sh
jsrepo tokens --token xxxxxxxxxxx
```

### `--logout`

Executes the logout flow.

#### Usage

```sh
jsrepo tokens --logout
```

### `--cwd`

Run the current command on the provided directory absolute or relative.

#### Usage

```sh
jsrepo tokens --cwd ./sites/docs
```

### `-h, --help`

Help with the command.

#### Usage

```sh
jsrepo add --help
```
