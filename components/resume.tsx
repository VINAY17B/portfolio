"use client"

import { motion } from "framer-motion"
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Web Development Intern",
    company: "Sofueled",
    period: "July - August 2024",
    description:
      "Enhanced skills in full-stack development and CRUD operations with MySQL. Improved user experience and platform security, boosting efficiency by 30%.",
    achievements: [
      "Developed full-stack web applications with CRUD operations",
      "Improved platform security and user experience",
      "Achieved 30% efficiency boost through optimization",
    ],
  },
  {
    title: "CMS Intern",
    company: "Pristine Engineering Services",
    period: "July - August 2024",
    description:
      "Developed a professional, responsive website for the company, enhancing online presence and ensuring cross-device compatibility.",
    achievements: [
      "Built responsive company website from scratch",
      "Ensured cross-device and cross-browser compatibility",
      "Enhanced company's digital presence and user engagement",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    field: "Honours in Data Science",
    institution: "Goa University",
    period: "2021 - 2025",
    description: "CGPA: 8.4/10. Focused on full-stack development, data science, and emerging technologies.",
    gpa: "8.4 CGPA",
  },
  {
    degree: "Higher Secondary School Certificate (HSSC)",
    field: "Science",
    institution: "Purushottom Walawalkar Higher Secondary School, Mapusa",
    period: "2019 - 2021",
    description: "Goa Board - 70%. Strong foundation in mathematics and computer science.",
    percentage: "70%",
  },
]

const certifications = [
  "Microsoft Azure Application (Great Learning)",
  "Joy Of Computing Using Python (NPTEL)",
  "Training and Development, Industry 4.0 and IoT (NPTEL)",
]

const leadership = [
  {
    title: "Vice President",
    organization: "SUIT",
    description:
      "Spearheaded initiatives to boost member engagement through strategic events, partnerships, and skill-building programs, achieving 20% growth in active participation.",
  },
  {
    title: "Member",
    organization: "ECELL - PCCE",
    description:
      "Participated in E-Summit (IIT Bombay). Managed Avishkar inter-college event, coordinating hackathons and pitching events. Increased engagement by 80%.",
  },
  {
    title: "Participant",
    organization: "SEMICOLONS Hackathon (Persistent Systems)",
    description:
      "Collaborated with diverse team to address real-world challenges, showcasing problem-solving and creativity.",
  },
]

export default function Resume() {
  const handleDownload = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement("a")
      link.href = "/resume/vinay-bhalerao.pdf"
      link.download = "Vinay_Bhalerao_Resume.pdf"
      link.target = "_blank"
      link.rel = "noopener noreferrer"

      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      // Fallback: open in new tab
      window.open("/resume/vinay-bhalerao.pdf", "_blank")
    }
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my complete resume or explore my professional journey below.
          </p>
          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <Briefcase className="h-6 w-6 mr-3 text-blue-600" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="border-l-2 border-blue-200 dark:border-blue-800 pl-4 pb-6 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    <GraduationCap className="h-6 w-6 mr-3 text-purple-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-l-2 border-purple-200 dark:border-purple-800 pl-4 pb-6 last:pb-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {edu.field} - {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    <Award className="h-6 w-6 mr-3 text-green-600" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                      >
                        <FileText className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{cert}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                    <Award className="h-6 w-6 mr-3 text-orange-600" />
                    Leadership & Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {leadership.map((lead, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="border-l-2 border-orange-200 dark:border-orange-800 pl-4 pb-6 last:pb-0"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{lead.title}</h3>
                          <span className="text-sm text-gray-500 dark:text-gray-400">{lead.organization}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">{lead.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
