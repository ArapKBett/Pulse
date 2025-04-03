import { Post } from "../models/Post";

export const generateCSV = (posts: Post[]): string => {
  const headers = ["ID,Date,Text,Likes,Retweets,Sentiment"];
  const rows = posts.map((p) =>
    [p.id, p.date, `"${p.text}"`, p.likes, p.retweets, p.sentiment || ""].join(",")
  );
  return [...headers, ...rows].join("\n");
};
