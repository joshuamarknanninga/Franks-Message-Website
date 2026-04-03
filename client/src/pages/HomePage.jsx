import { Link } from 'react-router-dom';

const HomePage = () => (
  <section className="space-y-8">
    <div className="rounded-3xl bg-midnight px-8 py-14 text-cream shadow-soft">
      <p className="mb-3 text-gold">Welcome</p>
      <h2 className="font-heading text-4xl leading-tight">Encouragement rooted in scripture and lived faith.</h2>
      <p className="mt-4 max-w-2xl text-cream/85">
        Read messages, follow teaching series, and share prayer requests in a peaceful community.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link className="rounded-full bg-gold px-5 py-2 font-medium text-midnight" to="/messages">Read messages</Link>
        <Link className="rounded-full border border-cream/30 px-5 py-2" to="/prayer-wall">Visit prayer wall</Link>
      </div>
    </div>
  </section>
);

export default HomePage;
