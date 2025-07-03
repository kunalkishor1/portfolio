import { motion } from "framer-motion";
import { Code, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
            >
              Hi, I'm <span className="text-transparent bg-clip-text tech-gradient">Kunal Kishor</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 mb-8"
            >
              Software Engineer & Full-Stack Developer
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-slate-500 mb-8 max-w-2xl"
            >
              Results-driven Software Engineer skilled in Java, Python, SQL, and Web Development. 
              Currently pursuing MCA with focus on full-stack development, cybersecurity, and cloud computing.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                className="tech-gradient text-white hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                size="lg"
              >
                <Code className="mr-2 h-4 w-4" />
                View My Work
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary-600 text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <a href="mailto:kunalkishor93344@gmail.com" className="text-slate-400 hover:text-primary-600 transition-colors duration-200">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/kunal-kishor-48778a223" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/kunalkishor1" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="tel:6205625053" className="text-slate-400 hover:text-primary-600 transition-colors duration-200">
                <Phone size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Professional developer workspace" 
                className="rounded-2xl shadow-2xl w-96 h-96 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary-600/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
