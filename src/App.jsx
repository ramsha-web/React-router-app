import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { isAuthenticated, logout } from './utils/data';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Login from './pages/DashboardLogin.jsx';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route
                path="/dashboard"
                element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
          }
          />

        </Routes>
    </Router>
  );
};

export default App;
