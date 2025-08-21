"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download } from 'lucide-react'

interface Report {
  id: number;
  name: string;
  href: string;
}

const generateReports = (year: string): Report[] => {
  return Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `CSR Activities / Projects approved by the Board FY ${year}`,
    href: "#", // Placeholder link
  }))
}

export default function CsrReports() {
  const [selectedYear, setSelectedYear] = useState<string>("2024-25")
  const reports: Report[] = generateReports(selectedYear)

  const handleYearChange = (value: string) => {
    setSelectedYear(value)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl flex flex-col mx-auto px-4 ">
        {/* Header and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4 "
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-heading font-bold text-foreground">CSR Reports & Publications</h2>
            <p className="text-muted-foreground mt-1">Browse our annual CSR reports and project approvals.</p>
          </div>
          <div className="w-full md:w-auto">
            <Select onValueChange={handleYearChange} defaultValue={selectedYear} >
              <SelectTrigger className="w-full md:w-[180px] text-red-600 shadow-none border-border">
                <SelectValue placeholder="Select Year" className=''/>
              </SelectTrigger>
              <SelectContent className=''>
                <SelectItem value="2024-25">FY 2024-25</SelectItem>
                <SelectItem value="2023-24">FY 2023-24</SelectItem>
                <SelectItem value="2022-23">FY 2022-23</SelectItem>
                <SelectItem value="2021-22">FY 2021-22</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Reports Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className=""
            >
              <Card className="h-full border-0 bg-neutral-100 transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col gap-4 items-start justify-between">
                    <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                  <div className="flex items-center gap-4 max-w-md">
                    <p className="font-bold text-foreground text-lg lg:text-xl leading-snug">{report.name}</p>
                  </div>
                  <Button asChild  size="sm" className=" flex-shrink-0">
                    <a href={report.href} target="_blank" rel="noopener noreferrer">
                      View
                      <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
