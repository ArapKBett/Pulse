const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center p-4" role="status" aria-label="Loading">
    <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
  </div>
);

export default LoadingSpinner;
