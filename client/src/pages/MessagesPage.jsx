import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api.js';

const MessagesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts?published=true').then((res) => setPosts(res.data.data)).catch(() => setPosts([]));
  }, []);

  return (
    <section>
      <h2 className="font-heading text-4xl">Messages</h2>
      <p className="mt-2 text-midnight/70">Browse recent reflections and teachings.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link key={post._id} to={`/messages/${post._id}`} className="rounded-2xl bg-white p-5 shadow-soft">
            <p className="text-xs uppercase tracking-wider text-gold">{post.series || 'Standalone message'}</p>
            <h3 className="mt-2 font-heading text-2xl">{post.title}</h3>
            <p className="mt-2 text-sm text-midnight/70">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MessagesPage;
