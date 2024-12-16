import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../utils/data';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      alert('Logged in successfully!');
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials!');
    }
  };

  return (<>
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <h3 className="absolute top-20 text-2xl font-bold text-center text-green-600 w-full">
        You must have to login before moving to the Dashboard!
      </h3>

      <form onSubmit={handleLogin} className="p-8 bg-white rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
