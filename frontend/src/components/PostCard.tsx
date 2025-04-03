import { Post } from "../types";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow">
    <p className="text-gray-700 dark:text-gray-300">{post.text}</p>
    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      <span>Likes: {post.likes}</span> | <span>Retweets: {post.retweets}</span> |{" "}
      <span>Sentiment: {post.sentiment}</span>
    </div>
  </div>
);

export default PostCard;
