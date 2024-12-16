import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-pink-500 mb-4">About Us</h1>
      <button className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700">
        <Link to="/contact">Go to Contact Page</Link>
      </button>
    </div>
  );
};

export default About;
