# 🧱 Project Structure

This project uses a **feature-based modular structure** for scalability, readability, and maintainability. Each feature encapsulates its own logic: UI components, services, hooks, and types.

## 📁 Folder Overview

```bash
.
├── app/                  # Next.js App Router entry points (routes only)
│   ├── layout.tsx
│   ├── page.tsx
│   └── dashboard/
├── features/             # Domain-driven features (Auth, Dashboard, Clients, etc.)
│   ├── auth/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── services/
│   │   └── page.tsx
|   
│   ├── dashboard/
│   └── clients/
├── components/           # Shared UI components (Button, Modal, etc.)
├── hooks/                # Generic reusable hooks
├── lib/                  # API clients, DB setup, 3rd-party config (e.g., axios, firebase)
├── styles/               # Global styles, Tailwind config
├── public/               # Static assets
├── types/                # Global types/interfaces
├── utils/                # Helper utilities (e.g., formatDate)
└── README.md
