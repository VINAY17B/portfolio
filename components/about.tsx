"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Database, Globe, Zap, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  {
    category: "Programming",
    icon: Code,
    technologies: ["C++", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Web Development",
    icon: Globe,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL"],
  },
  {
    category: "Specialized",
    icon: Smartphone,
    technologies: ["Unity", "ARCore", "Data Science", "Revit", "DBMS"],
  },
  {
    category: "Tools & Platforms",
    icon: Database,
    technologies: ["Git", "Microsoft Azure", "MERN Stack", "AR Development"],
  },
]

const interests = [
  {
    icon: Zap,
    title: "Innovation & Problem Solving",
    description: "Passionate about addressing real-world challenges through creative technical solutions",
  },
  {
    icon: Users,
    title: "Leadership & Collaboration",
    description: "Active in student organizations and hackathons, leading teams to achieve impactful results",
  },
  {
    icon: Smartphone,
    title: "Emerging Technologies",
    description: "Focused on AR/VR development, data science, and Industry 4.0 applications",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a motivated BTech Information Technology student with a strong foundation in full-stack web development,
            data science, and problem-solving. I have proven experience in building responsive web applications using
            modern technologies and delivering impactful solutions through internships and hackathons.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mr-3">
                        <skill.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Areas of Interest</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                      <interest.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{interest.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{interest.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
