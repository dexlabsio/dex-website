# Launch Week & Major Release Diary

## Overview

This diary is specifically for tracking Launch Weeks and Major Release announcements on the dex website. For general website information, architecture, and development guidelines, please refer to the main `PROJECT_DIARY.md` file first.

**Current Release**: Summer 2025 Release
**Release Theme**: "Built for Scale" - Efficiency Meets Scale
**Page Location**: `/app/blog/summer-2025-release/page.tsx`

## Launch Week Structure & Components

### Page Architecture
Launch Week pages follow a consistent structure optimized for feature announcements:

1. **Hero Section** - Main announcement with compelling title and single CTA
2. **Features Overview** - Centered illustration with grid of all features
3. **Feature Detail Sections** - Individual deep-dive sections for each feature
4. **Consistent Spacing** - Reduced spacing between sections (`py-12 sm:py-16`)
5. **Visual Consistency** - Professional styling with videos, screenshots, and illustrations

### Design System for Launch Pages

#### Spacing Standards
- **Hero to Features**: `py-12 sm:py-16` (reduced from standard `py-24 sm:py-32`)
- **Feature Sections**: `py-12 sm:py-16` for consistency
- **Content Width**: `max-w-container` for full-width sections, `max-w-4xl` for readable text

#### Visual Elements
- **16:9 Aspect Ratio**: All videos and illustrations use `aspect-video`
- **Bordered Screenshots**: Use layered border system for premium feel
- **Dividers**: Simple `border-t border-gray-200` between feature sections
- **Icons**: Lucide React icons in indigo circular backgrounds (`bg-indigo-600`)

## Summer 2025 Release Features

### 1. New Orchestration UI
- **Status**: ✅ Complete
- **Title**: "Redesigned workflow management"
- **Content**: Workflow interface improvements
- **Visual**: Video placeholder

### 2. Notification Center
- **Status**: ✅ Complete with video
- **Title**: "Monitor every pipeline execution"
- **Content**: Real-time pipeline monitoring, Slack integration
- **Visual**: Working video + Slack screenshot
- **Video**: `/Summer 2025 Launch Week/Notification Center_SummerRelease.mp4`
- **Screenshot**: `/Summer 2025 Launch Week/slack_notification_screenshot.png`

### 3. dex Connectors Ultra
- **Status**: ✅ Complete with image
- **Title**: "Lightning-fast data ingestion"
- **Content**: Rust-based connectors, 230GB/2.3B records in 22 minutes
- **Visual**: Performance comparison image
- **Image**: `/Summer 2025 Launch Week/dex Connectors Ultra.png`

### 4. BI Module
- **Status**: ✅ Content complete, placeholder visual
- **Title**: "Native business intelligence"
- **Content**: Built-in dashboards and reporting
- **Visual**: Video placeholder

### 5. Improvements in dex AI Copilot
- **Status**: ✅ Content complete, placeholder visual
- **Title**: "Smarter AI assistance"
- **Content**: Specialized agents, drag-and-drop context, natural language SQL
- **Visual**: Video placeholder

## Content Guidelines for Launch Weeks

### Messaging Principles
1. **Theme Consistency**: Every feature should reinforce the release theme ("Built for Scale")
2. **Authentic Stories**: Use real performance data, customer feedback, and development stories
3. **Technical Accuracy**: Include specific metrics, capabilities, and technical details
4. **Professional Tone**: Balance excitement with enterprise credibility

### Content Structure per Feature
```
1. Problem Statement (1 paragraph)
2. Solution & Capabilities (1-2 paragraphs)
3. Benefits & Availability (1 paragraph)
```

### Visual Content Strategy
- **Hero Illustration**: 16:9 overview illustration showing all features
- **Feature Videos**: Demo videos showing actual functionality
- **Supporting Screenshots**: Real UI screenshots for context
- **Performance Data**: Charts, benchmarks, comparison tables

## Technical Implementation

### File Organization
```
/app/blog/[release-name]/page.tsx
/public/[Release Name]/
  ├── videos/
  ├── screenshots/
  └── illustrations/
```

### Component Patterns
- Use existing `max-w-container` for consistency
- Maintain responsive design patterns
- Include proper alt text for accessibility
- Use semantic HTML structure

### Video Integration
```tsx
<video
  className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full"
  controls
  preload="metadata"
>
  <source src="/[Release Name]/[video-name].mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Image Integration
```tsx
<img
  src="/[Release Name]/[image-name].png"
  alt="Descriptive alt text"
  className="aspect-video rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full object-cover"
/>
```

## Launch Week Checklist

### Pre-Launch
- [ ] Create release page structure
- [ ] Implement hero section with theme
- [ ] Add features overview section
- [ ] Create individual feature sections
- [ ] Add placeholder videos/images
- [ ] Test responsive design

### Content Development
- [ ] Write authentic feature descriptions
- [ ] Include real performance metrics
- [ ] Add customer stories/quotes
- [ ] Create compelling titles
- [ ] Ensure theme consistency

### Visual Assets
- [ ] Commission hero illustration
- [ ] Record feature demo videos
- [ ] Capture UI screenshots
- [ ] Create performance charts
- [ ] Optimize all media files

### Pre-Launch Review
- [ ] Content accuracy review
- [ ] Technical functionality test
- [ ] Mobile responsiveness check
- [ ] Performance optimization
- [ ] SEO metadata addition

### Post-Launch
- [ ] Monitor performance metrics
- [ ] Collect user feedback
- [ ] Update content based on feedback
- [ ] Archive successful patterns for future releases

## Assets & Resources

### Current Assets Directory
`/public/Summer 2025 Launch Week/`
- `Notification Center_SummerRelease.mp4` - Working demo video
- `slack_notification_screenshot.png` - Integration example
- `dex Connectors Ultra.png` - Performance comparison

### Future Asset Requirements
- Hero illustration (16:9, comprehensive overview)
- BI Module demo video
- AI Copilot demo video
- Orchestration UI demo video

## Success Metrics

### Technical Metrics
- Page load speed < 3 seconds
- Mobile Core Web Vitals scores
- Video loading performance
- Cross-browser compatibility

### Content Metrics
- Time on page
- Scroll depth
- Demo video completion rates
- CTA conversion rates

## Best Practices Learned

### Content
1. **Start with authentic stories** - Real customer needs and development challenges resonate
2. **Include specific metrics** - Concrete performance data builds credibility
3. **Maintain consistent theme** - Every feature should reinforce the main message
4. **Balance technical depth** - Detailed enough for experts, accessible for decision makers

### Design
1. **Reduced spacing works better** - Half the standard spacing creates better flow
2. **Visual hierarchy is crucial** - Clear progression from overview to details
3. **Video quality matters** - High-quality demos significantly impact perception
4. **Mobile optimization essential** - Majority of traffic views on mobile devices

### Development
1. **Component reusability** - Create patterns that work across multiple releases
2. **Performance optimization** - Large media files require careful optimization
3. **Accessibility compliance** - Proper alt text and semantic structure required
4. **Version control** - Track changes carefully during rapid iteration

---

*This diary should be updated for each major release to capture lessons learned and successful patterns.*

**Related Files**:
- `PROJECT_DIARY.md` - Main website documentation
- `/app/blog/summer-2025-release/page.tsx` - Current release implementation