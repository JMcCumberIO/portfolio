# Jonathan McCumber's Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing professional experience, education, certifications, and technical skills.

## 🚀 Features

- Responsive design that works on all devices
- Dark/Light mode toggle with persistent theme preference
- Smooth scrolling navigation
- GitHub OAuth integration for authentication
- Interactive UI components
- Professional skill categorization
- Comprehensive certification display
- Detailed work experience timeline

## 🛠️ Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool
- **React Icons** - Icon library
- **Modern JavaScript (ES6+)**

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jmccumberio/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Build for production:

   ```bash
   pnpm build
   ```

## 🌐 Deployment

The site is optimized for deployment on any static hosting platform. The build process creates a `dist` folder with all the necessary files.

## Deploying to GitHub Pages

1. Build the project:

   ```bash
   pnpm build
   ```

2. Deploy the dist folder to the gh-pages branch:

   ```bash
   pnpm deploy
   ```

3. Access the deployed site at:

https://<username>.github.io/portfolio/

🐛 Troubleshooting
Debugging Login Button

## 🖥️ Local Development

To run the project locally:

1. Ensure you have Node.js installed (v16 or higher recommended)
2. Install pnpm if not already installed: `npm install -g pnpm`
3. Follow the installation steps above

🐛 Troubleshooting
Debugging Login Button
Ensure the LoginNav component is correctly imported and used in Navbar.jsx:

```javascript
import LoginNav from './LoginNav';

<div className="hidden md:block">
  <LoginNav />
</div>
```

## Common Issues

1. Dark Mode Not Persisting: Ensure localStorage is enabled in your browser.
2. Build Errors: Check that all dependencies are installed and up to date by running pnpm install.

## 📝 License

MIT License - feel free to use this code for your own portfolio!

## 📫 Contact

Feel free to reach out through the contact form on the website or connect on LinkedIn.

---
Built with ❤️ by Jonathan McCumber
