# 🌐 Portfolio Website

A personal portfolio website built with Next.js and Tailwind CSS v4, hosted on AWS Amplify with a custom domain. It highlights projects, experience, and skills in a clean, responsive design.

## 🚀 Features

Responsive UI – Works across desktop, tablet, and mobile

Featured Projects Carousel – Highlighted projects with images and links

Dynamic Routing – Project pages generated from JSON data

SEO Ready – Includes metadata, sitemap, and robots configuration

Modern Styling – Built with Tailwind CSS v4 for consistent, minimal design

Hosting & CI/CD – Deployed with AWS Amplify connected to GitHub

## 🛠️ Tech Stack

Next.js
 – React framework for server-side rendering and static generation

Tailwind CSS
 – Utility-first CSS framework

Lucide Icons
 – Icon library

TypeScript
 – Strongly typed JavaScript

AWS Amplify
 – Hosting & deployment

GitHub Actions
 – CI/CD automation

## 📂 Project Structure
```(bash)
.
├── app/                  # Next.js app directory
│   ├── data/projects.json # Project data 
│   ├── types/            # TypeScript interfaces
│   └── ...
├── components/           # Reusable React components
├── public/               # Static assets (images, icons, etc.)
├── styles/               # Global CSS/Tailwind configs
├── package.json
├── tailwind.config.ts
└── README.md
```
## ⚙️ Getting Started
1. Clone the repository
```(bash)
git clone https://github.com/thomasity/portfolio-website.git
cd portfolio-website
```
2. Install dependencies
```(bash)
npm install
# or
yarn install
```

3. Run the development server
```(bash)
npm run dev
# or
yarn dev
```

Open http://localhost:3000
 in your browser.

## 🌍 Deployment

This project is deployed on AWS Amplify.
Every push to the main branch triggers a new build and deployment via GitHub Actions.

To deploy manually:

```(bash)
npm run build
npm run start
```

## 📝 Customization

* Add/edit projects in app/data/projects.json

* Update metadata in app/layout.tsx

* Replace images in public/

* Update Tailwind theme in tailwind.config.ts

## 📜 License

This project is open source under the MIT License
.
