# dex Website Project Diary

## Project Overview

**Project Name**: dex Website Redesign  
**Company**: dex Tecnologia LTDA (CNPJ: 48.412.896/0001-42)  
**Purpose**: Modern, unified data platform marketing website  
**Framework**: Next.js 15.4.5 with TypeScript and Tailwind CSS  
**UI Components**: shadcn/ui with custom dex theming  
**Working Directory**: `dex-website-2025/` (localhost:3000 version - DEFAULT)  

## What is dex?

dex is a unified data platform that makes it easy to get answers, make decisions and automate processes. The platform covers the entire data lifecycle:

- **Extract & Load**: High-performance connectors for databases, business tools, and spreadsheets
- **Transform**: AI-assisted data transformation workflows with Git integration
- **Orchestrate**: Auto-DAGs, built-in retries, and full observability  
- **AI Copilot**: Generate SQL from natural language with full data awareness
- **Analytics**: End-to-end analytics solutions

## Technical Stack

### Core Technologies
- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: shadcn/ui (customized)
- **Icons**: Lucide React
- **Theme Management**: next-themes (currently disabled, light mode only)

### Project Structure
```
dex-website-2025/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── demo/page.tsx      # Demo request form
│   ├── privacy/page.tsx   # Privacy Policy (exists)
│   ├── security/page.tsx  # Information Security Policy (exists)
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── hero/default.tsx
│   │   ├── bento-grid/2-rows-top.tsx
│   │   ├── logos/grid-6.tsx
│   │   ├── stats/grid-boxed.tsx
│   │   ├── navbar/default.tsx
│   │   ├── footer/minimal.tsx
│   │   ├── cta/default.tsx
│   │   ├── marquee/default.tsx
│   │   └── tabs/left.tsx
│   ├── ui/               # Reusable UI components
│   ├── logos/            # Logo components
│   └── illustrations/    # Custom illustrations
└── public/               # Static assets
```

## Brand Identity

### Colors (OKLCH format)
- **Primary/Brand**: `oklch(42.48% 0.1295 259.18)` - dex blue
- **Background**: `oklch(1 0 0)` - pure white
- **Foreground**: `oklch(0.141 0.005 285.823)` - dark text

### Typography
- **Primary Font**: Inter
- **Mono Font**: IBM Plex Mono

### Logo
- Uses DexLogo component: `<DexLogo src="/logo.png" alt="dex" />`

## Current Homepage Structure

1. **Navbar** - Sticky header with navigation and CTA buttons
2. **Hero** - Two-column layout with geometric patterns
3. **Logos** - Customer logos with compelling messaging (2-column)
4. **BentoGrid** - Product features in responsive grid layout
5. **Stats** - Customer metrics in 4-column grid
6. **TabsLeft** - Solutions showcase with interactive tabs
7. **LogosDefault** - Integration partners grid
8. **CTA** - Simple call-to-action section
9. **Footer** - 4-column footer with comprehensive navigation

## Key Design Principles

### Design System
- **Pure White Background**: All sections use `bg-white`
- **Consistent Spacing**: Reduced by 50% from original design:
  - Sections: `py-6 sm:py-12 md:py-16` (was `py-12 sm:py-24 md:py-32`)
  - Hero: `pt-10 pb-12 sm:pb-16 lg:py-20`
- **Brand Blue Buttons**: All primary buttons use the Button component with default variant
- **Responsive Design**: Mobile-first approach with lg/xl breakpoints

### Component Patterns
- Use `cn()` utility for conditional classes
- Prefer Button component over hardcoded button styles
- Use semantic HTML with proper accessibility attributes
- Implement proper TypeScript interfaces for all props

## Recent Major Changes (2025)

### Theme System
- **Removed**: Dark mode toggle from footer (`showModeToggle = false`)
- **Updated**: ThemeProvider to `defaultTheme="light"` and `enableSystem={false}`
- **Result**: Website now defaults to light mode only

### Content & Sections
- **Added**: Information Security Policy page (`/security`)
- **Updated**: All sections to use pure white backgrounds
- **Redesigned**: Multiple sections with new modern layouts:
  - Hero: Two-column with geometric SVG patterns
  - Stats: Customer-focused metrics
  - Logos: Two-column with messaging
  - CTA: Simplified layout
  - Footer: 4-column comprehensive navigation

### Button Standardization
- **Replaced**: All hardcoded `bg-indigo-600` buttons with Button component
- **Ensures**: Consistent brand blue color across the site
- **Updated**: Hero, Logos, and Demo page buttons

### Spacing Optimization
- **Reduced**: All section spacing by 50%
- **Maintained**: Original navbar-to-hero spacing (`pt-10`)
- **Updated**: Section component default padding

## Important Files & Components

### Critical Components
- `components/sections/navbar/default.tsx` - Main navigation
- `components/sections/footer/minimal.tsx` - Site footer with dex-specific links  
- `components/ui/button.tsx` - Standardized button component
- `components/ui/section.tsx` - Base section wrapper
- `app/globals.css` - Theme colors and CSS variables

### Key Pages
- `app/page.tsx` - Homepage composition
- `app/demo/page.tsx` - Demo request form with lead capture
- `app/security/page.tsx` - Information Security Policy
- `app/privacy/page.tsx` - Privacy Policy (placeholder)
- `app/terms/page.tsx` - Terms of Service (comprehensive professional content)

## Content Strategy

### Homepage Messaging
- **Hero**: "The simplest path to reliable data"
- **Value Props**: Speed, trust, and delivering real results
- **Social Proof**: Customer logos and metrics
- **CTA**: "Book a Demo" (primary action)

### Customer Segments
- Data Engineers
- Data Scientists  
- Analytics Engineers
- Engineering Managers
- CTOs

### Key Metrics (for Stats section)
- **30x**: Data pipeline performance improvement
- **194%**: ROI improvement
- **Zero**: Downtime guarantee
- **Secure**: Enterprise-grade security

## External Integrations

### Demo Form (`/demo`)
- Captures: Name, email, company, job role, cloud provider, message
- Submits to: `/api/demo` endpoint
- Success: Redirects to Reclaim.ai booking link
- Features: Form validation, loading states, error handling

### Links & URLs
- **App**: `https://app.dexlabs.io`
- **Documentation**: `https://docs.dexlabs.io`
- **Support**: `mailto:support@dexlabs.io`
- **Social**: X, GitHub, LinkedIn (@dexlabs)

## Development Guidelines

### Code Standards
- Use TypeScript for all components
- Implement proper interfaces for props
- Use Tailwind CSS classes, avoid inline styles
- Follow Next.js App Router conventions
- Maintain responsive design patterns

### Component Creation
1. Create interface for props
2. Use `cn()` for conditional styling  
3. Implement proper accessibility attributes
4. Add proper TypeScript types
5. Follow existing naming conventions

### Styling Guidelines
- Use Tailwind CSS utility classes
- Leverage CSS custom properties from `globals.css`
- Maintain consistent spacing using design system values
- Use semantic color names (`text-primary`, `bg-background`)

## Common Tasks & Commands

### Design System Updates
- Colors: Update `app/globals.css` CSS custom properties
- Components: Modify files in `components/ui/`
- Spacing: Update Section component or individual sections

### Content Updates
- Homepage: Modify `app/page.tsx` and individual section components
- Navigation: Update `components/sections/navbar/default.tsx`
- Footer: Update `components/sections/footer/minimal.tsx`

## Future Considerations

### Potential Improvements
- Add TypeScript strict mode
- Implement component testing
- Add performance monitoring
- Consider adding dark mode toggle back
- Enhance form validation
- Add more interactive elements

### Content Areas
- About page (`/about`)
- Blog (`/blog`) 
- Careers (`/careers`)
- Contact (`/contact`)
- Terms of Service (`/terms`)

## AI Assistant Guidelines

When working on this project:

1. **Always read this diary first** to understand the project context
2. **Respect the design system** - use existing patterns and components
3. **Maintain brand consistency** - use dex colors, fonts, and messaging
4. **Follow the established architecture** - don't introduce unnecessary complexity
5. **Test responsive design** - ensure mobile-first approach
6. **Preserve existing functionality** - especially forms and navigation
7. **Update this diary** when making significant changes

## Working Directory & File Organization (Updated January 2025)

### Default Working Directory
- **IMPORTANT**: Always work in the `dex-website-2025/` directory
- This is the localhost:3000 version and the most up-to-date version of the website
- All future development should happen in this directory
- The root directory `/Users/G.Beltrami/Documents/Projects/3.dex-website/` contains legacy files

### Current File Structure (January 2025)
```
dex-website-2025/                    # DEFAULT WORKING DIRECTORY
├── app/                             # Next.js App Router
│   ├── page.tsx                     # Homepage composition
│   ├── demo/page.tsx                # Demo request form
│   ├── privacy/page.tsx             # Privacy Policy
│   ├── security/page.tsx            # Information Security Policy
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles and theme
├── components/
│   ├── sections/                    # Page sections (organized)
│   │   ├── hero/default.tsx
│   │   ├── bento-grid/2-rows-top.tsx
│   │   ├── logos/grid-6.tsx
│   │   ├── stats/grid-boxed.tsx
│   │   ├── navbar/default.tsx
│   │   ├── footer/minimal.tsx
│   │   ├── cta/default.tsx
│   │   ├── marquee/default.tsx      # MOVED & RENAMED
│   │   └── tabs/left.tsx
│   ├── ui/                          # Reusable UI components
│   ├── logos/                       # Logo components
│   ├── illustrations/               # Custom illustrations
│   ├── mockups/                     # Mockup components
│   ├── styles/                      # Component-specific styles
│   └── templates/                   # Template components
├── public/                          # Static assets (organized)
│   ├── customers_logos/             # RENAMED from "Customers Logos"
│   ├── Integration_Logos_dark/
│   ├── Integration_Logos_light/
│   ├── platform_screenshots/
│   ├── bento_icons/
│   └── clients_logo_dark/
├── lib/                             # Utility functions
├── styles/                          # Global styles
└── PROJECT_DIARY.md                 # This file
```

### Recent File Organization Changes (January 2025)
1. **Moved**: `components/sections/marquee-2-rows.tsx` → `components/sections/marquee/default.tsx`
2. **Updated**: Import path in `app/page.tsx` from `@/components/sections/marquee-2-rows` to `@/components/sections/marquee/default`
3. **Renamed**: `public/Customers Logos/` → `public/customers_logos/` (removed spaces)
4. **Updated**: All image paths in `components/sections/logos/grid-6.tsx` to use new directory name

### File Organization Rules
- All sections must be in their own directories under `components/sections/`
- Follow naming convention: `components/sections/{section-name}/default.tsx`
- Variant sections use descriptive names: `grid-6.tsx`, `2-rows-top.tsx`, etc.
- No spaces in directory names (use underscores or hyphens)
- Update all import paths when moving files

## Troubleshooting Common Issues

### Theme Issues
- Check `app/layout.tsx` ThemeProvider settings
- Verify CSS custom properties in `app/globals.css`
- Ensure `showModeToggle = false` in footer

### Button Styling
- Use Button component, not hardcoded classes
- Import from `@/components/ui/button`
- Use `variant="default"` for primary buttons

### Spacing Problems
- Check Section component default padding
- Verify individual section overrides
- Ensure responsive spacing classes

### Import Errors
- Use `@/` alias for absolute imports
- Check component exports in index files
- Verify TypeScript interfaces

---

*Last Updated: September 2025*
*This diary should be updated whenever significant changes are made to the project.*

### Recent Updates
- **September 2025**: 
  - Established `dex-website-2025/` as default working directory, reorganized file structure, updated PROJECT_DIARY with new organization rules
  - **Color Scheme Update**: Changed primary colors from dex blue to indigo (indigo-600/indigo-500) with solid button styles
  - **Marquee Component Enhancement**: Added third row with 6 new integration logos (Amazon S3, DynamoDB, GitHub, MongoDB, Excel, Slack, Google Sheets), reduced transparency effects for better visibility
  - **Navigation Improvements**: Updated Hero section "What's new" link to GitBook release notes, "Unified data platform" now scrolls to BentoGrid section, CTA "Learn more" redirects to demo page
  - **Footer Optimization**: Removed Company column, rearranged layout to 5-column grid, confirmed Product links pointing to correct sections
  - **Terms of Service**: Created comprehensive professional Terms of Service page at `/terms` with company-specific content, Brazilian jurisdiction, and all essential legal sections