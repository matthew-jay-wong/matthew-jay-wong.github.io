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

## Key Learnings
- Fixed navbar positioning causes mobile menu issues - stick to default
- Tag pages only exist if tags are used in actual blog posts
- Cache clearing required when adding/removing blog posts
- All tag buttons should use consistent secondary styling

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

## Deployment
- Automatic deployment to GitHub Pages via GitHub Actions
- Build artifacts stored in `gh-pages` branch
- No manual deployment steps required

## Future Considerations
- Consider adding more specific sports tags as content grows
- May want to add search functionality for larger content volumes
- Could add author page and social links as blog grows
- Consider adding RSS feed customization