<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=HR%20Frames&fontSize=60&animation=fadeIn" alt="HR Frames Banner" />
  <h1 align="center">🖼️ HR Frames - Premium Photo Frame Storefront</h1>
  <p align="center">
    <strong>A modern, high-performance e-commerce frontend for custom photo frames and galleries.</strong>
  </p>
  <p align="center">
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
    <a href="https://cloudinary.com/"><img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" /></a>
  </p>
</div>

<br />

> **Welcome to the HR Frames frontend repository!** This application is a fully responsive, visually striking web platform built for a premium photo frame business. It features an elegant React/Vite interface that integrates with a backend API (like Django) to offer dynamic collections, a frame visualizer, and direct WhatsApp ordering.

## 📑 Table of Contents
- [✨ Key Features](#-key-features)
- [🏗️ Architecture](#-architecture)
- [🚀 Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🛠️ Configuration & Customization](#-configuration--customization)

---

## ✨ Key Features

- 🛍️ **Dynamic Collections:** Browse through 12 unique collections (Trending, Premium, Wedding, etc.) with filterable and sortable grids.
- 📱 **WhatsApp Integration:** Direct "Enquire/Order" buttons pre-filled with product details, sizes, and prices for seamless customer communication.
- 🖼️ **Interactive Frame Visualizer:** Users can upload a photo and instantly preview how it looks across 6 different frame styles (gold, walnut, rose gold, LED, etc.).
- ☁️ **Cloudinary Media Management:** All product and gallery images are dynamically fetched and optimized via Cloudinary APIs.
- ⚡ **Lightning Fast UI:** Powered by Vite and React, featuring smooth micro-animations and a responsive masonry gallery.
- 📏 **Standardized Sizes:** Dedicated Frame Sizes catalog showcasing premium cards with starting prices.

---

## 🏗️ Architecture

This repository contains the **Frontend** component of the HR Frames architecture:
- **Frontend (`/frontend`)**: A React 18 application bundled with Vite. It handles routing, UI state, Cloudinary image transformations, and WhatsApp deep linking.
- **Backend Connection**: The frontend is designed to consume a RESTful API (e.g., Django DRF). It serves as the visual layer and connects to the backend via endpoints configured in your `.env` file. *(Note: The backend code itself is maintained separately or externally).*

---

## 🚀 Getting Started

Follow these steps to run the HR Frames frontend on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- A Cloudinary Account (for image handling, optional for local testing)

### Installation & Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Set up environment variables:**
   Copy the example environment file and configure it:
   ```bash
   cp .env.example .env
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173`. 
*(Note: If the configured backend API is not reachable, the frontend will gracefully fall back to high-quality demo content).*

---

## 📂 Project Structure

```text
hr_frames/
├── frontend/                 # React + Vite Application
│   ├── public/               # Static assets
│   ├── src/                  # React source code
│   │   ├── api/              # API client and endpoints
│   │   ├── components/       # Reusable UI components
│   │   ├── config/           # App configuration (e.g., collections.js)
│   │   └── utils/            # Helpers (e.g., Cloudinary loader)
│   ├── .env.example          # Template for environment variables
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite bundler configuration
├── architecture_design.md    # Detailed system architecture docs
├── mysql_schema.md           # Database schema documentation
└── CHANGES_README.md         # Detailed changelog and release notes
```

---

## 🛠️ Configuration & Customization

To connect the frontend to your external backend and services, update the `.env` file in the `frontend/` directory:

```env
# Your Backend API URL (e.g., your Django server)
VITE_API_BASE_URL=https://api.yourbackend.com/api


```

---

<div align="center">
  <i>Built for high-performance visual commerce.</i>
</div>
