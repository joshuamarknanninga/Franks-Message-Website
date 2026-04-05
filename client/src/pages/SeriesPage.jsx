import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.js';

const SeriesPage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api.get('/posts/series').then((res) => setSeries(res.data.data)).catch(() => setSeries([]));
  }, []);

  return (
    <section>
      <h2 className="font-heading text-4xl">Teaching Series</h2>
      <p className="mt-2 text-midnight/70">Follow message journeys, week by week.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {series.map((item) => (
          <Link key={item.name} to={`/series/${encodeURIComponent(item.name)}`} className="rounded-2xl bg-white p-5 shadow-soft">
            <h3 className="font-heading text-2xl">{item.name}</h3>
            <p className="mt-1 text-sm text-midnight/70">{item.count} messages</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SeriesPage;
