"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "NaviSight - AR Indoor Navigation",
    description:
      "AR-based indoor navigation app built in Unity with ARCore for real-time path guidance via QR code scanning. Won 1st place in Project Competition organized by the Information Technology Department of PCCE.",
    image: "/images/navisight-ar.jpeg",
    techStack: ["Unity", "ARCore", "C#", "QR Code Scanning"],
    githubUrl: "https://github.com/VINAY17B/NaviSight",
    featured: true,
    category: "AR/VR",
    award: "🏆 1st Place Winner",
  },
  {
    id: 2,
    title: "FitZone – Gym Website",
    description:
      "Dynamic fitness website featuring exercise listings, user registration/login, and interactive UI. Built using the complete MERN stack for optimal performance and user experience.",
    image: "/images/fitzone.png",
    techStack: ["React.js", "Express.js", "MongoDB", "Node.js", "MERN Stack"],
    githubUrl: "https://github.com/VINAY17B/Fitzone",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Othello Game with AI",
    description:
      "Interactive Othello/Reversi board game with AI powered by Minimax algorithm and alpha-beta pruning. Supports Player vs Player and Player vs AI modes with intelligent move prediction.",
    image: "/images/othello-game.png",
    techStack: ["Python", "JavaScript", "HTML/CSS", "Minimax Algorithm", "Alpha-Beta Pruning"],
    githubUrl: "https://github.com/VINAY17B/Othello_AI",
    featured: false,
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Food Delivery Website",
    description:
      "Responsive and visually appealing food delivery website with modern animations and transitions. Features user authentication, menu browsing, and cart management functionality.",
    image: "/images/food-delivery.png",
    techStack: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/VINAY17B/Food_Delivery_Website",
    featured: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Royal Hotel Booking System",
    description:
      "Comprehensive hotel management system with MySQL database, optimizing booking and customer management through automated reservation handling and real-time availability tracking.",
    image: "/images/hilltown-hotel-website-template.jpg",
    techStack: ["MySQL", "DBMS", "Automated Systems", "Real-time Tracking"],
    githubUrl: "https://github.com/VINAY17B/Royal_hotelbooking",
    featured: false,
    category: "Backend",
  },
]

const categories = ["All", "Full-Stack", "AR/VR", "Frontend", "Backend", "AI/ML"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, AR/VR, AI/ML, and
            innovative problem-solving.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={project.featured ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-2 right-2 bg-gradient-to-r from-blue-600 to-purple-600">
                      Featured
                    </Badge>
                  )}
                  {project.award && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-orange-500">
                      {project.award}
                    </Badge>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
