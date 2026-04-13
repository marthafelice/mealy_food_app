# 🍔 Mealy — Food Delivery Web App

> Browse restaurants, explore menus, and place orders through a fast, responsive interface built with React and Vite.

🌐 **Live Demo:** [mealy-food-app.onrender.com](https://mealy-food-app.onrender.com/)

---

## 📌 Overview

Mealy is a modern food delivery web application that lets users discover restaurants, browse menus by category, and complete a delivery order flow — all through a smooth, mobile-friendly UI.

The project consumes a live REST API for restaurant and menu data and showcases real-world frontend engineering: global state management with Redux Toolkit, client-side routing, asynchronous API calls, interactive maps, and a fully responsive component-based architecture.

---

## ✨ Features

- 🍽 **Restaurant & menu browsing** — dynamically fetched from a REST API
- 🛒 **Cart management** — add and remove items with global state
- 📍 **Delivery order flow** — address and delivery UI
- 🔎 **Restaurant listing & filtering** — search by keyword or category
- 🗺 **Map integration** — location support via React Leaflet
- 📱 **Fully responsive** — optimised for mobile and desktop
- ⚡ **Fast builds** — Vite for near-instant dev server and optimised production output
- 🧭 **Client-side routing** — seamless navigation via React Router DOM

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Routing | React Router DOM |
| State Management | Redux Toolkit + React Redux |
| API Calls | Axios |
| Forms | React Hook Form |
| Maps | React Leaflet |
| Icons & UI | React Icons + Custom CSS |

---

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # App pages (Landing, Checkout, Delivery, etc.)
├── redux/          # Redux slices and store configuration
├── images/         # Static assets (food & restaurant images)
├── styles/         # CSS styling files
├── App.jsx         # Main application wrapper
└── main.jsx        # Entry point
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/marthafelice/mealy_food_app.git
cd mealy_food_app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

App runs at **http://localhost:5173**

### Other Scripts

```bash
npm run build      # Production build → /dist
npm run preview    # Preview the production build locally
```

---

## 🔌 API Reference

The app consumes a hosted REST API backend:

**Base URL:** `https://mealyapp-bdev.onrender.com/api/v1/`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/restaurant/keyword/?restaurants=Delivery` | Fetch restaurants by keyword |

---

## 🌍 Deployment

Deployed on **Render** as a static site.

| Setting | Value |
|---|---|
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |
| Live URL | https://mealy-food-app.onrender.com/ |

---

## ⚠️ Known Limitations

- No user authentication implemented yet
- Cart state is not persisted across sessions
- Large bundle size due to image assets (to be optimised)
- Basic cart logic — payment integration not yet included

---

## 📈 Roadmap

- [ ] 💳 Payment integration (Stripe / Flutterwave)
- [ ] 👤 User authentication & profile management
- [ ] 📦 Real-time order tracking
- [ ] 🧑‍🍳 Admin dashboard for restaurant management
- [ ] ⚡ Code splitting and bundle size optimisation
- [ ] 🧠 Advanced caching for API responses

---

## 👩‍💻 Author

**Martha Akora**
- GitHub: [@marthafelice](https://github.com/marthafelice)

---

## 📜 License

This project is for portfolio and educational purposes.