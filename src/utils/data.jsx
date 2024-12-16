import userCredentials from '../userCredentials.json';

export const isAuthenticated = () => {
  // Check if user is authenticated (stored in localStorage)
  const storedUser = localStorage.getItem('user');
  return storedUser === userCredentials.username;
};

export const login = (username, password) => {
  if (username === userCredentials.username && password === userCredentials.password) {
    localStorage.setItem('user', username); // Store username in localStorage
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem('user'); // Remove username from localStorage (logout)
};
