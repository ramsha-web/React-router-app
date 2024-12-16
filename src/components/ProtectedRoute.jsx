import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/data';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect them to the login page if not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
