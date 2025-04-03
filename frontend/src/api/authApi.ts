import axios from "axios";

const API_URL = "/api/auth";

export const loginWithX = async () => {
  const response = await axios.get(`${API_URL}/x`, { withCredentials: true });
  return response.data.token;
};

export const logout = async () => {
  await axios.post(`${API_URL}/logout`);
  localStorage.removeItem("token");
};

export const refreshToken = async () => {
  try {
    const response = await axios.post(`${API_URL}/refresh`);
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    logout();
    throw error;
  }
};
