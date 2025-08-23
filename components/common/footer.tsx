"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,

} from "lucide-react";

import {FaFacebook, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"

import LogoHorizontal from "./logo/logo-h";
import Link from "next/link";

const footerSections = [
    {
    title: "Quick Links",
    links: [
      "Financing Options",
      "Current Promos",
      "Contact Us",
      "Store Locations",
    ],
  },
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
    links: [
      "Industry Solutions",
      "Target Solutions",
      "Solutions by Material",
      "Additive Solutions",
      "Laser Solutions",
    ],
  },
  {
    title: "Safety",
    links: [
      "Safety Data Sheets",
      "Welding Safety Training",
      "Safety/PPE Products",
      "Weld Fume Control",
    ],
  },
  {
    title: "Education",
    links: [
      "Welding Tech & Training",
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
  {
    title: "Corporate Links",
    links: [
      "About Us",
      "Visitor Information",
      "Sustainability",
      "Investor Relations",
      "Careers",
      "Media Newsroom",
    ],
  },
  {
    title: "Legal Links",
    links: [
      "Legal Information",
      "Terms and Conditions",
      "Patents",
      "Privacy Policy",
      "Cookie Policy",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">


        <div className="flex flex-wrap gap-8 lg:gap-12 border-neutral-800">
          {/* Company Info */}

          <div className="lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
                <Link href={'/'} className="h-16 flex justify-start items-center mb-8 w-[200px]">
                  <LogoHorizontal/>
                </Link>
           
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Leading provider of industrial solutions, welding equipment, and
                automation systems. Trusted by professionals worldwide for
                quality, innovation, and reliability.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-neutral-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-neutral-300">
                    info@kve-industrial.com
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-red-600 mr-3" />
                  <span className="text-neutral-300">
                    123 Industrial Blvd, Manufacturing City, MC 12345
                  </span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-red-500 hover:bg-red-600 transition-colors p-2 rounded-sm"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-red-500 hover:bg-red-600 transition-colors p-2 rounded-sm"
                  aria-label="Twitter"
                >
                  <FaTwitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-red-500 hover:bg-red-600 transition-colors p-2 rounded-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="bg-red-500 hover:bg-red-600 transition-colors p-2 rounded-sm"
                  aria-label="YouTube"
                >
                  <FaYoutube className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="lg:max"
            >
              <h3 className="text-lg font-sans font-semibold text-white ">
                {section.title}
              </h3>
              <div className="border-b border-primary mb-4 w-[30%]"/>
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
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-900 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2025 KVE Industrial Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm flex-wrap justify-start whitespace-nowrap">
       
              <a
                href="#"
                className="text-neutral-400 hover:text-red-600 transition-colors"
              >
                Partner Program
              </a>
    
              <a
                href="#"
                className="text-neutral-400 hover:text-red-600 transition-colors"
              >
                News & Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
