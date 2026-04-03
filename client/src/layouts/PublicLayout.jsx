import { NavLink, Outlet } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/messages', 'Messages'],
  ['/series', 'Series'],
  ['/prayer-wall', 'Prayer Wall'],
];

const PublicLayout = () => (
  <div className="min-h-screen bg-gradient-to-b from-cream to-parchment">
    <header className="sticky top-0 z-20 border-b border-white/40 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <h1 className="font-heading text-2xl font-semibold text-midnight">Frank's Message</h1>
        <nav className="flex gap-3 text-sm font-medium">
          {links.map(([href, label]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${isActive ? 'bg-midnight text-cream' : 'text-midnight hover:bg-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>

    <main className="mx-auto max-w-6xl px-4 py-10">
      <Outlet />
    </main>
  </div>
);

export default PublicLayout;
