import { Link, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/data'; 

const Navbar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const navbarVisibility = queryParams.get('navbar');
  const showNavbar = navbarVisibility !== 'hide';

  // Handle navbar color (default to blue)
  const validColors = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
    orange: 'bg-orange-500',
  };

  const navbarColor = validColors[queryParams.get('color')] || 'bg-blue-500'; 

  const handleLogout = () => {
    logout(); 
    window.location.href = '/login'; 
  };

  return (
    showNavbar && (
      <nav className={`${navbarColor} p-4 flex justify-between items-center`}>
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        </ul>

        {/* Login/Logout Button */}
        <div>
          {isAuthenticated() ? (
            <button 
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700">
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700">
              Login
            </Link>
          )}
        </div>
      </nav>
    )
  );
};

export default Navbar;
