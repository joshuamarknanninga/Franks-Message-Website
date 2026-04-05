# Frank's Message Website

A production-minded MERN MVP for a faith-based speaker/writer platform with beautiful public pages, live community chat, and a non-technical admin dashboard.

## Current status
- ✅ Phase 1 architecture and schema planning complete.
- ✅ Phase 2 backend scaffold complete (Express + MongoDB + JWT auth + Socket.IO + core models/routes/controllers/middleware).
- ✅ Implemented premium upgrades:
  - Reading mode + typography-focused message detail UX
  - Series listing + series detail flows
  - Prayer wall with privacy controls and moderation approval pipeline
  - Animated sunrise hero experience
  - Split-hero layout (Option B): text left + editorial image right

## Planning docs
- `docs/PHASE1_ARCHITECTURE.md`

## One-time setup
```bash
npm run setup
```

## Run full stack (server + client together)
```bash
npm run dev
```

`npm run dev` now starts both:
- backend: `http://localhost:5000` (or fallback port in non-production)
- frontend: `http://127.0.0.1:5173`

If `MONGODB_URI` is not set, the backend starts in **database-offline mode** (non-production) so frontend/UI work can continue. In production, DB connection failures still stop boot.

If port `5000` is already in use (non-production), the server automatically retries on `5001`, `5002`, etc.

## Hero image setup (Option B)
Place your selected study-group image at:
- `client/public/hero-berea.jpg`

The homepage hero is now configured as a split layout with copy on the left and this image on the right.

## Vite HMR websocket note
If Chrome shows `[vite] failed to connect to websocket`, open the frontend using `http://127.0.0.1:5173` (not `localhost`).

This repo now pins Vite host + HMR host/client port/path to avoid localhost/IP mismatch issues.

If needed, stop currently running dev processes (`Ctrl + C`) and run:
```bash
npm run dev
```

## Run individually
```bash
npm run dev:server
npm run dev:client
npm run start
npm run seed
npm run client:build
```

## API health check
- `GET /api/health` returns server status and database state.
