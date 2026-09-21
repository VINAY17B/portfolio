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
    title: "InsureLLM — Enterprise RAG Chatbot",
    description:
      "Context-aware Q&A assistant for enterprise insurance documents with semantic chunking, dual-query retrieval, automatic query rewriting, and LLM-based reranking.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aAwVZxlJfmQKl2rPY0Dn4sS6vibNJQ.png",
    techStack: ["Python", "LiteLLM", "ChromaDB", "Gradio", "Pydantic", "RAG"],
    githubUrl: "https://github.com/VINAY17B/InsureLLM",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 2,
    title: "Price Prediction Benchmark",
    description:
      "End-to-end text-to-price prediction pipeline using 20K+ Amazon listings, LLM-assisted data cleaning, a custom PyTorch DNN, Random Forest, and XGBoost.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PT303hVB3RT96YFKZz8JuXyDGSqdvb.png",
    techStack: ["Python", "PyTorch", "Hugging Face", "XGBoost", "scikit-learn", "QLoRA"],
    githubUrl: "https://github.com/VINAY17B",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 3,
    title: "Goa Online Portal Revamp",
    description:
      "Production government services platform with 4+ workflow modules, dynamic multi-step forms, approval flows, status tracking, and 10+ PostgreSQL-backed REST endpoints.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K4orFLRHSL3VIDdhYWNM96wRtZ3LF3.png",
    techStack: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "SonarQube"],
    githubUrl: "https://github.com/VINAY17B",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: 4,
    title: "Othello Game with AI",
    description:
      "Interactive Othello board game with AI-powered move prediction using Minimax and alpha-beta pruning, supporting both player-versus-player and player-versus-AI modes.",
    image: "/images/othello-game.png",
    techStack: ["Python", "JavaScript", "Minimax", "Alpha-Beta Pruning"],
    githubUrl: "https://github.com/VINAY17B/Othello_AI",
    featured: false,
    category: "AI/ML",
  },
  {
    id: 5,
    title: "Food Delivery Website",
    description:
      "Responsive React application with authentication, menu browsing, cart management, and polished interaction design.",
    image: "/images/food-delivery.png",
    techStack: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/VINAY17B/Food_Delivery_Website",
    featured: false,
    category: "Frontend",
  },
]

const categories = ["All", "AI/ML", "Full-Stack", "Frontend"]

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
            Selected work across RAG systems, applied machine learning, and production full-stack engineering.
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
