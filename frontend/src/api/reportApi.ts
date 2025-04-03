import axios from "axios";

export const generateReport = async (userId: string, format: "pdf" | "csv") => {
  const response = await axios.get(`/api/reports/${userId}`, {
    params: { format },
    responseType: "blob",
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return response.data;
};
