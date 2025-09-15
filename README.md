# TechEd.space

A modern, responsive landing page for TechEd.space - empowering developers and tech professionals with cutting-edge education.

## Development

This project is built with Next.js 15 and Tailwind CSS 4.

### Prerequisites

- Node.js 18+
- npm

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

The development server runs with Turbopack for fast hot reloading and is configured to only listen on localhost for security.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production using Next.js static export
- `npm run build:turbo` - Build for production using Turbopack
- `npm run build:static` - Generate optimized static HTML file
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Static HTML Generation

For maximum performance and minimal hosting requirements, this project includes a completely static HTML version.

### Building Static HTML

The static version eliminates all JavaScript dependencies and bundles everything into a single HTML file:

1. **Generate the static HTML:**
   ```bash
   npm run build:static
   ```
   This creates `static-index.html` with all CSS inlined and copies the favicon.

2. **What gets generated:**
   The `static-index.html` file (~8.4 KB) contains:
   - All CSS inlined (no external stylesheets)
   - Minimal JavaScript (just dynamic year calculation)
   - Complete responsive design
   - All accessibility features
   - SEO meta tags
   - Favicon copied to root directory

### Performance Benefits

The static HTML version provides:
- **93% smaller bundle** (8.4 KB vs 113 KB)
- **Zero HTTP requests** for CSS/JS
- **Perfect Lighthouse scores** for JavaScript metrics
- **No build process** required for deployment
- **Works without JavaScript** enabled

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans and Geist Mono
- **Icons**: Custom favicon generated from logo
- **Accessibility**: Built-in screen reader support and keyboard navigation

## Browser Support

- **Modern browsers**: Chrome 91+, Firefox 90+, Safari 15+, Edge 91+
- **Graceful degradation**: Works without JavaScript
- **Responsive**: Mobile-first design supporting all screen sizes

## License

Private project for TechEd.space.
