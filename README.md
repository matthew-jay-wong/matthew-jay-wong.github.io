# Matt Hew Blog

Personal blog covering thoughts, insights, and musings on things that make it worth to wake up in the morning.

🌐 **Live Site**: https://matthew-jay-wong.github.io

## Categories

- **Sports** - Motorsport, hockey, football, and baseball coverage
- **Tech** - Programming, technology insights, and digital trends
- **Reading** - Book reviews, recommendations, and literary discussions
- **Movies & TV** - Entertainment reviews and analysis
- **Lifestyle** - Personal development, wellness, and life reflections

## Built With

- [Docusaurus 3.8.1](https://docusaurus.io/) - Modern static website generator
- React 19.0.0 & TypeScript 5.6.2
- Custom purple theme (#7c3aed)
- Responsive design with mobile-first approach

## Development

### Prerequisites
- Node.js 18+
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Type checking
npm run typecheck

# Clear cache (useful when adding/removing blog posts)
npm run clear
```

Visit `http://localhost:3000` to view the site locally.

## Deployment

This site uses **GitHub Actions** for continuous deployment:

- **Production Deployments**: Automatic deployment to GitHub Pages when changes are pushed to `main` branch
- **PR Testing**: Pull requests automatically trigger a test build to verify changes before merging
- **Build artifacts**: Stored in `gh-pages` branch

### Workflows
- `.github/workflows/deploy.yml` - Builds and deploys to GitHub Pages on main branch pushes
- `.github/workflows/test-deploy.yml` - Tests builds on pull requests to main

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request to `main`
5. The test workflow will automatically verify your build
6. Once merged, changes deploy automatically to the live site

## Project Structure

```
src/
├── pages/
│   ├── {category}/index.mdx    # Category landing pages
│   └── index.tsx               # Homepage
├── css/custom.css              # Theme customization
blog/
├── authors.yml                 # Author definitions
├── tags.yml                    # Tag configurations
└── YYYY-MM-DD-{slug}.md       # Blog posts
static/img/                     # Assets (favicon, logos, etc.)
```

## License

Built with Docusaurus. Copyright © 2024 Matt Hew.