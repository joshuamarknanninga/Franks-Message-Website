import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext.jsx';
import api from '../services/api.js';

const AdminLoginPage = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const onSubmit = handleSubmit(async (values) => {
    try {
      setError('');
      const response = await api.post('/auth/login', values);
      login(response.data.data);
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed. Check credentials.');
    }
  });

  return (
    <section className="mx-auto max-w-md rounded-3xl bg-white p-8 shadow-soft">
      <h2 className="font-heading text-4xl">Administrator Login</h2>
      <p className="mt-2 text-sm text-midnight/70">Sign in to manage messages, audio, and recording intake.</p>
      <form className="mt-6 space-y-3" onSubmit={onSubmit}>
        <input className="w-full rounded-xl border p-3" placeholder="Email" type="email" {...register('email', { required: true })} />
        <input className="w-full rounded-xl border p-3" placeholder="Password" type="password" {...register('password', { required: true })} />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="w-full rounded-full bg-midnight px-5 py-2 font-semibold text-cream" type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default AdminLoginPage;
