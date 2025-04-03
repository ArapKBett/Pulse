import { useEffect, useState } from "react";
import { fetchPosts } from "../api/xApi";

export const useRealTimeData = (userId: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const posts = await fetchPosts(userId);
      setData(posts);
    }, 60000); // Poll every minute
    return () => clearInterval(interval);
  }, [userId]);

  return data;
};
