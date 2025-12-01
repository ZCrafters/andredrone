"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "All Drones" },
  { id: "consumer", label: "Consumer Drones" },
  { id: "professional", label: "Professional Drones" },
  { id: "industrial", label: "Industrial Drones" },
  { id: "fpv", label: "FPV Racing Drones" },
  { id: "agriculture", label: "Agriculture Drones" },
]

export default function ProductFilter() {
  const [activeCategory, setActiveCategory] = useState("all")

  const handleFilter = (categoryId: string) => {
    setActiveCategory(categoryId)
    // Dispatch custom event for ProductsGrid
    window.dispatchEvent(new CustomEvent("filterProducts", { detail: categoryId }))
  }

  return (
    <section className="py-10 bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-gray-400">Filter by Category:</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilter(cat.id)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-white border-primary"
                    : "bg-navy-light text-gray-300 border border-white/15 hover:bg-primary hover:text-white hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
