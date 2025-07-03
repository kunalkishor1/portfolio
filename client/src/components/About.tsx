import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Users } from "lucide-react";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Passionate software engineer with a strong foundation in computer applications and hands-on development experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="@assets/23MCAA50 new (2)-min-min (1) (1) (1) (2)-min_1751542426345.jpg" 
              alt="Kunal Kishor - Professional Portrait" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Currently pursuing Master of Computer Applications (MCA) at Kristu Jayanti College with a focus on 
                full-stack development, cybersecurity, and cloud computing. I bring practical experience from my 
                internship at Solitaire Infosys where I worked on Java development projects.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My academic journey includes a Bachelor's in Computer Applications with 73.15% from Chandigarh Group of Colleges, 
                where I specialized in software development and database management. I'm actively involved as a Placement 
                Coordinator and IEEE Member, participating in technical events and research activities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <MapPin className="text-primary-600 mr-3" size={20} />
                  <h4 className="font-semibold text-slate-900">Location</h4>
                </div>
                <p className="text-slate-600">Bengaluru, Karnataka</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <GraduationCap className="text-primary-600 mr-3" size={20} />
                  <h4 className="font-semibold text-slate-900">Education</h4>
                </div>
                <p className="text-slate-600">MCA Student (Current)</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <Briefcase className="text-primary-600 mr-3" size={20} />
                  <h4 className="font-semibold text-slate-900">Experience</h4>
                </div>
                <p className="text-slate-600">Software Engineering Intern</p>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-slate-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-3">
                  <Users className="text-primary-600 mr-3" size={20} />
                  <h4 className="font-semibold text-slate-900">Role</h4>
                </div>
                <p className="text-slate-600">Placement Coordinator</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
