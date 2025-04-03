import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-gray-600 dark:text-gray-300">Page not found.</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  </div>
);

export default NotFound;
