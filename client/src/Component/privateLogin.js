import { Navigate, Outlet } from 'react-router-dom';

const privateLogin = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default privateLogin;
