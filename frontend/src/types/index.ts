export interface Post {
  id: string;
  date: string;
  text: string;
  likes: number;
  retweets: number;
  sentiment: string;
}

export interface User {
  id: string;
  username: string;
  token: string;
}

export type ChartData<T extends "line" | "bar"> = {
  labels: string[];
  datasets: { label: string; data: number[]; borderColor?: string; backgroundColor?: string }[];
};
