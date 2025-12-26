# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the documentation site for Pelatform Labs packages - a collection of development toolkits including configuration packages (ESLint, TypeScript, Biome), Email utilities, Storage utilities, and general Utils. The documentation is built with [Mintlify](https://mintlify.com).

## Development Commands

### Start Development Server

```bash
mintlify dev
```

The Mintlify CLI must be installed globally first:

```bash
npm i -g mintlify
```

## Documentation Structure

```
docs/
├── toolkits/              # Main documentation content
│   ├── config/           # Configuration packages (ESLint, TSConfig, Biome)
│   ├── email/            # Email package docs
│   ├── storage/          # Storage package docs
│   ├── index.mdx         # Toolkits overview
│   └── utils.mdx         # Utils package docs
├── snippets/             # Reusable React components and content
│   ├── packageinstaller.jsx  # Multi-package manager installer component
│   ├── packagerun.jsx        # Multi-package manager run command component
│   └── utils/               # Utils category content snippets
├── sample/              # Mintlify component examples (hidden from nav)
├── docs.json            # Site navigation and configuration
├── index.mdx            # Home page
└── quickstart.mdx       # Quick start guide
```

## Writing Documentation

### Code Block Format

Always use the correct format for code blocks:

````mdx
```language filename
code here
```
````

Examples of correct formats:

- `js eslint.config.js` - JavaScript config file
- `json package.json` - JSON file
- `jsx component.tsx` - JSX/TSX file
- `yaml .github/workflows/ci.yml` - YAML workflow file

**Never use**: `filename="extension"` syntax (e.g., `js filename="app.js"`)

### Package Installation Commands

Use the custom `PackageInstaller` component for multi-package manager support:

```mdx
import { PackageInstaller } from "/snippets/packageinstaller.jsx";

// Single command

<PackageInstaller command="installer -D @pelatform/package-name" />

// Multiple commands with comments

<PackageInstaller
  command="
  # TypeScript configuration
  installer -D @pelatform/tsconfig typescript

# Biome configuration

installer -D @pelatform/biome-config @biomejs/biome
" />
```

The component automatically generates pnpm, npm, yarn, and bun commands.

### Package Run Commands

Use the `PackageRun` component for script commands:

```mdx
import { PackageRun } from "/snippets/packagerun.jsx";

<PackageRun command="run lint" />
<PackageRun command="run lint:fix" />
```

### Mintlify Components

Refer to `sample/guide.mdx` for comprehensive component reference.

**Card Usage Patterns:**

- Use individual `<Card>` for longer content
- Use `<Columns>` with multiple `<Card>` for short, grouped content

**Callout Types:**

- `<Note>` - General notes
- `<Warning>` - Warnings
- `<Info>` - Informational tips
- `<Tip>` - Helpful tips
- `<Check>` - Confirmations/checks
- `<Danger>` - Critical warnings

**For tutorials/guides:**

- Use `<Steps>` with `<Step>` components for sequential instructions
- Use `<Tabs>` with `<Tab>` for alternative approaches
- Use `<Accordion>` for optional/advanced content

## Content Patterns

### Package Documentation Template

Each package documentation should include:

1. Frontmatter with title, description, keywords
2. NPM version badge
3. Feature overview using `<Columns>` with `<Card>`
4. Installation section with `<PackageInstaller>`
5. Quick Start with `<Steps>`
6. Configuration options with `<Tabs>`
7. Features section
8. Advanced setup with `<Accordion>`
9. Examples
10. Troubleshooting with `<Accordion>`

### Related Links

At the bottom of documentation pages, include related docs:

```mdx
## Documentation

<CardGroup cols={2}>
  <Card title="API Reference" icon="code" href="/toolkits/email/api">
    Description
  </Card>
</CardGroup>

### Related

- [Config Toolkit](/toolkits/config) - Description
- [Storage Toolkit](/toolkits/storage) - Description
```

## Navigation Structure

Navigation is defined in `docs.json`. The structure uses:

- **Groups**: Top-level sections with icons
- **Pages**: Individual documentation files
- **Hidden groups**: Sample pages (not shown in navigation)

When adding new documentation pages:

1. Add entries to the appropriate group in `docs.json`
2. Create the `.mdx` file in the corresponding directory

## Important Rules

1. **Language**: Use English for all documentation content
2. **Code blocks**: Always specify language and filename in the correct format
3. **Import consistency**: Validate all import statements for custom components
4. **Component usage**: Only use documented Mintlify components (check `sample/guide.mdx`)
5. **Card vs Cards**: Use `<Card>` (singular), NOT `<Cards>` (doesn't exist)

## MCP Server Integration

The documentation has Mintlify MCP server integration. If unsure about component usage, you can query the MCP server for the latest Mintlify component documentation.

## Additional References

- Project rules: `.trae/rules/project_rules.md` (contains format rules and component usage examples)
- Component reference: `sample/guide.mdx`
- Package installer component: `snippets/packageinstaller.jsx`
