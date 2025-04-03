export const aiService = {
  async analyzeSentiment(text: string): Promise<string> {
    // Placeholder for xAI integration
    return text.includes("happy") ? "positive" : "neutral";
  },
};
