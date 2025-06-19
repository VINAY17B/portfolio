import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vinay Bhalerao - Full-Stack Developer & AR/VR Enthusiast",
  description:
    "Portfolio of Vinay Bhalerao, a passionate Full-Stack Developer and AR/VR Enthusiast from India. Specializing in React, Next.js, Unity3D, and innovative web solutions.",
  keywords: "Vinay Bhalerao, Full-Stack Developer, AR/VR Developer, React, Next.js, Unity3D, Portfolio",
  authors: [{ name: "Vinay Bhalerao" }],
  openGraph: {
    title: "Vinay Bhalerao - Full-Stack Developer & AR/VR Enthusiast",
    description: "Portfolio showcasing innovative web development and AR/VR projects",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
