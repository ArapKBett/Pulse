import { Request, Response, NextFunction } from "express";
import { xService } from "../services/xService";
import { generatePDF } from "../utils/pdfGenerator";
import { generateCSV } from "../utils/csvGenerator";

export const generateReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const { format } = req.query as { format: "pdf" | "csv" };
    const posts = await xService.getXPosts(userId, req.user!.token);

    if (format === "csv") {
      const csv = generateCSV(posts);
      res.header("Content-Type", "text/csv");
      res.attachment(`report-${userId}.csv`);
      return res.send(csv);
    }

    const pdf = generatePDF(posts);
    res.header("Content-Type", "application/pdf");
    res.attachment(`report-${userId}.pdf`);
    return res.send(pdf);
  } catch (error) {
    next(error);
  }
};
