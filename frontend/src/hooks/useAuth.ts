import { useState, useEffect } from "react";
import { refreshToken } from "../api/authApi";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      refreshToken()
        .then((newToken) => setToken(newToken))
        .catch(() => setToken(null));
    }
  }, [token]);

  return { token, setToken };
};
