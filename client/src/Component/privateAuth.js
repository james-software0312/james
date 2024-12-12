import { Navigate, Outlet } from 'react-router-dom';

const privateLogin = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default privateLogin;
