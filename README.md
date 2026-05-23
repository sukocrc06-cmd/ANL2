# ANL Vertex - Denetimli Makine Öğrenimi Portalı (Supervised ML Portal)

ANL Vertex is a modern, responsive web portal that showcases supervised machine learning models customized for various industry sectors, including Non-Profit Associations, Education, Food, Transportation/Logistics, and Textile Retail. It provides users with interactive dashboards, feature importance visualization, dynamic what-if simulation scenarios, and AI fairness auditing tools.

---

## Workspace File Overview

Here is a list and description of the files that constitute the ANL Vertex application:

### 1. [`index.html`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/index.html)
* **Description:** The primary HTML entry point. It contains the structure of the web application, supporting localized Turkish (TR) and English (EN) content. It sets up the layout for:
  * The landing/introduction pages and sector showcase cards.
  * The secure temporary access card generator and login portal (with QR-code-based mobile access links).
  * The comprehensive data analytics dashboard containing simulation sliders, customer datasets, model pipeline flowcharts, the Aura AI Advisor, and the AI Fairness Gauge.

### 2. [`app.js`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/app.js)
* **Description:** The core client-side JavaScript engine. It handles all interactive functionalities, including:
  * Application state management, bilingual translations, and theme switching per sector.
  * Mock machine learning inference solvers (Decision Trees, Logistic Regression, Linear Regression, and K-Nearest Neighbors).
  * Interactive SVG visualizations of models (decision trees, regression lines, and classification clusters).
  * Feature importance calculations, LIME/SHAP-like dynamic Explainable AI (XAI) explanations, and the what-if simulation comparison system.
  * PDF generation for A4 reports and CSV/Excel exports of customer data.

### 3. [`style.css`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/style.css)
* **Description:** The main stylesheet containing the visual design system. Key styles include:
  * Custom HSL color variables and dynamic sector-themed accents (e.g. primary, secondary, and success colors).
  * High-end glassmorphism layouts (`glass-card`), responsive grid structures, and modern typography (using Google Fonts).
  * Fluid micro-animations (pulse alerts, rotate spinners, fade-in transitions) and interactive hover effects.

### 4. [`server.js`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/server.js)
* **Description:** A lightweight local static server written in Node.js.
  * Runs on port `8000` to serve the project files.
  * Features path-traversal security protection and maps correct MIME headers (`.html`, `.css`, `.js`, etc.) for static resource delivery.

### 5. [`qrcode.min.js`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/qrcode.min.js)
* **Description:** A third-party utility library used to automatically generate high-definition QR codes for scanning and mobile authentication.

### 6. [`README.md`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/README.md)
* **Description:** This file, providing a detailed overview, listing, and description of the workspace layout and system files.

### 7. [`.gitattributes`](file:///c:/Users/sukru/OneDrive/Desktop/My_Project/ANL2/.gitattributes)
* **Description:** Git configuration file used to manage line endings (`CRLF` vs `LF`) and enforce file type settings.

---

## How to Run the Application Locally

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Open your terminal in the project directory.
3. Start the static Node.js server:
   ```bash
   node server.js
   ```
4. Open your web browser and navigate to:
   ```
   http://localhost:8000
   ```
