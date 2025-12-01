"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const products = [
  {
    id: 1,
    category: "professional",
    name: "JCI SkyVision Pro X5",
    specs: ["8K Camera", "45min Flight", "15km Range"],
    description:
      "Our flagship professional drone featuring an 8K Hasselblad camera, advanced obstacle avoidance, and cinema-grade stabilization.",
    image: "/professional-8k-camera-drone-aerial-photography.jpg",
  },
  {
    id: 2,
    category: "industrial",
    name: "JCI IndustrialMapper M3",
    specs: ["LiDAR Sensor", "55min Flight", "Thermal Cam"],
    description:
      "Enterprise-grade mapping drone with dual LiDAR and thermal imaging. Create centimeter-accurate 3D models.",
    image: "/industrial-mapping-drone-with-lidar-sensor.jpg",
  },
  {
    id: 3,
    category: "consumer",
    name: "JCI Compact Traveler",
    specs: ["4K HDR", "34min Flight", "249g Weight"],
    description:
      "Ultra-portable foldable drone that fits in your pocket. Features intelligent tracking and stunning 4K HDR video.",
    image: "/compact-foldable-travel-drone-portable.jpg",
  },
  {
    id: 4,
    category: "fpv",
    name: "JCI RaceBolt FPV",
    specs: ["140km/h Speed", "4K 120fps", "0-100 in 2s"],
    description:
      "Adrenaline-pumping FPV racing drone with immersive goggles included. Experience first-person flight at 140km/h.",
    image: "/fpv-racing-drone-fast-speed.jpg",
  },
  {
    id: 5,
    category: "agriculture",
    name: "JCI AgriSpray Pro",
    specs: ["30L Tank", "40 Acres/hr", "NDVI Sensor"],
    description:
      "Large-scale agricultural drone with 30-liter spray tank and precision application system with crop health monitoring.",
    image: "/agricultural-spray-drone-farming.jpg",
  },
  {
    id: 6,
    category: "professional",
    name: "JCI HeavyLift X8",
    specs: ["12kg Payload", "35min Flight", "Cinema Ready"],
    description: "Heavy-lift octocopter designed for professional cinema cameras. Supports RED and ARRI cameras.",
    image: "/heavy-lift-cinema-drone-professional.jpg",
  },
  {
    id: 7,
    category: "consumer",
    name: "JCI MiniPilot",
    specs: ["1080p Camera", "20min Flight", "Prop Guards"],
    description: "Perfect starter drone for beginners and kids. Features automatic takeoff/landing and altitude hold.",
    image: "/mini-beginner-drone-safe-for-kids.jpg",
  },
  {
    id: 8,
    category: "industrial",
    name: "JCI Guardian S1",
    specs: ["Night Vision", "60min Flight", "Speaker/Mic"],
    description: "24/7 autonomous security drone with AI-powered threat detection and automatic docking station.",
    image: "/security-surveillance-drone-night-vision.jpg",
  },
]

export default function ProductsGrid() {
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const handleFilter = (e: CustomEvent) => setFilter(e.detail)
    window.addEventListener("filterProducts", handleFilter as EventListener)
    return () => window.removeEventListener("filterProducts", handleFilter as EventListener)
  }, [])

  const filteredProducts = filter === "all" ? products : products.filter((p) => p.category === filter)

  return (
    <section className="py-20 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Top Drone Highlights</h2>
          <p className="text-gray-400">Our best-selling and most innovative drone models</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-navy border border-white/10 rounded-2xl overflow-hidden grid md:grid-cols-[1fr_1.2fr] hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={280}
                  className="w-full h-full object-cover min-h-[200px]"
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-navy/90 text-primary text-xs font-semibold rounded-md capitalize">
                  {product.category}
                </span>
              </div>
              <div className="p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-3 text-white">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec) => (
                    <span key={spec} className="px-3 py-1 bg-primary/15 rounded text-xs text-primary">
                      {spec}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">{product.description}</p>
                <Link
                  href="/store"
                  className="inline-block px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center"
                >
                  Buy Now in Store
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
