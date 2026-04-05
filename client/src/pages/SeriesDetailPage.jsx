import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../services/api.js';

const SeriesDetailPage = () => {
  const { seriesName } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get(`/posts/series/${seriesName}`).then((res) => setData(res.data.data)).catch(() => setData(null));
  }, [seriesName]);

  if (!data) return <p>Loading series...</p>;

  return (
    <section>
      <h2 className="font-heading text-4xl">{data.series}</h2>
      <div className="mt-6 space-y-3">
        {data.posts.map((post) => (
          <Link key={post._id} to={`/messages/${post._id}`} className="block rounded-2xl bg-white p-4 shadow-soft">
            <h3 className="font-heading text-xl">{post.title}</h3>
            <p className="text-sm text-midnight/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SeriesDetailPage;
