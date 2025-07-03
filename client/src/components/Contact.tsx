import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a backend API
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const downloadResume = () => {
    // In a real implementation, this would download the actual resume file
    toast({
      title: "Resume Download",
      description: "Resume download would be implemented here.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kunalkishor93344@gmail.com",
      href: "mailto:kunalkishor93344@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6205625053",
      href: "tel:6205625053"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kunal-kishor-48778a223",
      href: "https://linkedin.com/in/kunal-kishor-48778a223"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kunalkishor1",
      href: "https://github.com/kunalkishor1"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or potential collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm">{info.label}</p>
                    {info.href !== "#" ? (
                      <a 
                        href={info.href} 
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Button
                onClick={downloadResume}
                className="bg-primary-600 hover:bg-primary-700 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Send a Message</h3>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500"
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-primary-500 resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
