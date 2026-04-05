import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const SunriseHero = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br from-[#101f45] via-[#1f3d78] to-[#d49b58] text-cream shadow-soft">
      <div className="grid gap-0 lg:grid-cols-2">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 space-y-5 px-8 py-12 md:px-12 md:py-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cream/85">Acts 17:11 Community</p>
          <h2 className="font-heading text-4xl leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] md:text-6xl">
            Hope rises here — one message, one prayer, one sunrise at a time.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-cream/90 md:text-lg">
            Welcome to The Berea Study Group Acts 17:11: thoughtful messages, scripture-rooted encouragement, and a
            peaceful prayer community built for real life.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              className="rounded-full bg-cream px-6 py-3 font-semibold text-midnight transition hover:-translate-y-0.5"
              to="/messages"
            >
              Read Today’s Message
            </Link>
            <Link
              className="rounded-full border border-cream/40 px-6 py-3 font-semibold text-cream transition hover:bg-white/10"
              to="/prayer-wall"
            >
              Join the Prayer Wall
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative min-h-[420px]"
        >
          <img
            src="/hero-berea.jpg"
            alt="A warm candlelit Bible study gathering"
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#101f45]/70" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default SunriseHero;
