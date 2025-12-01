"use client"

import { useState } from "react"

const categories = [
  { id: "all", label: "All" },
  { id: "tutorials", label: "Drone Tutorials" },
  { id: "safety", label: "Flight Safety" },
  { id: "firmware", label: "Firmware & Updates" },
  { id: "reviews", label: "Product Reviews" },
]

export default function ForumCategories() {
  const [active, setActive] = useState("all")

  const handleFilter = (id: string) => {
    setActive(id)
    window.dispatchEvent(new CustomEvent("filterForum", { detail: id }))
  }

  return (
    <section className="py-8 bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5">
        <h3 className="text-center text-gray-400 text-sm mb-4">Hot Categories:</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                active === cat.id
                  ? "bg-primary text-white border-primary"
                  : "bg-navy-light text-gray-300 border border-white/15 hover:bg-primary hover:text-white hover:border-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
