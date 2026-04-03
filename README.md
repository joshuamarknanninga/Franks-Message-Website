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

## Planning docs
- `docs/PHASE1_ARCHITECTURE.md`

## One-time setup (recommended)
```bash
npm run setup
```

## Run backend from root
```bash
npm run dev
```

`npm run dev` automatically runs `predev`, which installs server dependencies before starting.

If `MONGODB_URI` is not set, the server now starts in **database-offline mode** (non-production) so frontend/UI work can continue. In production, DB connection failures still stop boot.

## Additional scripts
```bash
npm run start
npm run seed
npm run client:dev
npm run client:build
```

## API health check
- `GET /api/health` returns server status and database state.
