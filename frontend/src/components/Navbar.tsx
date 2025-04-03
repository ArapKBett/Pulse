import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => (
  <nav className="p-4 bg-gray-100 dark:bg-gray-900 shadow" role="navigation">
    <div className="flex justify-between items-center max-w-7xl mx-auto">
      <Link to="/" className="text-xl font-bold">Pulse</Link>
      <div className="flex space-x-4">
        <Link to="/dashboard" className="hover:text-blue-500">Dashboard</Link>
        <Link to="/settings" className="hover:text-blue-500">Settings</Link>
        <ThemeToggle />
      </div>
    </div>
  </nav>
);

export default Navbar;
