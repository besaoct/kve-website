import type React from "react"
import type { Metadata } from "next"
import {  Montserrat,} from "next/font/google"
import "./globals.css"

const font = Montserrat({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "KVE Industrial Solutions",
  description: "Professional industrial solutions and equipment",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body  className={`${font.className} antialiased`}>
        {children}
        </body>
    </html>
  )
}
