# My Portfolio | Full Stack Developer

[![Deploy to GitHub Pages](https://github.com/ape75/my_portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/ape75/my_portfolio/actions/workflows/deploy.yml)
[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![UI Library](https://img.shields.io/badge/UI%20Library-Mantine-339AF0?logo=mantine&logoColor=white)](https://mantine.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, responsive portfolio website showcasing my work as a **Full Stack Developer**. Built with React and Mantine UI, featuring a dark theme, project modals, and a functional contact form with EmailJS integration.

🔗 **Live Demo:** [ape75.github.io/my_portfolio](https://ape75.github.io/my_portfolio)

## ✨ Features

- 🎨 **Modern Dark Theme** – Clean, professional dark color scheme with gradient accents
- 📱 **Fully Responsive** – Optimized for desktop, tablet, and mobile devices with a collapsible navigation drawer
- 🖼️ **Project Showcase** – Interactive project cards with detailed modal views containing descriptions, features, contributions, and technology badges
- 📊 **Work Timeline** – Visual timeline of professional experience with company logos
- 📧 **Contact Form** – Functional contact form with EmailJS integration and Google reCAPTCHA spam protection
- 🚀 **CI/CD Pipeline** – Automated deployments via GitHub Actions on every push to main branch
- 🎯 **Smooth Scrolling** – Smooth navigation between sections with offset for sticky header
- 🎨 **Gradient Badges** – Custom gradient badges for technology tags
- 🖱️ **Scroll to Top** – Floating button appears after scrolling

## 🛠️ Built With

### Frontend
- [React](https://reactjs.org/) – UI library
- [Mantine](https://mantine.dev/) – Component library and hooks (v8)
- [Tabler Icons](https://tabler.io/icons) – Icon set
- [React Type Animation](https://www.npmjs.com/package/react-type-animation) – Animated typing effect for role text
- [Embla Carousel](https://www.embla-carousel.com/) – Image carousel for project screenshots

### Backend Services
- [EmailJS](https://www.emailjs.com/) – Email sending from frontend without a backend server
- [Google reCAPTCHA](https://www.google.com/recaptcha/about/) – Spam protection (v2 checkbox)

### Deployment
- [GitHub Pages](https://pages.github.com/) – Static hosting
- [GitHub Actions](https://github.com/features/actions) – CI/CD automation for automatic deployments


## 📁 Project Structure
```text
📦 my_portfolio/
├──📂public/
│   └──📂assets/
│       └──📂img/                    # Images, logos, screenshots
├──📂src/
│   ├──📂components/
│   │   ├──📂modals/                 # Project modal components
│   │   │   ├── 360SportModal.jsx
│   │   │   ├── DigimoiModal.jsx
│   │   │   ├── CalevaLABModal.jsx
│   │   │   └── KalibroModal.jsx
│   │   ├── CarouselComponent.jsx   # Reusable image carousel
│   │   ├── ContactForm.jsx         # Contact form with EmailJS
│   │   ├── Footer.jsx              # Footer with social links
│   │   ├── GradientBadge.jsx       # Reusable gradient badge
│   │   ├── MainContent.jsx         # Main page content
│   │   ├── MobileNav.jsx           # Mobile navigation drawer
│   │   ├── Nav.jsx                 # Desktop navigation
│   │   ├── ProjectCard.jsx         # Project card component
│   │   ├── ScrollToTopButton.jsx   # Scroll to top button
│   │   └── PolarLogo.jsx           # Polar AccessLink logo component
│   ├──📂constants/
│   │   ├── gradients.js            # Gradient definitions
│   │   └── icons.js                # Shared icon components
│   ├── App.js                      # Root component
│   ├── index.js                    # Entry point with providers
│   └── index.css                   # Global styles with dark theme
├──📂.github/workflows/
│   └──⚙️deploy.yml                  # GitHub Actions deployment workflow
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ape75/my_portfolio.git
cd my_portfolio
```
2. Install dependencies
```bash
npm install
```
3. Create a .env.local file for environment variables (for local development):
```bash
REACT_APP_SERVICE_ID=your_emailjs_service_id
REACT_APP_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```
4. Start the development server
```bash
npm start
```
The app will open at http://localhost:3000

## 📦 Building for Production
```bash
npm run build
```
The build artifacts will be stored in the build/ folder. To test the production build locally:

```bash
npx serve -s build
```

## 🌐 Deployment
This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

Automatic Deployment
1. Push to the main branch

2. GitHub Actions automatically builds and deploys

3. Site updates at https://ape75.github.io/my_portfolio

## 🔧 Environment Variables
| Variable | Description |Required
| ----------- | ----------- | ----------- |
REACT_APP_SERVICE_ID |	EmailJS Service ID |	Yes
REACT_APP_TEMPLATE_ID |	EmailJS Template ID |	Yes
REACT_APP_PUBLIC_KEY |	EmailJS Public Key |	Yes
REACT_APP_RECAPTCHA_SITE_KEY |	Google reCAPTCHA Site Key |	Yes

## GitHub Secrets Setup
For GitHub Actions to work, add these secrets to your repository:

Go to Settings → Secrets and variables → Actions

Add each variable as a repository secret (use the same names as above)

## 📧 Contact Form Setup
Create an EmailJS account

Set up an email service (Gmail, Outlook, SMTP, etc.)

Create an email template

Enable reCAPTCHA v2 in the EmailJS template settings

Add your credentials to GitHub Secrets for the Actions workflow

## reCAPTCHA Configuration
Add needed domains to your Google reCAPTCHA settings:

localhost (for local development)

your.production.domain (for production)

Add your credentials to GitHub Secrets for the Actions workflow