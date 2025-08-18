"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerSections = [
  {
    title: "Equipment",
    links: [
      "Cutting Equipment",
      "Filler Metals",
      "Automation",
      "Safety/PPE",
      "Weld Fume Control",
      "Accessories and Tools",
      "New and Featured",
    ],
  },
  {
    title: "Solutions",
    links: ["Industry Solutions", "Target Solutions", "Solutions by Material", "Additive Solutions", "Laser Solutions"],
  },
  {
    title: "Safety",
    links: ["Safety Data Sheets", "Welding Safety Training Information", "Safety/PPE Products", "Weld Fume Control"],
  },
  {
    title: "Education",
    links: [
      "Welding Technology & Training Center",
      "Education Programs",
      "Education Products",
      "Education Portal",
      "Education Resources",
      "Community",
      "U/LINC® Curriculum",
      "Register for Classes",
      "James F. Lincoln Foundation",
    ],
  },
  {
    title: "Industries",
    links: [
      "Automotive/Transportation",
      "General Fabrication",
      "Heavy Fabrication",
      "Maintenance / Repair",
      "Offshore",
      "Pipeline",
      "Pipemills",
      "Power Generation",
      "Process Industries",
      "Shipbuilding",
      "Structural",
    ],
  },
  {
    title: "Support",
    links: [
      "Product Registration",
      "Flex Lase Activation",
      "Certificate Center",
      "Resource Center",
      "Support Center",
      "Operator Manuals",
      "Service Navigator - Parts",
      "Warranty",
      "CAD Files",
      "Contact Us",
    ],
  },
]

const corporateLinks = [
  "About Us",
  "Visitor Information",
  "Sustainability",
  "Investor Relations",
  "Careers",
  "Media Newsroom",
]

const legalLinks = [
  "Legal Information",
  "Terms and Conditions",
  "Patents",
  "Privacy Policy",
  "Cookie Policy",
  "Your Privacy Choices/Cookie Preferences",
  "Modern Slavery / Supply Chain Disclosures",
]

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-3xl font-serif font-bold text-red-600 mb-4">KVE</div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Leading provider of industrial solutions, welding equipment, and automation systems. Trusted by
                professionals worldwide for quality, innovation, and reliability.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-neutral-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-neutral-300">info@kve-industrial.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-neutral-300">123 Industrial Blvd, Manufacturing City, MC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-neutral-800 hover:bg-red-600 transition-colors p-2 rounded-full"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-neutral-800 hover:bg-red-600 transition-colors p-2 rounded-full"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-neutral-800 hover:bg-red-600 transition-colors p-2 rounded-full"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-neutral-800 hover:bg-red-600 transition-colors p-2 rounded-full"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-sans font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-300 hover:text-red-600 transition-colors text-sm leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="max-w-md">
            <h3 className="text-lg font-sans font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-neutral-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest product updates and industry insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400 focus:border-red-600"
              />
              <Button className="bg-red-600 hover:bg-red-700 px-4">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Corporate & Legal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-neutral-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-sans font-semibold text-white mb-4">Corporate</h3>
              <div className="grid grid-cols-2 gap-2">
                {corporateLinks.map((link) => (
                  <a key={link} href="#" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-sans font-semibold text-white mb-4">Legal & Compliance</h3>
              <div className="grid grid-cols-1 gap-2">
                {legalLinks.map((link) => (
                  <a key={link} href="#" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 KVE Industrial Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-red-600 transition-colors">
                Business Partners
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-600 transition-colors">
                MyLincoln Partner Program
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-600 transition-colors">
                Suppliers
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-600 transition-colors">
                News & Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
