# Portfolio Website

This is my personal portfolio website, built with **React**, **Tailwind
CSS**, and **Framer Motion**. It showcases selected projects, technical
reports, and creative work with a modern, minimal design.

## 🚀 Features

-   **Responsive design** --- Optimized for desktop, tablet, and mobile.
-   **Smooth animations** --- Section fades and transitions powered by
    [Framer Motion](https://www.framer.com/motion/).
-   **Tailwind CSS utility classes** --- Clean, customizable styling
    without writing lots of custom CSS.
-   **Routing** --- Project pages managed with [React
    Router](https://reactrouter.com/).
-   **Project pages** --- Dedicated writeups with links to full reports
    (e.g., HAB Forecasting Technical Report).
-   **PDF Integration** --- Technical documents can be opened or
    downloaded directly from the site.

## 📂 Project Structure

    portfolio/
    ├── public/               # Static assets (PDFs, images, favicon, etc.)
    │   └── assets/
    │       └── Technical_Report.pdf
    ├── src/
    │   ├── components/       # Reusable UI components
    │   ├── pages/            # Individual pages (Home, HABProject, etc.)
    │   │   └── HABProject.jsx
    │   ├── App.jsx           # App-level routing
    │   ├── index.css         # Tailwind CSS entry
    │   └── main.jsx          # React entry point
    ├── tailwind.config.js    # Tailwind customization
    ├── package.json
    └── README.md             # Project documentation

## 🛠️ Getting Started

### 1. Clone the repo

``` bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Run the development server

``` bash
npm run dev
```

The site will be available at <http://localhost:5173> (Vite default).

### 4. Build for production

``` bash
npm run build
npm run preview
```

## 📑 Adding Projects

To add a new project page: 1. Create a new file in `src/pages/` (e.g.,
`MyProject.jsx`). 2. Follow the structure in `HABProject.jsx` for
consistency. 3. Add a route in `App.jsx`. 4. Place supporting files
(images, PDFs) into `public/assets/`.

## 🌐 Deployment

The site can be deployed easily on: - [Vercel](https://vercel.com/)\
- [Netlify](https://www.netlify.com/)\
- [GitHub Pages](https://pages.github.com/)

For Vercel:

``` bash
npm run build
vercel deploy
```

## 📄 License

This portfolio is released under the MIT License. You're welcome to fork
and adapt it for your own use.
