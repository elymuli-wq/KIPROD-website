# How to Open & Run This Project (KIPROD Website)

This repo is an **Astro** website. You run it locally using **Node.js + npm**.

The site is governed by **KIPROD Website Master Implementation Blueprint v1** (see `IMPLEMENTATION_PLAN.md` and `PROJECT_HANDOVER.md`).

## 1) Prerequisites

- Install **Node.js** (recommended: LTS)
- Confirm it works:

```bash
node -v
npm -v
```

## 2) Open in VS Code

Open this folder in VS Code:

`d:\Eli\PICC DIGITAL\KIPROD WEBSITE\solar-series`

## 3) Install dependencies (first time only)

Open **Terminal** in VS Code (or Command Prompt) and run:

```bash
npm install
```

## 4) Start the dev server

Run:

```bash
npm run dev
```

Astro will print a **Local** URL (usually `http://localhost:4321`). Open it in your browser.

## 5) Stop the server

In the terminal, press:

`Ctrl + C`

## Troubleshooting (Windows)

### PowerShell blocks npm

If you see an error about scripts being disabled, use **Command Prompt (cmd)** instead of PowerShell.

### Repo root

The active website project is **this folder** (`solar-series/`). Brand assets and the master blueprint live in the parent `KIPROD WEBSITE/` folder.
