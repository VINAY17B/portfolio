import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinay Bhalerao - AI Developer & Full-Stack Engineer",
  description:
    "Portfolio of Vinay Bhalerao, an AI Developer and Full-Stack Engineer building RAG systems, LLM applications, and production React, Node.js, and PostgreSQL products.",
  keywords: "Vinay Bhalerao, AI Developer, Full-Stack Engineer, RAG, LLM, QLoRA, React, Node.js, PostgreSQL, Portfolio",
  authors: [{ name: "Vinay Bhalerao" }],
  openGraph: {
    title: "Vinay Bhalerao - AI Developer & Full-Stack Engineer",
    description: "Portfolio showcasing AI engineering, RAG systems, LLM projects, and production full-stack development",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
