export interface ApiError {
  message: string;
  code: number;
}

export interface PostResponse {
  data: Post[];
  meta: { total: number };
}
