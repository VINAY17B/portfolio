"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/VINAY17B",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vinay-bhalerao-2a231a256",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:vinaybhalerao017@gmail.com",
    label: "Email",
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Vinay Bhalerao
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Full-Stack Developer & AI Enthusiast passionate about creating innovative solutions.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              © {currentYear} Vinay Bhalerao. Made with <Heart className="h-4 w-4 text-red-500 mx-1" />
              and lots of coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
