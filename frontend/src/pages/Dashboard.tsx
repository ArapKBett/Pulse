import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/xApi";
import ChartWidget from "../components/ChartWidget";
import PostCard from "../components/PostCard";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard: React.FC<{ userId: string }> = ({ userId }) => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => fetchPosts(userId),
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">Error loading data</div>;

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      <ChartWidget
        title="Engagement Over Time"
        data={posts?.map((p) => ({ date: p.date, likes: p.likes }))}
      />
      <ChartWidget
        title="Sentiment Breakdown"
        data={posts?.map((p) => ({ sentiment: p.sentiment }))}
        type="bar"
      />
      <div className="space-y-4">
        {posts?.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
