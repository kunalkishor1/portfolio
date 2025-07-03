import { motion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      title: "Software Engineering Intern",
      company: "Solitaire Infosys",
      location: "Bengaluru, Karnataka",
      period: "Aug 2022 - Oct 2022",
      description: "Gained hands-on Java development experience and engineered an Online Quiz Application. Designed and developed a Cake Bakery Website, streamlining online orders and enhancing customer experience. Committed to delivering high-impact, scalable, and secure applications.",
      current: false
    }
  ];

  const education = [
    {
      degree: "Master in Computer Application",
      school: "Kristu Jayanti College, Autonomous",
      period: "Jan 2023 - Present",
      description: "Pursuing MCA with focus on full-stack development, cybersecurity, and cloud computing. Active as Placement Coordinator facilitating industry interactions and career opportunities.",
      gpa: "",
      achievements: "IEEE Member | Technical Events Participant",
      current: true
    },
    {
      degree: "Bachelor in Computer Application",
      school: "Chandigarh Group of Colleges",
      period: "Jan 2020 - Jan 2023",
      description: "Earned BCA with 73.15%, specializing in software development and database management. Participated in college hackathons and programming events.",
      gpa: "73.15%",
      achievements: "",
      current: false
    },
    {
      degree: "Higher Secondary Education",
      school: "Marwari College, Ranchi",
      period: "Jan 2017 - Jan 2019",
      description: "Focused on mathematics and computer science with active participation in extracurricular activities.",
      gpa: "53.2%",
      achievements: "",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Experience & Education</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            My professional journey and academic achievements in computer science and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Work Experience</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-10 pb-8"
                >
                  <div className={`absolute left-2 top-0 w-4 h-4 rounded-full border-4 border-white shadow ${
                    job.current ? 'bg-primary-600' : 'bg-primary-600'
                  }`}></div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-slate-900">{job.title}</h4>
                      <span className="text-sm text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-primary-600 font-medium mb-3">{job.company} • {job.location}</p>
                    <p className="text-slate-600 leading-relaxed">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-10 pb-8"
                >
                  <div className={`absolute left-2 top-0 w-4 h-4 rounded-full border-4 border-white shadow ${
                    edu.current ? 'bg-primary-600' : 'bg-slate-400'
                  }`}></div>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-slate-900">{edu.degree}</h4>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        edu.current 
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-slate-500 bg-slate-100'
                      }`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-slate-600 font-medium mb-3">{edu.school}</p>
                    <p className="text-slate-600 leading-relaxed mb-3">{edu.description}</p>
                    
                    <div className="space-y-2">
                      {edu.gpa && (
                        <div className="flex items-center">
                          <TrendingUp className="text-green-500 mr-2" size={16} />
                          <span className="text-sm text-slate-600">GPA: {edu.gpa}</span>
                        </div>
                      )}
                      {edu.achievements && (
                        <div className="flex items-center">
                          <Award className="text-primary-500 mr-2" size={16} />
                          <span className="text-sm text-slate-600">{edu.achievements}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
