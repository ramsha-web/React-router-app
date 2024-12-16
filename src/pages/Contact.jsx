import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">Contact Us</h1>
      <button className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700">
        <Link to="/dashboard">Go to Dashboard</Link>
      </button>
    </div>
  );
};

export default Contact;
