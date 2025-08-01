---
title: MCP Server
description: Configuring your registry for the jsrepo MCP server.
lastUpdated: 5-28-2025
---

MCP ([Model Context Protocol](https://modelcontextprotocol.io/introduction)) is a protocol that standardizes how applications provide context to LLMs. The jsrepo MCP server allows applications like Cursor or Windsurf to control the jsrepo CLI.

All registries on jsrepo are automatically MCP compatible. You can start asking about components and running commands today with zero configuration by the registry author.

## Launching the MCP Server

The MCP server can be accessed by running the new `mcp` command:

```sh
jsrepo mcp
```

## Cursor Usage

Add the following code to your `.cursor/mcp.json` file:

```jsonc
{
	"mcpServers": {
		"jsrepo": {
			"command": "npx",
			"args": ["jsrepo", "mcp"]
		}
	}
}
```

Optionally, you can specify a registry to use:

```jsonc
{
	"mcpServers": {
		"jsrepo": {
			"command": "npx",
			"args": ["jsrepo", "mcp", "@ieedan/std"]
		}
	}
}
```

## Windsurf Usage

Add the following code to your `.codeium/windsurf/mcp_config.json` file:

```jsonc
{
	"mcpServers": {
		"jsrepo": {
			"command": "npx",
			"args": ["jsrepo", "mcp"]
		}
	}
}
```

## Tools

Tools provided by the jsrepo MCP server.

### list-components

Lists all available components/utilities for the provided registries.

### get-component-code

Returns the associated code files for the provided component.

### get-config-files

Lists the config files for this registry. These are files that are either necessary for the registry to work or optional as marked by the `optional` boolean on each file.

### discover-registries

Searches jsrepo.com for registries that could include components the user needs in their project.

### cli-reference

A reference for the usage of the jsrepo CLI.

## Exporting Cursor Rules from your Registry

If you are a registry author that wants to provide more context to users about how to initialize and use your registry you can export a Cursor Rules file.

You can export a Cursor Rules file by adding an optional [config file](/docs/registry#config-files) containing your rules to your jsrepo-build-config.json file.

Create a rules file under `./rules/registry.mdc`:

```md
---
description:
globs:
alwaysApply: true
---

Before writing a new TypeScript utility check if the @ieedan/std jsrepo registry has it already and if it does use it instead.
```

Update your `jsrepo-build-config.json` file with an optional config file for the rule:

```jsonc
{
	"configFiles": [
		{
			"name": "Cursor Rules",
			"path": "./rules/registry.mdc",
			"expectedPath": ".cursor/rules/registry.mdc",
			"optional": true
		}
	]
}
```

> You may want to name your rules file so that it is more specific to your registry so that it doesn't clash with other registries the user may have installed.
