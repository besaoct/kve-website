import type React from "react"
import type { Metadata } from "next"
import {  Montserrat,} from "next/font/google"
import "./globals.css"
import CookieConsentBanner from "@/components/common/cookie-consent-banner"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/sonner"

const font = Montserrat({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "KVE Industrial Solutions",
  description: "Professional industrial solutions and equipment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/icons/logo-s.png" type="image/x-icon" />
      </head>
      <body  className={`${font.className} antialiased tabular-nums`}  cz-shortcut-listen="true">
        <CartProvider>
          {children}
          <Toaster className="!font-['montserrat'] " />
        </CartProvider>
        <CookieConsentBanner/>
       </body>
    </html>
  )
}
