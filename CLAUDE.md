# Matt Hew Blog

Personal blog covering thoughts, insights, and musings on things that make it worth to wake up in the morning.

## Project Overview
- **Type**: Personal blog built with Docusaurus
- **URL**: https://matthew-jay-wong.github.io
- **Repository**: https://github.com/matthew-jay-wong/matthew-jay-wong.github.io
- **Deployment**: GitHub Pages (automatic on main branch)

## Tech Stack
- **Framework**: Docusaurus 3.8.1
- **Frontend**: React 19.0.0, TypeScript 5.6.2
- **Styling**: CSS Modules, Infima framework with custom overrides
- **Content**: MDX for blog posts and pages
- **Package Manager**: npm

## Theme & Design
- **Primary Colors**: Purple theme (#7c3aed primary, #a78bfa for dark mode)
- **Branding**: Custom purple favicon and logo (favicon-purple.svg)
- **Design Philosophy**: Clean, minimal aesthetic with consistent styling
- **Typography**: Default Infima font stack (system fonts)

## Content Structure
### Categories
1. **Sports** - Motorsport, hockey, football, baseball
2. **Tech** - Programming, technology insights
3. **Reading** - Books, literature, reviews
4. **Movies & TV** - Entertainment reviews and analysis
5. **Lifestyle** - Personal development, wellness, growth

### Navigation
- Navbar: Blog + 5 category buttons + GitHub link
- Footer: Content categories + GitHub link
- Each category page has "Browse by Topic" section with relevant tag buttons

### Blog Organization
- **Author**: Matthew Wong (matthew key in authors.yml)
- **Tags**: Comprehensive system with category-specific subtags
- **Posts**: Welcome posts for each category as foundation content

## Development Commands
```bash
# Start development server
npm start

# Build for production  
npm run build

# Clear cache (useful when adding/removing blog posts)
npm run clear

# Type checking
npm run typecheck
```

## Design Preferences
- **Button Styling**: Use `button--outline button--secondary` for consistency (avoid arbitrary primary buttons)
- **Navbar**: Keep default positioning - fixed positioning breaks mobile menu
- **Responsive**: Mobile-first approach, test on mobile devices
- **Content Pages**: Organize in folders (src/pages/{category}/index.mdx) for better asset management

## Key Learnings & Configuration Notes

### Design & UX
- Fixed navbar positioning causes mobile menu issues - stick to default
- Tag pages only exist if tags are used in actual blog posts
- Cache clearing required when adding/removing blog posts
- All tag buttons should use consistent secondary styling

### Docusaurus Configuration
- **Markdown hooks migration**: `onBrokenMarkdownLinks` moved from top-level config to `markdown.hooks.onBrokenMarkdownLinks` for Docusaurus v4 compatibility
- **Future flags enabled**: `future.v4: true` in docusaurus.config.ts for v4 compatibility
- **Blog truncation**: Use `<!--truncate-->` marker to control blog post previews on list pages
- **MDX support**: All pages and blog posts support MDX for enhanced formatting

### Sports Page Structure
- **Main page** (`src/pages/sports/index.mdx`): Introduction, sport navigation buttons, consumption framework, content preview
- **Blog posts**: Sports manifesto moved to dedicated blog post for better shareability
- **Framework section**: Condensed rules for live games, content consumption, and weekly reflections
- **Navigation**: Centered sport buttons (motorsport, hockey, football, baseball)

## File Structure Notes
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

## Deployment & CI/CD

### GitHub Actions Workflows

**Production Deployment** (`.github/workflows/deploy.yml`)
- **Trigger**: Push to `main` branch
- **Process**: Two-stage deployment
  1. **Build Job**:
     - Runs on Ubuntu latest
     - Checks out code with full git history (`fetch-depth: 0`)
     - Sets up Node.js 18 with npm caching
     - Installs dependencies (`npm install`)
     - Builds Docusaurus site (`npm run build`)
     - Uploads `build/` directory as Pages artifact
  2. **Deploy Job**:
     - Requires permissions: `pages: write`, `id-token: write`
     - Deploys to `github-pages` environment
     - Uses official GitHub Pages deployment action
     - Returns deployment URL
- **Artifacts**: Build output stored in `gh-pages` branch
- **Result**: Live site updated at https://matthew-jay-wong.github.io

**Test Deployment** (`.github/workflows/test-deploy.yml`)
- **Trigger**: Pull requests to `main` branch
- **Purpose**: CI/Quality gate before merging
- **Process**: Single job
  - Same setup as build job (checkout, Node 18, npm install)
  - Runs `npm run build` to verify build succeeds
  - Does NOT deploy - only validates
- **Result**: PR can only merge if build passes

### Deployment Requirements
- Node.js 18+ (specified in workflow)
- All dependencies must be in package.json/package-lock.json
- Build must complete without errors
- No manual deployment steps needed

### Troubleshooting Deployments
- **Build fails in GitHub Actions**: Check workflow logs for specific error
- **Missing blog posts**: Run `npm run clear` to clear Docusaurus cache
- **Broken links**: Check `onBrokenMarkdownLinks` warnings in build output
- **404 on deployed site**: Ensure `trailingSlash: false` in docusaurus.config.ts
- **Styling issues**: Clear browser cache and check custom.css

## Future Considerations
- Consider adding more specific sports tags as content grows
- May want to add search functionality for larger content volumes
- Could add author page and social links as blog grows
- Consider adding RSS feed customization