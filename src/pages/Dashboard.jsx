import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/data';

const Dashboard = () => {
  const navigate = useNavigate();

  if (!isAuthenticated()) {
    navigate('/'); // Redirect if not authenticated
    return null; // Prevent rendering
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome to your Dashboard!</p>
    </div>
  );
};

export default Dashboard;
