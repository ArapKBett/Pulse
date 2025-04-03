import axios from "axios";
import { Post } from "../models/Post";
import { aiService } from "./aiService";

export const xService = {
  async getAccessToken(code: string) {
    const response = await axios.post("https://api.x.com/2/oauth2/token", {
      code,
      grant_type: "authorization_code",
      client_id: process.env.X_CLIENT_ID,
      client_secret: process.env.X_CLIENT_SECRET,
      redirect_uri: "http://localhost:5000/api/auth/x/callback",
    });
    return { accessToken: response.data.access_token, userId: response.data.user_id };
  },

  async getUserProfile(accessToken: string) {
    const response = await axios.get("https://api.x.com/2/users/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    return { id: response.data.data.id, username: response.data.data.username };
  },

  async getXPosts(userId: string, accessToken: string): Promise<Post[]> {
    const response = await axios.get(`https://api.x.com/2/users/${userId}/tweets`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { "tweet.fields": "public_metrics,created_at" },
    });
    return response.data.data.map((tweet: any) => ({
      id: tweet.id,
      userId,
      date: tweet.created_at,
      text: tweet.text,
      likes: tweet.public_metrics.like_count,
      retweets: tweet.public_metrics.retweet_count,
    }));
  },

  async analyzePost(postId: string, accessToken: string) {
    const response = await axios.get(`https://api.x.com/2/tweets/${postId}`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const text = response.data.data.text;
    const sentiment = await aiService.analyzeSentiment(text);
    return { sentiment };
  },
};
