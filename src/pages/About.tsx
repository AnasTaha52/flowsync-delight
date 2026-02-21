import { motion } from "framer-motion";
import { Linkedin, Target, Unlock, Zap, Globe } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const stats = [
  { value: "12,000+", label: "Teams" },
  { value: "140+", label: "Countries" },
  { value: "4.9★", label: "Average Rating" },
  { value: "99.9%", label: "Uptime" },
];

const timeline = [
  { year: "2019", text: "Founded in a small apartment — 2 co-founders, 1 big idea about team collaboration." },
  { year: "2020", text: "Launched beta, signed first 500 users in 30 days. Product-market fit confirmed." },
  { year: "2021", text: "Raised $4M seed round. Grew to a 20-person team across 5 time zones." },
  { year: "2022", text: "Hit 5,000 paying customers. Launched iOS and Android mobile apps." },
  { year: "2023", text: "Series A: $18M raised. Expanded to the EU market with GDPR compliance." },
  { year: "2024", text: "12,000+ teams, 150 employees, serving users in 140+ countries." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", initials: "AR" },
  { name: "Sarah Kim", role: "CTO & Co-Founder", initials: "SK" },
  { name: "Marcus Chen", role: "VP of Engineering", initials: "MC" },
  { name: "Priya Patel", role: "Head of Product", initials: "PP" },
  { name: "Jordan Lee", role: "Head of Design", initials: "JL" },
  { name: "Emma Wilson", role: "VP of Marketing", initials: "EW" },
  { name: "David Okafor", role: "Head of Sales", initials: "DO" },
  { name: "Lina Nakamura", role: "Head of Customer Success", initials: "LN" },
];

const values = [
  { icon: <Target size={24} />, title: "Customer Obsessed", desc: "Every decision starts with the customer. We build what teams need, not what looks good on a roadmap." },
  { icon: <Unlock size={24} />, title: "Radical Transparency", desc: "We share openly — our roadmap, our metrics, even our mistakes. Trust is earned through honesty." },
  { icon: <Zap size={24} />, title: "Bias for Action", desc: "We ship fast, learn faster. Perfect is the enemy of progress. Iterate relentlessly." },
  { icon: <Globe size={24} />, title: "Remote First", desc: "Our team spans 15+ countries. We build for distributed teams because we are one." },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-extrabold mb-6"
                style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
              >
                We're building the future of <span className="gradient-text">team collaboration</span>
              </motion.h1>
              <p className="mb-4" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                FlowSync started with a simple frustration: project management tools were either too complex or too basic. We set out to build something that just works — beautifully designed, incredibly fast, and powerful enough for any team.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>
                Today, we serve over 12,000 teams across 140 countries. But we're just getting started.
              </p>
            </div>
            <div className="flex-1 w-full">
              {/* Abstract geometric illustration */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute w-40 h-40 rounded-3xl top-4 left-4 rotate-12" style={{ background: "var(--gradient)", opacity: 0.2 }} />
                <div className="absolute w-32 h-32 rounded-full top-20 right-8" style={{ background: "var(--accent-2)", opacity: 0.15 }} />
                <div className="absolute w-48 h-48 rounded-2xl bottom-8 left-12 -rotate-6" style={{ border: "2px solid var(--border-color)" }} />
                <div className="absolute w-24 h-24 rounded-xl bottom-16 right-16 rotate-45" style={{ background: "var(--gradient-subtle)", border: "1px solid var(--border-color)" }} />
                <div className="absolute w-16 h-16 rounded-full top-8 right-20" style={{ background: "var(--accent)", opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-6xl font-bold gradient-text mb-6" style={{ fontFamily: "var(--font-heading)" }}>"</div>
          <blockquote className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)", lineHeight: 1.4 }}>
            We believe great work happens when teams have clarity, not chaos.
          </blockquote>
          <p style={{ color: "var(--text-muted)" }}>— Alex Rivera, CEO & Co-Founder</p>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card text-center p-6"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Our <span className="gradient-text">Story</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "var(--border-color)" }} />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} ml-10 md:ml-0`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <span className="text-lg font-bold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>{item.year}</span>
                  <p className="text-sm mt-1" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.text}</p>
                </div>
                <div className="absolute left-[-26px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 10px var(--glow-accent)" }} />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Meet the <span className="gradient-text">Team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4"
                  style={{ background: "var(--gradient)", color: "#fff", fontFamily: "var(--font-heading)" }}
                >
                  {member.initials}
                </div>
                <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{member.name}</div>
                <div className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>{member.role}</div>
                <a href="#" style={{ color: "var(--accent-light)" }}><Linkedin size={16} /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)" }}>
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>{v.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Careers CTA */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="rounded-2xl p-12 text-center" style={{ background: "var(--gradient)" }}>
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>We're hiring across all teams</h2>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Join us in building the future of work. Remote-friendly positions available worldwide.</p>
            <a href="#" className="px-8 py-3 rounded-xl font-semibold inline-block" style={{ background: "#fff", color: "var(--accent)", fontFamily: "var(--font-heading)" }}>
              View Open Roles
            </a>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
