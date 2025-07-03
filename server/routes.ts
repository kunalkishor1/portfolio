import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint (dummy, no database)
  app.post("/api/contact", async (req, res) => {
    // Simple validation (since schema is removed)
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Invalid form data. Please check your input.",
        errors: [
          !name ? "Name is required." : null,
          !email ? "Email is required." : null,
          !subject ? "Subject is required." : null,
          !message ? "Message is required." : null,
        ].filter(Boolean)
      });
    }
    res.json({
      success: true,
      message: "Thank you for your message! I'll get back to you soon. (No database used)",
    });
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      res.json({
        success: true,
        message: "Resume download endpoint - would serve actual PDF file in production"
      });
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({
        success: false,
        message: "Sorry, there was an error downloading the resume."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
