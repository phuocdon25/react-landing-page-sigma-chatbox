# 🚀 Sigma Chat Box - AI Sales Assistant UI Template

Sigma Chat Box is a high-performance, modern landing page built with **React** and **Tailwind CSS**. It is designed specifically for SaaS platforms offering AI-powered e-commerce solutions, featuring a high-fidelity interactive chat simulation.

---

## 🌟 Key Features

- **Interactive AI Simulation**: A fully functional mock chat widget that simulates real-time AI responses, typing states, and quick action buttons.
- **Modern UI/UX**: Inspired by industry-leading e-commerce assistants (like Bitu AI), featuring vibrant gradients (Rose/Pink), smooth animations, and clean typography.
- **Fully Responsive**: Optimized for every screen size, from ultra-wide desktops to mobile devices.
- **Modular Component Architecture**: Built with reusable React components (Navbar, Hero, Features, Footer, etc.) for easy scalability.
- **No-Build ESM Setup**: Uses direct ESM imports from `esm.sh`, allowing for rapid prototyping without complex build tools like Webpack or Vite for simple previews.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Assets**: 
    - [DiceBear](https://www.dicebear.com/) (AI Avatars)
    - [Google Fonts](https://fonts.google.com/) (Inter)
- **Deployment/Imports**: [esm.sh](https://esm.sh/)

---

## 🚀 Getting Started

Since this project uses modern ES modules and imports directly from a CDN, you need a local web server to run it correctly due to CORS and module security policies.

### 1. Prerequisites
- A modern web browser (Chrome, Edge, Firefox, or Safari).
- A local development server (like `npx serve`, VS Code Live Server, or Python's `http.server`).

### 2. Installation
1.  **Clone or Download** the project files to your local machine.
2.  **Navigate** to the project root directory.

### 3. Running the App
Choose one of the following methods to serve the files:

**Using Node.js (Recommended):**
```bash
npx serve .
```
Then open `http://localhost:3000` in your browser.

**Using Python:**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using VS Code:**
- Install the **"Live Server"** extension.
- Right-click `index.html` and select **"Open with Live Server"**.

---

## 📂 Project Structure

```text
.
├── index.html          # Entry HTML file with Tailwind & Import Maps
├── index.tsx           # React mounting point
├── App.tsx             # Main layout & section management
├── types.ts            # TypeScript interfaces
├── components/         # Reusable UI components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Above-the-fold section
│   ├── SigmaChatPreview.tsx # Interactive Chat Widget (Simulated)
│   ├── AIAdvisor.tsx   # Detailed AI Consulting section
│   ├── Features.tsx    # Product benefits showcase
│   └── Footer.tsx      # Multi-column site footer
└── services/
    └── geminiService.ts # Placeholder for future AI integration
```

---

## 🧪 Mock Interaction Logic

The current version of the "Sigma Assistant" uses a simulated logic layer located in `components/SigmaChatPreview.tsx`. It handles:
- **Typing Indicators**: Visual feedback when the "AI" is processing.
- **Quick Actions**: Preset buttons for common queries like "Warranty Policy" or "Order Tracking".
- **Dynamic Response Map**: A simple key-value pair system to provide contextual answers without an external API.

*Note: To integrate real AI (Google Gemini), you can configure the `askSigmaAI` function in `services/geminiService.ts` by adding your API key.*

---

## 📝 Customization

- **Branding**: Change the primary colors in `tailwind.config` (or the global script) from `rose` to your preferred brand color.
- **Chat Persona**: Edit the `responses` object in `SigmaChatPreview.tsx` to change how the assistant talks.
- **Mascot**: Swap the `dicebear.com` seed in the `img` tags to change the AI's appearance.

---

**Sigma Chat Box** - *Turning conversations into conversions.* 📈