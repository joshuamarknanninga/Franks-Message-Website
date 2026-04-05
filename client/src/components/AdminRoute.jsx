import { Navigate, Outlet } from 'react-router-dom';
import { useAdminAuth } from '../context/AdminAuthContext.jsx';

const AdminRoute = () => {
  const { isAuthenticated } = useAdminAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminRoute;
