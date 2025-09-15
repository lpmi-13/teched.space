#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Build script to generate a completely static HTML file with inlined CSS and minimal JavaScript
 * This eliminates all external dependencies for maximum Lighthouse performance
 */

console.log('🚀 Building static HTML file...');

// Get the current year for the copyright
const currentYear = new Date().getFullYear();

// Static HTML template with inlined CSS
const staticHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>TechEd.space - Technology Education Platform</title>
    <meta name="description" content="Empowering developers and tech professionals with cutting-edge education and training solutions."/>
    <meta name="author" content="TechEd.space"/>
    <meta name="keywords" content="technology education, developer training, tech courses, education"/>
    <meta property="og:title" content="TechEd.space - Technology Education Platform"/>
    <meta property="og:description" content="Empowering developers and tech professionals with cutting-edge education and training solutions."/>
    <meta property="og:url" content="https://teched.space/"/>
    <meta property="og:site_name" content="TechEd.space"/>
    <meta property="og:type" content="website"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="TechEd.space - Technology Education Platform"/>
    <meta name="twitter:description" content="Empowering developers and tech professionals with cutting-edge education and training solutions."/>
    <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
    <style>
        /* Essential CSS inlined */
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        :root {
            --color-blue-50: oklch(97% .014 254.604);
            --color-blue-400: oklch(70.7% .165 254.624);
            --color-blue-600: oklch(54.6% .245 262.881);
            --color-indigo-100: oklch(93% .034 272.788);
            --color-gray-200: oklch(92.8% .006 264.531);
            --color-gray-300: oklch(87.2% .01 258.338);
            --color-gray-600: oklch(44.6% .03 256.802);
            --color-gray-700: oklch(37.3% .034 259.733);
            --color-gray-800: oklch(27.8% .033 256.848);
            --color-gray-900: oklch(21% .034 264.665);
            --color-white: #fff;
        }

        html {
            line-height: 1.5;
            font-family: system-ui, -apple-system, sans-serif;
            scroll-behavior: smooth;
            font-size: 16px;
        }

        body {
            background: linear-gradient(to bottom right, var(--color-blue-50), var(--color-indigo-100));
            color: var(--color-gray-900);
            font-family: system-ui, -apple-system, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .skip-link {
            position: absolute;
            top: -9999px;
            left: -9999px;
            background: var(--color-blue-600);
            color: var(--color-white);
            padding: 1rem;
            border-radius: 0.375rem;
            text-decoration: none;
            z-index: 50;
        }

        .skip-link:focus {
            position: absolute;
            top: 1rem;
            left: 1rem;
        }

        main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1rem;
        }

        .container {
            max-width: 56rem;
            margin: 0 auto;
            text-align: center;
        }

        .header {
            margin-bottom: 2rem;
        }

        .title {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--color-gray-900);
            margin-bottom: 1rem;
            letter-spacing: -0.025em;
            line-height: 1.25;
        }

        .title-accent {
            color: var(--color-blue-600);
        }

        .divider {
            width: 4rem;
            height: 0.25rem;
            background-color: var(--color-blue-600);
            margin: 0 auto 1.5rem;
        }

        .subtitle {
            font-size: 1.25rem;
            font-weight: 300;
            color: var(--color-gray-700);
            margin-bottom: 1.5rem;
            line-height: 1.625;
            padding: 0 0.5rem;
        }

        footer {
            padding: 1.5rem 1rem;
            border-top: 1px solid var(--color-gray-200);
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(8px);
        }

        .footer-content {
            max-width: 56rem;
            margin: 0 auto;
            text-align: center;
        }

        .footer-text {
            color: var(--color-gray-600);
            font-size: 0.875rem;
            line-height: 1.625;
        }

        /* Responsive design */
        @media (min-width: 475px) {
            .title {
                font-size: 3rem;
            }
            .subtitle {
                font-size: 1.5rem;
            }
        }

        @media (min-width: 640px) {
            main {
                padding: 3rem 1.5rem;
            }
            .header {
                margin-bottom: 3rem;
            }
            .title {
                font-size: 3.75rem;
                margin-bottom: 1.5rem;
            }
            .divider {
                width: 6rem;
                margin-bottom: 2rem;
            }
            .subtitle {
                font-size: 1.875rem;
                padding: 0;
            }
            footer {
                padding: 2rem 1.5rem;
            }
        }

        @media (min-width: 768px) {
            .title {
                font-size: 4.5rem;
            }
            .subtitle {
                font-size: 2.25rem;
            }
        }

        @media (min-width: 1024px) {
            main {
                padding: 3rem 2rem;
            }
            .title {
                font-size: 6rem;
            }
            footer {
                padding: 2rem 2rem;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            body {
                background: linear-gradient(to bottom right, var(--color-gray-900), var(--color-gray-800));
                color: var(--color-white);
            }

            .title {
                color: var(--color-white);
            }

            .title-accent {
                color: var(--color-blue-400);
            }

            .divider {
                background-color: var(--color-blue-400);
            }

            .subtitle {
                color: var(--color-gray-300);
            }

            footer {
                border-top-color: var(--color-gray-700);
                background-color: rgba(31, 41, 55, 0.5);
            }

            .footer-text {
                color: var(--color-gray-400);
            }
        }

        /* Accessibility */
        :focus {
            outline: 2px solid var(--color-blue-600);
            outline-offset: 2px;
        }

        @media (prefers-contrast: high) {
            :root {
                --color-gray-900: #000;
                --color-white: #fff;
                --color-blue-600: #0000ff;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto;
            }
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <main id="main-content">
        <div class="container">
            <header class="header">
                <h1 class="title">
                    TechEd<span class="title-accent">.space</span>
                </h1>
                <div class="divider"></div>
            </header>

            <section>
                <h2 class="subtitle">
                    Empowering developers and tech professionals with cutting-edge education
                </h2>
            </section>
        </div>
    </main>

    <footer>
        <div class="footer-content">
            <p class="footer-text">
                &copy; <script>document.write(new Date().getFullYear())</script><noscript>${currentYear}</noscript> TechEd.space. Transforming tech education, one developer at a time.
            </p>
        </div>
    </footer>
</body>
</html>`;

// Create build directory if it doesn't exist
const buildDir = 'publish';
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
}

// Write the static HTML file
try {
    const outputPath = path.join(buildDir, 'index.html');
    fs.writeFileSync(outputPath, staticHTML, 'utf8');

    // Get file size for reporting
    const stats = fs.statSync(outputPath);
    const fileSizeInBytes = stats.size;
    const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(1);

    console.log('✅ Static HTML file generated successfully!');
    console.log(`📁 File: ${outputPath} (${fileSizeInKB} KB)`);
    console.log('🎯 Features included:');
    console.log('   • All CSS inlined (no external stylesheets)');
    console.log('   • Minimal JavaScript (just dynamic year)');
    console.log('   • Complete responsive design');
    console.log('   • Accessibility features');
    console.log('   • SEO meta tags');
    console.log('   • Dark mode support');
    console.log('');
    console.log('🚀 Ready for deployment! Use this file for maximum performance.');

    // Copy favicon for static deployment
    const faviconSource = 'src/app/favicon.ico';
    const faviconDest = path.join(buildDir, 'favicon.ico');

    if (fs.existsSync(faviconSource)) {
        fs.copyFileSync(faviconSource, faviconDest);
        console.log('📱 Favicon copied to build directory for static deployment');
    } else {
        console.log('⚠️  Favicon not found at src/app/favicon.ico - you may need to copy it manually');
    }

} catch (error) {
    console.error('❌ Error generating static HTML file:', error.message);
    process.exit(1);
}
