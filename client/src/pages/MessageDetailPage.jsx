import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReadingModeToggle from '../components/ReadingModeToggle.jsx';
import { useReadingMode } from '../context/ReadingModeContext.jsx';
import api from '../services/api.js';

const MessageDetailPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { readingMode } = useReadingMode();

  useEffect(() => {
    api.get(`/posts/${id}`).then((res) => setPost(res.data.data)).catch(() => setPost(null));
  }, [id]);

  if (!post) return <p>Loading message...</p>;

  return (
    <article className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-heading text-4xl">{post.title}</h2>
        <ReadingModeToggle />
      </div>
      <p className="text-sm text-midnight/70">{post.scriptureReference}</p>
      <div className={`${readingMode ? 'reading-mode' : 'default-reading'} whitespace-pre-line text-midnight/90`}>
        {typeof post.body === 'string' ? post.body : JSON.stringify(post.body, null, 2)}
      </div>
    </article>
  );
};

export default MessageDetailPage;
