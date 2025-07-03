import { motion } from "framer-motion";
import { Brain, Users, RotateCcw, MessageCircle, FileText, Languages } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function Skills() {
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "SQL & PostgreSQL", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "Data Structures & Algorithms", level: 75 },
  ];

  const softSkills = [
    { icon: Brain, name: "Strategic Thinking" },
    { icon: Users, name: "Team Work" },
    { icon: RotateCcw, name: "Adaptability" },
    { icon: MessageCircle, name: "Communication" },
  ];

  const tools = [
    { icon: FileText, name: "Microsoft Office Suite", level: "Expert" },
    { icon: Languages, name: "English", level: "Fluent (S/R/W)" },
    { icon: Languages, name: "Hindi", level: "Native (S/R/W)" },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive technical and soft skills developed through academic projects and professional experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">{skill.name}</span>
                    <span className="text-primary-600 font-medium">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Soft Skills & Tools</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-medium text-slate-700 mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                  >
                    <div className="flex items-center">
                      <skill.icon className="text-primary-600 mr-3" size={20} />
                      <span className="text-slate-700">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-slate-700 mb-4">Office & Languages</h4>
              <div className="space-y-3">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-4 rounded-lg shadow-sm border border-slate-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <tool.icon className="text-primary-600 mr-3" size={20} />
                        <span className="text-slate-700">{tool.name}</span>
                      </div>
                      <span className="text-sm text-slate-500">{tool.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
