# 💼 My Portfolio Website

This is a personal portfolio website built using **ReactJS** and **Vite**, designed to showcase my skills, projects, and contact information. The site is responsive, user-friendly, and deployed on both **GitHub Pages** and **Netlify**.

---

## 📌 Table of Contents

- [Demo](#-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Deployment](#-deployment)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 Demo

🌐 Live Website (GitHub Pages):  
[https://bhargava2188.github.io/my-portfolio](https://bhargava2188.github.io/my-portfolio/)


🌐 Live Website (Netlify):  
[https://friendly-treacle-09fd65.netlify.app](https://friendly-treacle-09fd65.netlify.app)

---

## ✨ Features

- 📱 Responsive Design (Mobile, Tablet, Desktop)
- 🧭 Navbar with routing (React Router)
- 🏠 Home, About, Projects, and Contact sections
- ✅ Clean layout using modern CSS
- 🎨 Custom fonts (Poppins)
- 🎬 Smooth animations (CSS transitions)
- 🔗 External links to GitHub/LinkedIn

## 🧰 Getting Started

### 1. Clone the Repository
git clone https://github.com/Bhargava2188/my-portfolio.git
cd my-portfolio

npm install
npm run dev



my-portfolio/
├── public/
│   └── _redirects (for Netlify routing)
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── index.html
├── vite.config.js
├── package.json
└── README.md


🚀 Deployment:
npm install gh-pages --save-dev
base: '/my-portfolio/',
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
npm run deploy

Netlify:
npm run build
📬 Contact
Created by Bhargav Sai Cherukuri

GitHub: Bhargava2188

Netlify: https://mellifluous-kelpie-398132.netlify.app/



