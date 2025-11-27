"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription } from "@/components/ui/dialog"
import { dummyCategoryHero } from "@/data/dummy/categoryHero"
import Image from "next/image"
import { DialogTitle } from "@radix-ui/react-dialog"

interface Subcategory {
  name: string
  image: string
}

interface Category {
  name: string
  image: string
  subcategories: Subcategory[]
}

export function CategoryPopup() {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(dummyCategoryHero[0])

  const handleCategorySelect = (categoryName: string) => {
    const category = dummyCategoryHero.find((cat) => cat.name === categoryName)
    if (category) {
      setSelectedCategory(category)
    }
  }

  return (
    <>



<div className="relative">
               <Dialog open={isOpen} onOpenChange={setIsOpen} >
        <DialogContent className=" w-[95%] sm:w-full scrollbar-hide max-w-sm lg:max-w-4xl h-auto max-h-[95%] lg:h-[500px] p-4 lg:p-6 overflow-y-auto lg:overflow-hidden flex flex-col">
           <DialogTitle className="sr-only">
            Select Application Category
           </DialogTitle>
          <DialogDescription className="sr-only">
            Select an application category and view its subcategories
          </DialogDescription>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-6 h-full flex-1 lg:overflow-hidden ">
            {/* Left: Image and Dropdown */}
            <div className="flex flex-col gap-4 min-w-0 lg:h-full justify-around ">
 
              <div className="flex flex-col gap-2 flex-shrink-0">
                <label className="text-xs lg:text-sm font-semibold text-foreground">Application</label>
                <Select value={selectedCategory?.name || ""} onValueChange={handleCategorySelect}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an application" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyCategoryHero.map((category) => (
                      <SelectItem key={category.name} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
             <div className=" aspect-video lg:aspect-square w-full flex-shrink-0 overflow-hidden border border-border/50 bg-muted">
                <Image
                  src={selectedCategory?.image || "/placeholder.svg?height=600&width=400"}
                  height={600}
                    width={600}
                  alt={selectedCategory?.name || "Category Image"}
                  className=" w-full object-cover h-full"
                />
              </div>

            </div>

            {/* Right: Subcategories Only */}
            <div className="flex flex-col gap-4 min-w-0 overflow-hidden  scrollbar-hide">
              <div className="flex flex-col gap-3 min-h-0 overflow-hidden   ">
                <h3 className="text-xs lg:text-sm font-semibold text-foreground flex-shrink-0">{selectedCategory?.name}</h3>
                {selectedCategory?.subcategories && selectedCategory.subcategories.length > 0 ? (
                  <div className="space-y-2 pr-2 flex-1 overflow-y-auto scrollbar-hide scroll-smooth lg:pb-11">
                    {selectedCategory.subcategories.map((sub) => (
                      <div
                        key={sub.name}
                        className="flex items-center gap-3 rounded-lg border border-border p-2 lg:p-3 hover:bg-secondary/50 cursor-pointer transition-colors group flex-shrink-0 bg-muted"
                      >
                        <div className="h-10 lg:h-12 w-10 lg:w-12 flex-shrink-0 overflow-hidden rounded border border-border/50 bg-muted">
                          <img
                            src={sub.image || "/placeholder.svg"}
                            alt={sub.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <span className="text-xs lg:text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {sub.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs lg:text-sm text-muted-foreground italic">No subcategories available</p>
                )}
              </div>

              {/* <div className="flex gap-3 border-t border-border pt-4 flex-shrink-0">
                <Button variant="outline" onClick={() => setIsOpen(false)} className="flex-1 text-xs lg:text-sm">
                  Cancel
                </Button>
                <Button onClick={() => setIsOpen(false)} className="flex-1 text-xs lg:text-sm">
                  Select
                </Button>
              </div> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
</div>

    </>
  )
}
