import { Link } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext.jsx';

const AdminDashboardPage = () => {
  const { user, logout } = useAdminAuth();

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-soft">
        <div>
          <h2 className="font-heading text-4xl">Admin Dashboard</h2>
          <p className="mt-1 text-sm text-midnight/70">Logged in as {user?.email}</p>
        </div>
        <button className="rounded-full border px-4 py-2" onClick={logout} type="button">Logout</button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link className="rounded-2xl bg-white p-5 shadow-soft" to="/recording-studio">Open Recording Studio</Link>
        <a className="rounded-2xl bg-white p-5 shadow-soft" href="http://localhost:5000/api/recording-intakes">Recording Intake API (admin token required)</a>
      </div>
    </section>
  );
};

export default AdminDashboardPage;
