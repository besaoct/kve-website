"use client"

interface CategoryCircleProps {
  category: {
    id: string
    name: string
    icon: string
  }
  x: number
  y: number
}

export default function CategoryCircle({ category, x, y }: CategoryCircleProps) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      <div className="relative group">
        {/* Yellow circle background */}
        <div className="w-24 h-24 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center text-4xl hover:scale-110 transition-transform duration-300 cursor-pointer">
          {category.icon}
        </div>
        {/* Subtle border */}
        <div className="absolute inset-0 rounded-full border-2 border-yellow-300/50" />
      </div>
    </div>
  )
}
