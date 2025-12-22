# Pelatform Labs Packages Documentation

Documentation for Pelatform Labs Packages, built with [Mintlify](https://mintlify.com).

## Project Structure

```
docs/
├── images/                    # Documentation images and assets
├── logo/                      # Brand assets
├── sample/                    # Mintlify component examples and guides
├── snippets/                  # Reusable content snippets
│   ├── utils/                 # Utility function documentation snippets
│   └── *.jsx                  # Custom React components (Installer, etc.)
├── toolkits/                  # Main documentation content
│   ├── config/                # Configuration packages (ESLint, TSConfig, Biome)
│   ├── email/                 # Email package documentation
│   ├── storage/               # Storage package documentation
│   └── utils.mdx              # Utils package documentation
├── docs.json                  # Mintlify configuration
├── index.mdx                  # Home page
├── quickstart.mdx             # Quick start guide
└── README.md                  # This file
```

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify):

```bash
npm i -g mintlify
```

Start the development server:

```bash
mintlify dev
```

---

Built with ❤️ using [Mintlify](https://mintlify.com)
