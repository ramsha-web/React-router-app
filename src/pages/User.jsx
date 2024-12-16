import { useLocation } from 'react-router-dom';

const User = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">User Page</h1>
      <p className="text-lg text-gray-700">Navbar visibility: {queryParams.get('navbar')}</p>
      <p className="text-lg text-gray-700">Navbar color: {queryParams.get('color')}</p>
    </div>
  );
};

export default User;
