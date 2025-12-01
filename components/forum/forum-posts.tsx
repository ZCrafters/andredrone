"use client"

import { useState, useEffect } from "react"

const posts = [
  {
    id: 1,
    category: "tutorials",
    author: "@JCI_Official",
    isOfficial: true,
    badge: "Official",
    title: "Complete Beginner's Guide to Flying Your First JCI Drone",
    description:
      "Welcome to the JCI family! In this comprehensive guide, we'll walk you through everything from unboxing to your first successful flight.",
    views: "12.5k",
    likes: "2,847",
    shares: "523",
    date: "2 hours ago",
  },
  {
    id: 2,
    category: "firmware",
    author: "@JCI_TechSupport",
    isOfficial: true,
    badge: "Official",
    title: "🚀 Firmware v3.2.1 Released - Major Performance Improvements!",
    description:
      "We're excited to announce the release of firmware v3.2.1 for SkyVision Pro series. This update includes 15% improved battery efficiency.",
    views: "8.3k",
    likes: "1,234",
    shares: "312",
    date: "5 hours ago",
  },
  {
    id: 3,
    category: "reviews",
    author: "@aerialpilot89",
    isOfficial: false,
    badge: "Verified",
    title: "6 Months with SkyVision Pro X5 - An Honest Review",
    description:
      "After 6 months of intensive use for real estate photography and weddings, here's my detailed review of the SkyVision Pro X5.",
    views: "5.7k",
    likes: "892",
    shares: "156",
    date: "1 day ago",
  },
  {
    id: 4,
    category: "safety",
    author: "@dronemaster_sarah",
    isOfficial: false,
    badge: "Verified",
    title: "⚠️ Flying Near Airports: What Every Pilot MUST Know",
    description:
      "Let's talk about airport no-fly zones. I've seen too many beginners unknowingly violate airspace regulations.",
    views: "4.2k",
    likes: "1,567",
    shares: "423",
    date: "2 days ago",
  },
  {
    id: 5,
    category: "tutorials",
    author: "@cinematicmike",
    isOfficial: false,
    badge: "Verified",
    title: "5 Cinematic Drone Moves That Will Transform Your Videos",
    description:
      "Want to take your drone footage to the next level? I'm sharing my top 5 cinematic techniques including settings recommendations.",
    views: "9.1k",
    likes: "2,103",
    shares: "678",
    date: "3 days ago",
  },
  {
    id: 6,
    category: "firmware",
    author: "@techjunkie_id",
    isOfficial: false,
    badge: "Verified",
    title: "How to Safely Rollback Firmware if Updates Cause Issues",
    description:
      "Had problems after a firmware update? Don't panic! Here's a step-by-step guide on how to safely rollback.",
    views: "3.4k",
    likes: "756",
    shares: "234",
    date: "4 days ago",
  },
  {
    id: 7,
    category: "reviews",
    author: "@farmerpro2024",
    isOfficial: false,
    badge: "Verified",
    title: "AgriSpray Pro Changed How I Manage My 500-Acre Farm",
    description:
      "As a farmer with 500 acres of rice paddies, I was skeptical about drone spraying. After 3 months, I've cut pesticide costs by 40%.",
    views: "6.8k",
    likes: "1,892",
    shares: "567",
    date: "5 days ago",
  },
  {
    id: 8,
    category: "safety",
    author: "@JCI_SafetyTeam",
    isOfficial: true,
    badge: "Official",
    title: "📋 Pre-Flight Checklist: The 10 Things to Check Every Time",
    description:
      "Safety first! Our engineering team has compiled the essential pre-flight checklist that every JCI pilot should follow.",
    views: "15.2k",
    likes: "3,456",
    shares: "892",
    date: "1 week ago",
  },
]

export default function ForumPosts() {
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const handleFilter = (e: CustomEvent) => setFilter(e.detail)
    window.addEventListener("filterForum", handleFilter as EventListener)
    return () => window.removeEventListener("filterForum", handleFilter as EventListener)
  }, [])

  const filteredPosts = filter === "all" ? posts : posts.filter((p) => p.category === filter)

  return (
    <section className="py-16 bg-navy-light">
      <div className="max-w-4xl mx-auto px-5">
        <div className="flex flex-col gap-5">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-navy border border-white/10 rounded-xl p-6 hover:border-primary transition-all"
            >
              <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm ${
                      post.isOfficial ? "bg-primary text-white" : "bg-navy-light text-gray-400"
                    }`}
                  >
                    {post.isOfficial ? "JCI" : post.author.slice(1, 3).toUpperCase()}
                  </div>
                  <div>
                    <span className="font-semibold text-white block">{post.author}</span>
                    <span
                      className={`px-2 py-0.5 text-xs font-semibold uppercase rounded ${
                        post.isOfficial ? "bg-primary text-white" : "bg-green-500 text-white"
                      }`}
                    >
                      {post.badge}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1.5 bg-primary/15 text-primary text-xs rounded-md capitalize">
                  {post.category.replace("-", " ")}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-white">{post.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.description}</p>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div className="flex gap-5 text-sm text-gray-500">
                  <span>👁 {post.views}</span>
                  <span>❤️ {post.likes}</span>
                  <span>🔁 {post.shares}</span>
                </div>
                <span className="text-xs text-gray-600">{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-navy text-white font-semibold rounded-lg border border-gray-600 hover:bg-navy-lighter hover:border-primary transition-all">
            Load More Posts
          </button>
        </div>
      </div>
    </section>
  )
}
