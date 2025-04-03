import jsPDF from "jspdf";
import { Post } from "../types";

export const generatePDF = (posts: Post[]) => {
  const doc = new jsPDF();
  doc.setFont("CustomFont");
  doc.text("Pulse Analytics Report", 10, 10);
  posts.forEach((post, i) => {
    doc.text(`${i + 1}. ${post.text} (Likes: ${post.likes})`, 10, 20 + i * 10);
  });
  doc.save("pulse-report.pdf");
};
