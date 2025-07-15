<!-- Animated Invoice Icon -->
<p align="center">
  <img src="public/logo.png" alt="Invoice Generator Pro Logo" width="120"/>
</p>

<h1 align="center">Invoice Generator Pro – LekhPatra <img src="https://tabler.io/icons/icon/file-invoice.svg" width="32" style="vertical-align:middle;"/> </h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.16-black?logo=nextdotjs&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/React-18-blue?logo=react&style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38bdf8?logo=tailwindcss&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/TypeScript-5-blue?logo=typescript&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Premium%20UI-✨-purple?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Privacy%20First-100%25-green?style=for-the-badge"/>
</p>

---

> **Create, preview, and download beautiful invoices in seconds.**<br/>
> <b>Modern, animated, and privacy-first invoice generator for freelancers, businesses, and creators.</b>

---

## 🚀 Features

- 🚀 **Instant Invoice Creation** – Fill, preview, and download PDF invoices in seconds.
- 👤 **Sender & Recipient Details** – Add name, email, address, and mobile number for both parties.
- 💸 **Multi-currency & Tax** – Supports any currency, item/invoice discounts, and tax rates.
- 🏦 **Bank/Payment Details** – Add bank name, account, IFSC, SWIFT/BIC, etc.
- 👁️ **Live Preview** – See your invoice update in real-time as you type.
- 📥 **PDF Download** – Download ready-to-send, professional PDF invoices.
- 🎨 **Custom Logo & Branding** – Upload your logo or use the default.
- 🔒 **Privacy-First** – All data stays on your device. No signup, no tracking.
- 📱 **Responsive & Mobile-Ready** – Works beautifully on all devices.
- ✨ **Premium UI/UX** – Built with modern design, smooth animations, and best practices.

---

## 🎬 Animated Demo

<p align="center">
  <img src="public/logo.png" alt="Demo Screenshot" width="320"/>
</p>

---

## 🧩 How It Works

1. <img src="https://tabler.io/icons/icon/pencil.svg" width="18"/> **Fill Invoice Details** – Enter sender, recipient, items, payment, and notes.
2. <img src="https://tabler.io/icons/icon/eye.svg" width="18"/> **Live Preview** – Instantly see your invoice update as you type.
3. <img src="https://tabler.io/icons/icon/file-download.svg" width="18"/> **Download PDF** – Click to download a professional invoice PDF.
4. <img src="https://tabler.io/icons/icon/smartphone.svg" width="18"/> **Send or Print** – Share or print your invoice, ready for your client.

---

## 💡 Use Cases & Problems Solved

- <img src="https://tabler.io/icons/icon/briefcase.svg" width="18"/> **Freelancers** – Bill clients with professional, branded invoices.
- <img src="https://tabler.io/icons/icon/building-store.svg" width="18"/> **Small Businesses** – Generate GST-ready or global invoices in seconds.
- <img src="https://tabler.io/icons/icon/rocket.svg" width="18"/> **Startups & Creators** – Save time, look premium, and get paid faster.
- <img src="https://tabler.io/icons/icon/lock.svg" width="18"/> **Privacy Advocates** – No data leaves your device. 100% privacy.
- <img src="https://tabler.io/icons/icon/clock.svg" width="18"/> **Anyone** – Need a quick, beautiful invoice? This is for you.

---

## 🛠️ Tech Stack

| Tech           | Description                | Icon |
|----------------|----------------------------|------|
| Next.js        | React framework            | ![Next.js](https://img.shields.io/badge/-Next.js-black?logo=nextdotjs) |
| React          | UI library                 | ![React](https://img.shields.io/badge/-React-61DAFB?logo=react) |
| TypeScript     | Type safety                | ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript) |
| Tailwind CSS   | Utility-first CSS          | ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38BDF8?logo=tailwindcss) |
| jsPDF          | PDF generation             | 📄 |
| html2canvas    | HTML to image for PDF      | 🖼️ |
| Lucide Icons   | Modern SVG icons           | ✨ |

---

## ✨ Why Choose Invoice Generator Pro?

- **No Login, No Signup, No Ads**
- **100% Privacy** – All data is local, nothing is sent to a server.
- **Lightning Fast** – Create and download invoices in seconds.
- **Premium UI/UX** – Modern, animated, and beautiful.
- **Mobile-First** – Works on any device, anywhere.
- **Customizable** – Add your logo, branding, and details.
- **Open Source** – Fork, contribute, or self-host.

---

## 📸 Screenshots

<p align="center">
  <img src="public/logo.png" alt="App Screenshot" width="320"/>
</p>

---

## 📝 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/NarenderSD/lekhpatra.git
   cd invoice-generator
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```
3. **Run locally:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
4. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

---

## 🤝 Contribution

- PRs welcome! For major changes, please open an issue first.
- See the [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License.

---

## 🗂️ Project Structure

```plaintext
invoice-generator/
  ├── app/
  │   ├── globals.css
  │   ├── layout.tsx
  │   └── page.tsx
  ├── components/
  │   ├── invoice-form.tsx
  │   ├── invoice-generator.tsx
  │   ├── invoice-preview.tsx
  │   ├── theme-provider.tsx
  │   ├── theme-toggle.tsx
  │   └── ui/
  ├── hooks/
  ├── lib/
  ├── public/
  ├── styles/
  ├── types/
  ├── package.json
  ├── tailwind.config.js
  ├── tsconfig.json
  └── ...
```

> **Note:** To view the diagram below, make sure GitHub's "Markdown: Enable Mermaid" feature is enabled in your profile settings (or use VS Code with Mermaid preview).

```mermaid
flowchart TD
  A[app/] --> B1[globals.css]
  A --> B2[layout.tsx]
  A --> B3[page.tsx]
  C[components/] --> D1[invoice-form.tsx]
  C --> D2[invoice-generator.tsx]
  C --> D3[invoice-preview.tsx]
  C --> D4[theme-provider.tsx]
  C --> D5[theme-toggle.tsx]
  C --> D6[ui/]
  E[hooks/]
  F[lib/]
  G[public/]
  H[styles/]
  I[types/]
  J[package.json]
  K[tailwind.config.js]
  L[tsconfig.json]
```

---

## 🤝 Connect with Me

[![LinkedIn: Narender Singh](https://img.shields.io/badge/-Narender%20Singh-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/narendersingh1/)](https://www.linkedin.com/in/narendersingh1/)

---

<p align="center">
  <b>Build by Narender Singh</b> 🚀
</p> 