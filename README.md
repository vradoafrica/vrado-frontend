# 🧱 Project Structure

This project uses a **feature-based modular structure** for scalability, readability, and maintainability. Each feature encapsulates its own logic: UI components, services, hooks, and types.

## 📁 Folder Overview

```bash
.
├── app/                  # Next.js App Router entry points (routes only)
│   ├── layout.tsx        # Redirects you to Login 
│   ├── page.tsx          # Not in use
│   └── dashboard/        # Contains Agents Dashboard Page
│   └── global.css        # Setup for Tailwindcss and Custom CSS styling
│   ├── login/            # Contains the Auth / Login Page
│   └── onboarding/       # Contains Forms to Create Business Profile
├── features/             # features-based (Auth, Dashboard)
│   ├── auth/             # Everything About Authentication
│   │   ├── components/   # Contains Every Custom Component Needed by Auth
│   │   ├── utils/        # Contains Special Untility Functions only used by Auth
│   │   ├── services/     # Contains External Access like Fetching API
│   │   └── page.tsx      # Contains the Auth Page UI
│   ├── dashboard/
│   └── 
├── components/           # Shared UI components (Button, Modal, etc.)
├── hooks/                # Generic reusable hooks
├── styles/               # Global styles, Tailwind config
├── public/               # Static assets
├── types/                # Global types/interfaces
├── utils/                # Helper utilities (e.g., formatDate)
└── README.md
