# Phase 1 — Product Vision, Design Direction, Feature Breakdown, File Tree, and Schema Outline

## 1) Product Vision Summary

**Project Name:** Frank’s Message Website  
**Mission:** Build a warm, premium, spiritually grounded digital home where visitors can read, listen, watch, pray, and connect—while giving Frank (or family) a simple, no-code admin experience for daily ministry updates.

### Experience goals
- Feel *calm, dignified, hopeful,* and *human*.
- Prioritize readability and contemplative pacing over visual clutter.
- Highlight message content first (written reflections, audio, scripture, video).
- Create trust through clear structure, moderation-ready community features, and accessible UI.
- Ensure non-technical maintenance: publish messages, upload audio, feature content, manage videos/chat with minimal friction.

### MVP outcomes
By MVP launch, Frank can:
1. Publish and manage written faith messages.
2. Upload and organize audio devotionals/sermons.
3. Add and feature YouTube videos.
4. Host a respectful topic-based community chat.
5. Manage content from an admin dashboard without touching code.
6. Display a store-ready placeholder that can evolve into Stripe-backed commerce.

---

## 2) Design Language Summary

### Visual personality
- **Tone:** reverent, modern, compassionate, polished.
- **Mood:** soft glow, layered depth, generous spacing, gentle motion.
- **Composition:** breathable sections, strong hierarchy, card-based storytelling.
- **Avoid:** noisy stock-template church motifs, harsh contrasts, over-gilded styling.

### Typography system (2 families max)
- **Headings:** `Spectral` (or Cormorant Garamond fallback option during design validation).
- **Body/UI:** `Inter` (readability-first for long-form and admin forms).
- Generous line-height, comfortable reading measure (`max-w-prose`/`max-w-3xl`), consistent type scale.

### Color strategy (premium + calm)
- **Midnight Navy:** primary foundation and deep contrast surfaces.
- **Warm Cream/Parchment:** base background for readability and warmth.
- **Muted Gold:** restrained accent for calls-to-action and highlights.
- **Sage/Teal hint:** supportive accent for freshness and calm states.
- **Optional Dusk/Plum:** depth accent for hero gradients and section transitions.

### Shadow, depth, and motion
- Layered soft shadows for cards (`shadow-xl` + custom multi-stop shadow tokens).
- Hero glow backgrounds with subtle blur and gradient overlays.
- Tasteful glassmorphism only in small UI moments (e.g., floating featured card).
- Motion via Framer Motion: low-amplitude hover lift, fade-slide reveals, gentle transitions.

### Accessibility guardrails
- WCAG-friendly contrast ratios.
- Semantic structure (`header/main/nav/section/article/footer`).
- Visible keyboard focus rings.
- Reduced-motion support.
- Form labels and error states with clear messaging.

---

## 3) Feature Breakdown (MVP Scope)

## Public Site

### Home
- Hero mission statement and primary CTA actions (Read, Listen, Join Community).
- Featured latest message.
- Scripture/reflection callout block.
- Latest audio carousel/grid.
- Featured YouTube embed.
- Testimonial/encouragement snippets.
- Newsletter signup block.

### About
- Frank’s bio and calling.
- Story/timeline cards.
- Photo/media panel.
- Invitation to connect/prayer.

### Messages (Blog)
- Category-aware post listing.
- Search, tag filters, and pagination.
- Rich single-message page with scripture references.
- Featured and draft/published support via backend.

### Audio Library
- Search/filter audio messages.
- Card metadata (series, scripture, duration, publish date).
- Persistent audio player + queue behavior.
- Featured audio spotlight.

### Video / YouTube
- Featured video section.
- Recent video grid from stored embeds.
- Room for channel CTA.

### Community Chat
- Topic rooms: Prayer, Encouragement, Bible Study, General Fellowship.
- Guest display names + optional authenticated admin presence.
- Timestamped messages.
- Moderation primitives (mute/ban architecture).
- Pinned welcome message per room.

### Contact
- Contact form.
- Prayer request form.
- Social links.

### Store (Placeholder)
- Product card grid from seeded data.
- “Coming soon” purchase flow messaging.
- Future Stripe-ready data model.

## Admin Experience (High Priority)
- Secure JWT login for admin users only.
- CRUD for posts, audio, videos.
- Manage featured content for homepage.
- Manage categories/tags.
- View prayer requests and newsletter subscribers.
- Basic chat moderation tools.
- Media upload hooks (Cloudinary/GridFS abstraction layer).
- Clear tables, filters, toasts, confirmation modals.

---

## 4) Full Monorepo File Tree (Planned)

```text
Franks-Message-Website/
├── README.md
├── docs/
│   ├── PHASE1_ARCHITECTURE.md
│   └── brand-guidelines.md
├── client/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── .env.example
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── assets/
│       │   ├── images/
│       │   └── icons/
│       ├── styles/
│       │   ├── index.css
│       │   ├── tokens.css
│       │   └── typography.css
│       ├── lib/
│       │   ├── axios.js
│       │   ├── constants.js
│       │   └── utils.js
│       ├── hooks/
│       │   ├── useAuth.js
│       │   ├── useDebounce.js
│       │   ├── usePagination.js
│       │   └── useSocket.js
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   ├── AudioPlayerContext.jsx
│       │   └── ToastContext.jsx
│       ├── routes/
│       │   ├── index.jsx
│       │   ├── ProtectedRoute.jsx
│       │   └── AdminRoute.jsx
│       ├── layouts/
│       │   ├── PublicLayout.jsx
│       │   └── AdminLayout.jsx
│       ├── components/
│       │   ├── common/
│       │   │   ├── Navbar.jsx
│       │   │   ├── MobileMenu.jsx
│       │   │   ├── Footer.jsx
│       │   │   ├── SectionHeader.jsx
│       │   │   ├── SearchBar.jsx
│       │   │   ├── FilterChips.jsx
│       │   │   ├── Pagination.jsx
│       │   │   ├── EmptyState.jsx
│       │   │   ├── LoadingSkeleton.jsx
│       │   │   └── ToastContainer.jsx
│       │   ├── home/
│       │   │   ├── HeroSection.jsx
│       │   │   ├── FeaturedMessageCard.jsx
│       │   │   ├── ScriptureHighlight.jsx
│       │   │   ├── TestimonialCard.jsx
│       │   │   └── NewsletterCTA.jsx
│       │   ├── messages/
│       │   │   ├── MessageCard.jsx
│       │   │   └── RichTextRenderer.jsx
│       │   ├── audio/
│       │   │   ├── AudioCard.jsx
│       │   │   ├── AudioPlayer.jsx
│       │   │   └── AudioQueue.jsx
│       │   ├── video/
│       │   │   └── VideoCard.jsx
│       │   ├── chat/
│       │   │   ├── ChatWidget.jsx
│       │   │   ├── ChatRoomList.jsx
│       │   │   └── ChatMessageList.jsx
│       │   └── admin/
│       │       ├── AdminSidebar.jsx
│       │       ├── DashboardWidget.jsx
│       │       ├── DataTable.jsx
│       │       └── ConfirmModal.jsx
│       ├── pages/
│       │   ├── public/
│       │   │   ├── HomePage.jsx
│       │   │   ├── AboutPage.jsx
│       │   │   ├── MessagesPage.jsx
│       │   │   ├── MessageDetailPage.jsx
│       │   │   ├── AudioPage.jsx
│       │   │   ├── VideosPage.jsx
│       │   │   ├── CommunityPage.jsx
│       │   │   ├── StorePage.jsx
│       │   │   └── ContactPage.jsx
│       │   └── admin/
│       │       ├── AdminLoginPage.jsx
│       │       ├── DashboardPage.jsx
│       │       ├── ManagePostsPage.jsx
│       │       ├── ManageAudioPage.jsx
│       │       ├── ManageVideosPage.jsx
│       │       ├── ManageChatPage.jsx
│       │       ├── ManageSubscribersPage.jsx
│       │       ├── ManagePrayerRequestsPage.jsx
│       │       ├── ManageCategoriesPage.jsx
│       │       └── ManageMediaPage.jsx
│       └── services/
│           ├── authService.js
│           ├── postService.js
│           ├── audioService.js
│           ├── videoService.js
│           ├── chatService.js
│           ├── prayerService.js
│           ├── subscriberService.js
│           └── productService.js
├── server/
│   ├── package.json
│   ├── .env.example
│   └── src/
│       ├── app.js
│       ├── server.js
│       ├── config/
│       │   ├── env.js
│       │   ├── db.js
│       │   ├── logger.js
│       │   └── cors.js
│       ├── models/
│       │   ├── User.js
│       │   ├── Post.js
│       │   ├── Category.js
│       │   ├── Tag.js
│       │   ├── AudioMessage.js
│       │   ├── VideoEmbed.js
│       │   ├── ChatRoom.js
│       │   ├── ChatMessage.js
│       │   ├── PrayerRequest.js
│       │   ├── NewsletterSubscriber.js
│       │   └── Product.js
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── postController.js
│       │   ├── categoryController.js
│       │   ├── tagController.js
│       │   ├── audioController.js
│       │   ├── videoController.js
│       │   ├── chatController.js
│       │   ├── prayerController.js
│       │   ├── newsletterController.js
│       │   └── productController.js
│       ├── routes/
│       │   ├── index.js
│       │   ├── authRoutes.js
│       │   ├── postRoutes.js
│       │   ├── categoryRoutes.js
│       │   ├── tagRoutes.js
│       │   ├── audioRoutes.js
│       │   ├── videoRoutes.js
│       │   ├── chatRoutes.js
│       │   ├── prayerRoutes.js
│       │   ├── newsletterRoutes.js
│       │   └── productRoutes.js
│       ├── middleware/
│       │   ├── auth.js
│       │   ├── adminOnly.js
│       │   ├── validate.js
│       │   ├── notFound.js
│       │   ├── errorHandler.js
│       │   └── rateLimiter.js
│       ├── sockets/
│       │   ├── index.js
│       │   ├── chatSocket.js
│       │   └── presenceSocket.js
│       ├── services/
│       │   ├── upload/
│       │   │   ├── mediaService.js
│       │   │   ├── cloudinaryAdapter.js
│       │   │   └── gridfsAdapter.js
│       │   ├── moderation/
│       │   │   └── profanityFilter.js
│       │   └── seo/
│       │       └── slugService.js
│       ├── validators/
│       │   ├── authValidators.js
│       │   ├── postValidators.js
│       │   ├── audioValidators.js
│       │   ├── videoValidators.js
│       │   └── chatValidators.js
│       ├── utils/
│       │   ├── ApiError.js
│       │   ├── asyncHandler.js
│       │   └── pagination.js
│       └── seed/
│           ├── seedData.js
│           └── runSeed.js
└── .gitignore
```

---

## 5) Database Schema Outline (Mongoose-Oriented)

### User (Admin only in MVP)
- `name` (String, required)
- `email` (String, required, unique, lowercase)
- `passwordHash` (String, required)
- `role` (String enum: `admin`, default `admin`)
- `avatar` (String, optional)
- `isActive` (Boolean, default `true`)
- `lastLoginAt` (Date)
- `timestamps`

### Post
- `title` (String, required, indexed)
- `slug` (String, required, unique, indexed)
- `excerpt` (String, required)
- `body` (Mixed/String, required; markdown-ready)
- `coverImage` (String)
- `author` (ObjectId ref User, required)
- `categories` (ObjectId[] ref Category)
- `tags` (ObjectId[] ref Tag)
- `featured` (Boolean, default false)
- `published` (Boolean, default false)
- `publishedAt` (Date)
- `scriptureReference` (String)
- `seoTitle` (String)
- `seoDescription` (String)
- `readTimeMinutes` (Number)
- `timestamps`

### Category
- `name` (String, required, unique)
- `slug` (String, required, unique)
- `description` (String)
- `colorToken` (String)
- `timestamps`

### Tag
- `name` (String, required, unique)
- `slug` (String, required, unique)
- `timestamps`

### AudioMessage
- `title` (String, required)
- `slug` (String, required, unique)
- `description` (String)
- `speaker` (String, default "Frank")
- `scriptureReference` (String)
- `series` (String)
- `audioUrl` (String, required)
- `duration` (Number, required; seconds)
- `coverImage` (String)
- `featured` (Boolean, default false)
- `publishedAt` (Date)
- `isPublished` (Boolean, default true)
- `timestamps`

### VideoEmbed
- `title` (String, required)
- `youtubeVideoId` (String, required, unique)
- `description` (String)
- `featured` (Boolean, default false)
- `publishedAt` (Date)
- `thumbnail` (String)
- `timestamps`

### ChatRoom
- `name` (String, required)
- `slug` (String, required, unique)
- `description` (String)
- `topic` (String enum: Prayer, Encouragement, Bible Study, General Fellowship)
- `isActive` (Boolean, default true)
- `pinnedWelcomeMessage` (String)
- `timestamps`

### ChatMessage
- `room` (ObjectId ref ChatRoom, required, indexed)
- `displayName` (String, required)
- `user` (ObjectId ref User, optional for guests)
- `content` (String, required)
- `isFlagged` (Boolean, default false)
- `isDeleted` (Boolean, default false)
- `moderation` (Object)
  - `muted` (Boolean)
  - `banned` (Boolean)
  - `reason` (String)
- `timestamps`

### PrayerRequest
- `name` (String, required)
- `email` (String, optional)
- `request` (String, required)
- `isPrivate` (Boolean, default true)
- `status` (String enum: new, reviewed, prayed, archived; default new)
- `timestamps`

### NewsletterSubscriber
- `email` (String, required, unique, lowercase)
- `name` (String)
- `source` (String, default "site")
- `isActive` (Boolean, default true)
- `timestamps`

### Product (Store placeholder)
- `name` (String, required)
- `slug` (String, required, unique)
- `description` (String)
- `price` (Number)
- `currency` (String, default "USD")
- `images` (String[])
- `category` (String)
- `inventory` (Number)
- `isActive` (Boolean, default true)
- `isPlaceholder` (Boolean, default true)
- `timestamps`

### Key indexes and constraints
- Unique: `User.email`, `Post.slug`, `Category.slug`, `Tag.slug`, `AudioMessage.slug`, `VideoEmbed.youtubeVideoId`, `ChatRoom.slug`, `Product.slug`, `NewsletterSubscriber.email`.
- Text index (future-ready): `Post.title`, `Post.excerpt`, `Post.body` for search.
- Compound query index suggestion: `Post.published + Post.publishedAt`, `AudioMessage.isPublished + AudioMessage.publishedAt`.

---

## 6) Phase Sequencing Confirmation

This Phase 1 document intentionally includes planning only (no implementation code), and establishes the exact scaffolding and schema blueprint for:
- Phase 2 backend scaffolding,
- Phase 3 frontend shell,
- Phases 4–10 feature delivery and UI polish,
- Phase 11 deployment docs and next steps.
