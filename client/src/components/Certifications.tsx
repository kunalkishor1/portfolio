import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "Java Programming",
      description: "Professional certification in Java development",
      icon: "☕", // Java-like icon
    },
    {
      name: "Git Version Control",
      description: "Complete Udemy course on Git and version control",
      icon: "🔧", // Git-like icon
    },
    {
      name: "Machine Learning",
      description: "NPTEL certification in machine learning concepts",
      icon: "🤖", // ML-like icon
    },
    {
      name: "Spring Boot",
      description: "H20 from Infosys Spring Boot online certification",
      icon: "🍃", // Spring-like icon
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{cert.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{cert.name}</h3>
              <p className="text-slate-600 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
