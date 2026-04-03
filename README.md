# Frank's Message Website

A production-minded MERN MVP for a faith-based speaker/writer platform with beautiful public pages, live community chat, and a non-technical admin dashboard.

## Current status
- ✅ Phase 1 architecture and schema planning complete.
- ✅ Phase 2 backend scaffold complete (Express + MongoDB + JWT auth + Socket.IO + core models/routes/controllers/middleware).
- ✅ Implemented first three premium upgrades:
  - Reading mode + typography-focused message detail UX
  - Series listing + series detail flows
  - Prayer wall with privacy controls and moderation approval pipeline

## Planning docs
- `docs/PHASE1_ARCHITECTURE.md`

## Monorepo scripts (run from repository root)
```bash
npm run dev
npm run start
npm run seed
npm run client:dev
npm run client:build
```

## Backend quick start
```bash
cp server/.env.example server/.env
cd server
npm install
cd ..
npm run dev
```

## Frontend quick start
```bash
cd client
npm install
npm run dev
```

## API health check
- `GET /api/health`
