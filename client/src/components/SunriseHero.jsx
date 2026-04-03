import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const SunriseHero = () => {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-b from-midnight via-[#1f3d78] to-[#f1c987] px-8 py-16 text-cream shadow-soft md:px-12">
      <div className="sunrise-haze" aria-hidden="true" />
      <motion.div
        className="sun-core"
        aria-hidden="true"
        animate={{ y: [12, -8, 12], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="sun-glow"
        aria-hidden="true"
        animate={{ scale: [0.9, 1.08, 0.9], opacity: [0.18, 0.33, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative z-10 max-w-3xl space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-cream/85">A New Mercy Every Morning</p>
        <h2 className="font-heading text-4xl leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] md:text-6xl">
          Hope rises here — one message, one prayer, one sunrise at a time.
        </h2>
        <p className="max-w-2xl text-base leading-8 text-cream/90 md:text-lg">
          Welcome to Frank’s ministry home: thoughtful messages, scripture-rooted encouragement, and a peaceful
          prayer community built for real life.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="rounded-full bg-cream px-6 py-3 font-semibold text-midnight transition hover:-translate-y-0.5" to="/messages">
            Read Today’s Message
          </Link>
          <Link className="rounded-full border border-cream/40 px-6 py-3 font-semibold text-cream transition hover:bg-white/10" to="/prayer-wall">
            Join the Prayer Wall
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SunriseHero;
