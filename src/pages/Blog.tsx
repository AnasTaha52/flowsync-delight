import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

const categories = ["All", "Productivity", "Remote Work", "Engineering", "Design", "Company News"];

const categoryGradients: Record<string, string> = {
  Productivity: "linear-gradient(135deg, var(--accent), var(--accent-light))",
  "Remote Work": "linear-gradient(135deg, var(--accent-2), #0284C7)",
  Engineering: "linear-gradient(135deg, #059669, #10B981)",
  Design: "linear-gradient(135deg, #DB2777, #F472B6)",
  "Company News": "linear-gradient(135deg, var(--accent), var(--accent-2))",
};

const posts = [
  {
    title: "How to Run Effective Async Standups",
    category: "Remote Work",
    excerpt: "Synchronous standups are killing productivity. Here's how to make async standups work for distributed teams.",
    author: "Sarah Kim", initials: "SK", date: "Jan 15, 2024", readTime: "5 min",
  },
  {
    title: "The Hidden Cost of Task-Switching for Developers",
    category: "Productivity",
    excerpt: "Research shows it takes 23 minutes to regain focus after switching tasks. Here's how to protect deep work.",
    author: "Marcus Chen", initials: "MC", date: "Jan 10, 2024", readTime: "7 min",
  },
  {
    title: "Why Your Sprint Retrospectives Aren't Working",
    category: "Engineering",
    excerpt: "Most retros are a waste of time. Here's a framework that actually drives improvement.",
    author: "Alex Rivera", initials: "AR", date: "Jan 8, 2024", readTime: "6 min",
  },
  {
    title: "Designing for Clarity: Lessons from 100 User Interviews",
    category: "Design",
    excerpt: "After interviewing 100 users, we learned that clarity beats cleverness every time.",
    author: "Jordan Lee", initials: "JL", date: "Jan 5, 2024", readTime: "8 min",
  },
  {
    title: "From Chaos to Clarity: A Team Lead's FlowSync Journey",
    category: "Productivity",
    excerpt: "How one team lead transformed their workflow and cut project delivery time by 40%.",
    author: "Priya Patel", initials: "PP", date: "Jan 3, 2024", readTime: "4 min",
  },
  {
    title: "Building a Remote-First Culture That Actually Works",
    category: "Remote Work",
    excerpt: "Remote-first isn't about tools. It's about intentional communication, documentation, and trust.",
    author: "Emma Wilson", initials: "EW", date: "Dec 28, 2023", readTime: "6 min",
  },
];

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter(p => {
    const matchCategory = filter === "All" || p.category === filter;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const featured = posts[0];

  return (
    <main className="pt-24">
      {/* Hero */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Insights for <span className="gradient-text">Modern Teams</span>
          </motion.h1>
          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
            Tips, strategies, and stories to help your team work better together.
          </p>
          <div
            className="max-w-md mx-auto flex items-center gap-3 px-4 py-3 rounded-xl"
            style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}
          >
            <Search size={18} style={{ color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 text-sm outline-none"
              style={{ background: "transparent", color: "var(--text-primary)", border: "none", fontFamily: "var(--font-body)" }}
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Featured */}
      <SectionWrapper>
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card overflow-hidden cursor-pointer"
          >
            <div
              className="h-56 md:h-64 flex items-center justify-center"
              style={{ background: categoryGradients[featured.category] }}
            >
              <span className="text-lg font-bold" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-heading)" }}>
                {featured.category.toUpperCase()}
              </span>
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)" }}>
                {featured.category}
              </span>
              <h2 className="text-2xl font-bold mt-4 mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                {featured.title}
              </h2>
              <p className="mb-4" style={{ color: "var(--text-muted)" }}>{featured.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--gradient)", color: "#fff" }}>
                  {featured.initials}
                </div>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{featured.author}</span>
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>{featured.date}</span>
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <span className="text-sm flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                  <Clock size={12} /> {featured.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Category Filters */}
      <div className="max-w-[1280px] mx-auto px-6 mt-12 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200"
              style={{
                background: filter === cat ? "var(--gradient)" : "var(--glass-bg)",
                color: filter === cat ? "#fff" : "var(--text-muted)",
                border: `1px solid ${filter === cat ? "transparent" : "var(--border-color)"}`,
                fontFamily: "var(--font-heading)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <SectionWrapper className="pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass-card overflow-hidden cursor-pointer"
              >
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: categoryGradients[post.category] || "var(--gradient)" }}
                >
                  <span className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-heading)" }}>
                    {post.category.toUpperCase()}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)" }}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold mt-3 mb-2 line-clamp-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--text-muted)" }}>{post.excerpt}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--gradient)", color: "#fff", fontSize: "8px" }}>
                      {post.initials}
                    </div>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{post.author}</span>
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>· {post.date} · {post.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Newsletter CTA */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="rounded-2xl p-12 text-center" style={{ background: "var(--gradient)" }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>
              Get the latest on team productivity
            </h2>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Join 5,000+ leaders who get our weekly insights.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 w-full sm:w-auto px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "var(--font-body)" }}
              />
              <button className="px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer whitespace-nowrap" style={{ background: "#fff", color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
