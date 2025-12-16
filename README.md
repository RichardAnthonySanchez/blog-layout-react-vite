# Earthy Blog (React + Vite)

This project is a **simple personal blog setup** built with React and Vite.
The goal is not scale, performance benchmarks, or feature density — just a clean place to write and publish pages with a **natural, earthy, editorial feel**.

## Purpose

- Create simple blog pages
- Focus on readability and typography
- Keep the layout calm, intentional, and uncluttered

## Stack

- **React + Vite** — fast, minimal setup
- **Tailwind CSS** — utility-first styling
- **Radix UI / shadcn-style components** — used sparingly
- **Playfair Display & Lato** — editorial typography
- **React Router** — basic page navigation
- **WordPress REST API** — content source

## Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- Access to a public WordPress site

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog-layout-react-vite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Environment Setup

> **⚠️ CRITICAL:** WordPress functionality will not work without proper environment configuration.

1. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **Add your WordPress API URL** to the `.env` file:
   ```env
   VITE_WP_API_URL=https://public-api.wordpress.com/wp/v2/sites/your-wordpress-site.wordpress.com
   ```

   Replace `https://public-api.wordpress.com/wp/v2/sites/your-wordpress-site.wordpress.com` with your actual public WordPress REST API base URL.


### Running Locally

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:8080
   ```

## Design Philosophy

- Editorial over application-like
- Whitespace over borders
- Typography first
- Subtle interactions only
- Neutral, earthy color palette (stone, clay, moss tones)

## What This Is _Not_

- A CMS
- A component showcase
- A complex state-driven app

## Usage

This repo is meant to be:

- Modified freely
- Refactored without ceremony
- Used as a personal writing space

No guarantees. No roadmap. Just a place to write.

---

**Want it more minimal, more poetic, or more technical?**
I can tune the tone in either direction or add a tiny “writing workflow” section if that’d help future-you.
