import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the input data
      const validation = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validation.success) {
        return res.status(400).json({
          success: false,
          message: "Invalid form data. Please check your input.",
          errors: validation.error.errors
        });
      }

      const { name, email, subject, message } = validation.data;
      
      // Store the contact form submission in the database
      const submission = await storage.createContactSubmission({
        name,
        email,
        subject,
        message
      });
      
      console.log("Contact form submission saved:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        submissionId: submission.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Sorry, there was an error sending your message. Please try again." 
      });
    }
  });

  // Get contact submissions endpoint (for admin use)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ 
        success: true, 
        submissions 
      });
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error fetching contact submissions" 
      });
    }
  });

  // Resume download endpoint
  app.get("/api/resume/download", async (req, res) => {
    try {
      // In a real implementation, this would:
      // 1. Generate or retrieve the resume PDF
      // 2. Set appropriate headers for file download
      // 3. Stream the file to the response
      
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
