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
  - Recording Studio workflow (1–4 complete):
    1. Upload mastered audio
    2. Send recording to production intake
    3. Quick publish from phone path
    4. Transcript + podcast RSS feed endpoint

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

`npm run dev` starts both:
- backend: `http://localhost:5000` (or fallback port in non-production)
- frontend: `http://127.0.0.1:5473`


## Administrator login
1. Seed admin (once): `POST /api/auth/seed-admin`
2. Open frontend: `http://127.0.0.1:5473/admin/login`
3. Sign in with `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `server/.env`
4. Access dashboard at `/admin/dashboard`

## Recording Studio routes
- Frontend page: `/recording-studio`
- API intake: `POST /api/recording-intakes`
- API quick publish: `POST /api/audio/quick-publish`
- Podcast RSS: `GET /api/audio/rss.xml`

## Hero image setup (Option B)
Place your selected study-group image at:
- `client/public/hero-berea.jpg`

## Vite HMR websocket note
If Chrome shows `[vite] failed to connect to websocket`, open `http://127.0.0.1:5473` (not `localhost`).

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
