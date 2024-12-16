import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Home Page</h1>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">
        <Link to="/about">Go to About Page</Link>
      </button>
    </div>
  );
};

export default Home;
