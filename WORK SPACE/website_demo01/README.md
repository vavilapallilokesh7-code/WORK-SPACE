# Bridge249 Website Clone

A modern, modular website clone with organized file structure.

## Project Structure

```
website_demo01/
│
├── index.html                # Main entry file
│
├── assets/
│   └── images/               # All images
│       ├── hero/            # Hero section backgrounds
│       │   ├── bg1.jpg
│       │   └── bg2.jpg
│       ├── icons/            # Icons and buttons
│       │   ├── button-amazon.png
│       │   ├── icon-4.png
│       │   ├── icon-5.png
│       │   ├── icon-6.png
│       │   └── logo.png
│       └── gallery/          # Gallery images
│           ├── img-3.png
│           ├── img-4.png
│           ├── h1-img-6.png
│           └── h1-img-7.png
│
├── css/
│   ├── base/
│   │   ├── reset.css         # CSS reset
│   │   ├── variables.css     # Colors, fonts, spacing
│   │   └── typography.css    # Font styles
│   │
│   ├── layout/
│   │   ├── header.css        # Header styles
│   │   ├── footer.css        # Footer styles
│   │   ├── grid.css          # Grid and container layouts
│   │   └── navigation.css    # Navigation styles
│   │
│   ├── components/
│   │   ├── buttons.css       # Button components
│   │   ├── cards.css         # Card components (reviews)
│   │   └── forms.css         # Form components
│   │
│   ├── pages/
│   │   └── home.css          # Home page specific styles
│   │
│   └── main.css              # Imports all CSS files
│
├── js/
│   ├── core/
│   │   ├── dom.js            # DOM helper functions
│   │   └── utils.js          # Utility functions
│   │
│   ├── components/
│   │   ├── navbar.js         # Navigation component
│   │   └── scroll-animations.js  # Scroll animations
│   │
│   ├── pages/
│   │   └── home.js           # Home page specific JS
│   │
│   └── main.js               # JS entry point
│
└── README.md
```

## Getting Started

1. Open `index.html` in your web browser
2. No build process or dependencies required - pure HTML, CSS, and JavaScript

## File Organization

### CSS Structure
- **Base**: Foundational styles (reset, variables, typography)
- **Layout**: Structural components (header, footer, grid, navigation)
- **Components**: Reusable UI components (buttons, cards, forms)
- **Pages**: Page-specific styles

### JavaScript Structure
- **Core**: Utility functions and DOM helpers
- **Components**: Reusable JavaScript components
- **Pages**: Page-specific JavaScript logic

### Assets
- **Hero**: Background images for hero sections
- **Icons**: Icons, logos, and button images
- **Gallery**: Content images and photos

## Features

- ✅ Modular CSS architecture
- ✅ Organized JavaScript components
- ✅ Responsive design
- ✅ Smooth scrolling navigation
- ✅ Scroll animations
- ✅ Mobile-friendly menu
- ✅ Form handling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
Edit `css/base/variables.css` to change the color scheme.

### Fonts
Update font imports in `index.html` and font-family in `css/base/typography.css`.

### Adding New Components
1. Create component CSS in `css/components/`
2. Create component JS in `js/components/`
3. Import in `css/main.css` and initialize in `js/main.js`

## Notes

- All images are organized in the `assets/images/` directory
- CSS is imported through `css/main.css`
- JavaScript files are loaded in order at the bottom of `index.html`
- The site uses vanilla JavaScript (no frameworks required)
