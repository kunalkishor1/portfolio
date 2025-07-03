import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Online Quiz Application",
      description: "Interactive quiz platform with robust and scalable system handling multiple users. Features optimized UI for seamless cross-platform experience and real-time score tracking.",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "UI/UX", "Database"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Recipe Generator",
      description: "Deep learning-based project using DenseNet201 model to identify Indian dishes from food images and generate step-by-step recipes. Demonstrates AI application in culinary domain.",
      image: "https://pixabay.com/get/g8cf568e9e353b22c3a6f945ba90064b73f089e8c95b9db448384e42b4ef84cf82f3696a02c52632ceb1828250133927a0d4d6c9affda27365fca76c1d13a6868_1280.jpg",
      technologies: ["Python", "Deep Learning", "DenseNet201", "Computer Vision"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Cake Bakery Website",
      description: "Responsive e-commerce website featuring intuitive product navigation and enhanced UI/UX design. Streamlined customer shopping experience resulting in increased sales and satisfaction.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "E-commerce", "Responsive", "UI/UX"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A showcase of my development projects demonstrating full-stack capabilities and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary-100 text-primary-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-600 hover:text-primary-700 p-0"
                      onClick={() => window.open(project.demoLink, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-slate-600 p-0"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
