# GK Computer Service 🖥️

**Official website for GK Computer Service** — Custom PC builds, expert repairs, and hardware upgrades in Mohan Garden, New Delhi. Customers can browse services, submit build orders, and connect instantly via WhatsApp.

🌐 **Live Site:** [sharmashyama1988-eng.github.io/gk-computer-service](https://sharmashyama1988-eng.github.io/gk-computer-service)

---

## About

GK Computer Service is a trusted computer hardware shop based in Mohan Garden, New Delhi (Sanik Enclave, Block R). We specialize in building custom PCs for gaming, video editing, office use, and study — tailored to every customer's budget and requirements. We also offer repair, diagnostics, hardware upgrades, software setup, and routine maintenance.

---

## Features

The website is built as a single-page application with no external dependencies, making it fast and easy to maintain.

- **Service Showcase** — Clear overview of all services offered, from custom builds to maintenance.
- **Order Form** — Customers fill in their name, budget, use case, and specs; the form composes a WhatsApp message and sends it directly to the shop.
- **WhatsApp Integration** — One-click ordering and direct chat via `wa.me` links.
- **Google Maps Embed** — Embedded location map for easy navigation to the shop.
- **Fully Responsive** — Mobile-friendly design that works on all screen sizes.
- **Animated UI** — Scroll reveal animations, hover effects, and a custom cursor for a modern experience.

---

## Tech Stack

This project uses only vanilla web technologies — no frameworks, no build tools, no dependencies.

- **HTML5** — Page structure and content
- **CSS3** — Styling, animations, and responsive layout (CSS Grid & Flexbox)
- **Vanilla JavaScript** — WhatsApp order logic, scroll animations, and interactive elements

---

## Project Structure

```
gk-computer-service/
├── index.html       # Main website (single page)
├── style.css        # All styles and animations
├── script.js        # WhatsApp order logic and interactions
├── images/          # Logo and other assets
└── README.md        # Project documentation
```

---

## How the Order Form Works

When a customer submits the order form, the JavaScript collects their name, budget, use case, and specifications, formats it into a structured WhatsApp message, and redirects them to `wa.me/919716552036` with the message pre-filled. This allows the shop owner to receive and respond to orders instantly without any backend server.

---

## Local Development

No build step is required. Simply clone the repository and open `index.html` in any browser.

```bash
git clone https://github.com/sharmashyama1988-eng/gk-computer-service.git
cd gk-computer-service
# Open index.html in your browser
```

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch. Any commit pushed to `main` is automatically reflected on the live site within a few minutes.

To enable GitHub Pages: go to **Settings → Pages → Source → main branch → Save**.

---

## Contact

**GK Computer Service**
Sanik Enclave 45/2, Gandhi Chowk, Block R,
Mohan Garden, Razapur Khurd, New Delhi — 110059

📞 [+91 97165 52036](tel:+919716552036)
💬 [WhatsApp](https://wa.me/919716552036)

---

© 2025 GK Computer Service. All rights reserved.
