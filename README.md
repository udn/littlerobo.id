# littlerobo.id

Landing page for Littlerobo.id - Institusi Pendidikan Robotika untuk Anak 4-12 Tahun dengan LEGO.

## 🚀 Live Demo

The site is automatically deployed to GitHub Pages: `https://udn.github.io/littlerobo.id`

## 📋 Features

- Modern, sleek design with white and pink color scheme
- Mobile-optimized for 99 web performance score
- Responsive design for all devices
- Three curriculum programs (Creative 4-6y, Builder 6-9y, Basic Robotic 9-12y)
- Contact form with validation
- Lightweight SVG illustrations
- Zero dependencies - vanilla HTML, CSS, and JavaScript

## 🛠️ Setup

### GitHub Pages Deployment

The site is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

**To enable GitHub Pages:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. The workflow will automatically deploy on the next push to `main`

### Local Development

Simply open `index.html` in a web browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
└── README.md           # This file
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `styles.css` (`:root`)
- **Content**: Update text in `index.html`
- **Styling**: Modify `styles.css`
- **Interactivity**: Edit `script.js`

## 📝 License

© 2026 Littlerobo.id - PAUD Jasmine Al-Muflihuun. All rights reserved.
