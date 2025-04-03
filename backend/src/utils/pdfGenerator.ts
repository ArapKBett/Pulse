import jsPDF from "jspdf";
import { Post } from "../models/Post";

export const generatePDF = (posts: Post[]): Buffer => {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text("Pulse Analytics Report", 10, 10);

  posts.forEach((post, i) => {
    doc.setFontSize(12);
    doc.text(`${i + 1}. ${post.text} (Likes: ${post.likes})`, 10, 20 + i * 10);
  });

  return doc.output("arraybuffer") as Buffer;
};
