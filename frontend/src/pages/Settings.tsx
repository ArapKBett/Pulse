import ThemeToggle from "../components/ThemeToggle";

const Settings: React.FC = () => (
  <div className="p-4 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold mb-4">Settings</h1>
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Theme</h2>
        <ThemeToggle />
      </div>
      <div>
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-gray-600 dark:text-gray-300">Connected as @YourHandle</p>
      </div>
    </div>
  </div>
);

export default Settings;
