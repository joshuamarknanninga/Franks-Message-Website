import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../services/api.js';

const PrayerWallPage = () => {
  const [requests, setRequests] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const load = () => {
    api.get('/prayer-requests/public-wall').then((res) => setRequests(res.data.data)).catch(() => setRequests([]));
  };

  useEffect(() => {
    load();
  }, []);

  const onSubmit = async (values) => {
    await api.post('/prayer-requests', {
      ...values,
      isPrivate: values.privacy === 'private',
      allowPublic: values.privacy === 'public',
    });
    setSubmitted(true);
    reset();
  };

  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div>
        <h2 className="font-heading text-4xl">Prayer Wall</h2>
        <p className="mt-2 text-midnight/70">Share a request. Private requests are seen only by the care team.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3 rounded-2xl bg-white p-5 shadow-soft">
          <input className="w-full rounded-xl border p-3" placeholder="Your name" {...register('name', { required: true })} />
          <textarea className="min-h-32 w-full rounded-xl border p-3" placeholder="How can we pray for you?" {...register('request', { required: true })} />
          <select className="w-full rounded-xl border p-3" {...register('privacy')}>
            <option value="private">Private (team only)</option>
            <option value="public">Public (can appear on prayer wall)</option>
          </select>
          <button className="rounded-full bg-midnight px-5 py-2 text-cream" type="submit">Send prayer request</button>
          {submitted && <p className="text-sm text-sage">Thank you. We are praying with you.</p>}
        </form>
      </div>

      <div className="space-y-3">
        <h3 className="font-heading text-3xl">Community Requests</h3>
        {requests.map((item) => (
          <article key={item._id} className="rounded-2xl bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-gold">{item.displayName || 'Anonymous'}</p>
            <p className="mt-1 text-midnight/85">{item.request}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PrayerWallPage;
