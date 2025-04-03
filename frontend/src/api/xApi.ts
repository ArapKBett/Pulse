import axios from "axios";
import { Post } from "../types";

export const fetchPosts = async (userId: string): Promise<Post[]> => {
  const response = await axios.get(`/api/posts/${userId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};

export const analyzePost = async (postId: string): Promise<{ sentiment: string }> => {
  const response = await axios.get(`/api/posts/analyze/${postId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};
