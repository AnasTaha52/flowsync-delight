import { motion } from "framer-motion";
import { CheckCircle, Users, BarChart3, Play, ArrowRight, Star, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

const trustCompanies = ["Vercel", "Linear", "Notion", "Stripe", "Figma"];

const features = [
  {
    icon: <CheckCircle size={24} />,
    title: "Task Management",
    desc: "Kanban, list, and timeline views. Drag and drop tasks, assign owners, set due dates with ease.",
  },
  {
    icon: <Users size={24} />,
    title: "Real-Time Collaboration",
    desc: "Live cursors, instant comments, @mentions, and activity feeds keep everyone aligned.",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Smart Reporting",
    desc: "Automated progress reports, burndown charts, and workload views — all in real time.",
  },
];

const steps = [
  { num: "01", title: "Create your workspace in 60 seconds", desc: "Sign up, name your workspace, and you're ready to go. No complex setup or onboarding calls needed." },
  { num: "02", title: "Invite your team and assign tasks", desc: "Add your team via email. Create projects, break work into tasks, and assign ownership in seconds." },
  { num: "03", title: "Track progress and ship faster", desc: "See real-time progress across all projects. Identify blockers early and keep your team in flow." },
];

const testimonials = [
  { quote: "FlowSync completely replaced our need for three different tools. Everything just works together seamlessly.", name: "Sarah Kim", role: "Product Lead at Vercel", initials: "SK" },
  { quote: "The real-time collaboration features are incredible. Our remote team feels more connected than ever.", name: "Marcus Chen", role: "Engineering Manager at Linear", initials: "MC" },
  { quote: "We cut our project delivery time by 40% within the first month. The automation features are a game changer.", name: "Priya Patel", role: "CTO at Beacon Labs", initials: "PP" },
];

const marqueeItems = [
  "Pixel Perfect", "Real-time Updates", "Kanban Boards", "Timeline View",
  "Smart Automations", "Team Collaboration", "Custom Workflows", "Sprint Planning",
  "Burndown Charts", "Activity Feeds",
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Gradient orbs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
          style={{ background: "var(--accent)", top: "10%", left: "20%", animation: "float-orb-1 8s ease-in-out infinite" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: "var(--accent-2)", bottom: "10%", right: "15%", animation: "float-orb-2 10s ease-in-out infinite" }}
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}
          >
            Your Team's Work,<br />
            Finally <span className="gradient-text">in Sync</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-8"
            style={{ color: "var(--text-muted)", lineHeight: 1.7 }}
          >
            FlowSync brings your tasks, timelines, and team together in one beautifully
            designed workspace. Less chaos, more flow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link to="/pricing" className="btn-gradient" style={{ padding: "14px 32px", fontSize: "16px" }}>
              Start for Free — No Credit Card
            </Link>
            <button className="btn-ghost" style={{ padding: "14px 28px", fontSize: "16px" }}>
              <Play size={16} /> Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-16"
          >
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>Trusted by 12,000+ teams at</span>
            {trustCompanies.map(name => (
              <span key={name} className="text-sm font-bold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>
                {name}
              </span>
            ))}
          </motion.div>

          {/* Fake Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <SectionWrapper>
        <div className="overflow-hidden py-6" style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-8 text-sm font-medium" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>
                {item} <span className="gradient-text mx-2">•</span>
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "12,000+", label: "Teams" },
              { value: "140+", label: "Countries" },
              { value: "4.9★", label: "Rating" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card text-center p-6"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Features */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Everything your team needs. <span className="gradient-text">Nothing it doesn't.</span>
          </h2>
          <p className="text-center mb-12 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Powerful features designed for modern teams who want to move fast and stay organized.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 group cursor-pointer"
                style={{ transition: "all 0.3s ease" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)" }}
                >
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            How it <span className="gradient-text">works</span>
          </h2>
          <div className="flex flex-col gap-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <span className="text-6xl font-extrabold gradient-text" style={{ fontFamily: "var(--font-heading)" }}>
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-3" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{step.desc}</p>
                </div>
                <div className="flex-1 w-full">
                  <StepIllustration step={i} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Feature Deep Dive */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col gap-24">
          {/* Section A */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <KanbanMini />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                See everything <span className="gradient-text">at a glance</span>
              </h3>
              {["Multiple project views", "Custom fields & tags", "Timeline dependencies", "Color-coded priorities"].map(item => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} style={{ color: "var(--success)" }} />
                  <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section B */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="flex-1 w-full">
              <ChatMockup />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                Built for how teams <span className="gradient-text">actually work</span>
              </h3>
              {["Threaded comments on tasks", "Real-time presence indicators", "@mention anyone instantly", "Activity feeds per project"].map(item => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} style={{ color: "var(--success)" }} />
                  <span style={{ color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Loved by teams <span className="gradient-text">everywhere</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8"
              >
                <div className="text-4xl font-bold mb-4 gradient-text" style={{ fontFamily: "var(--font-heading)" }}>"</div>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "var(--gradient)", color: "#fff" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--warning)" style={{ color: "var(--warning)" }} />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Pricing Teaser */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Plans that scale with your team
          </h2>
          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            {["Free", "Pro", "Business"].map(p => (
              <span key={p} className="px-5 py-2 rounded-full text-sm font-medium" style={{ background: "var(--gradient-subtle)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }}>
                {p}
              </span>
            ))}
          </div>
          <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--accent-light)" }}>
            See full pricing <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center" style={{ background: "var(--gradient)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-[80px]" style={{ background: "#fff" }} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)", color: "#fff" }}>
              Ready to bring your team into flow?
            </h2>
            <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
              Join 12,000+ teams already using FlowSync to ship faster and work smarter.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="px-8 py-3 rounded-xl font-semibold text-base cursor-pointer inline-flex items-center gap-2"
                style={{ background: "#fff", color: "var(--accent)", fontFamily: "var(--font-heading)" }}
              >
                Get Started Free
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-xl font-semibold text-base cursor-pointer inline-flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", fontFamily: "var(--font-heading)" }}
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

/* ---- CSS-only Mockup Components ---- */

function DashboardMockup() {
  const cols = [
    { title: "To Do", color: "var(--accent)", tasks: [
      { name: "Design homepage hero", tag: "Design", initials: "SK" },
      { name: "Write API documentation", tag: "Docs", initials: "MC" },
    ]},
    { title: "In Progress", color: "var(--accent-2)", tasks: [
      { name: "Build auth flow", tag: "Dev", initials: "PP" },
      { name: "User testing round 2", tag: "Research", initials: "AL" },
      { name: "Dashboard analytics", tag: "Dev", initials: "SK" },
    ]},
    { title: "Done", color: "var(--success)", tasks: [
      { name: "Set up CI/CD pipeline", tag: "DevOps", initials: "MC" },
      { name: "Brand guidelines v2", tag: "Design", initials: "PP" },
    ]},
  ];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border-color)", boxShadow: "0 0 80px var(--glow-accent)", background: "var(--bg-card)" }}>
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div className="flex-1 mx-4 py-1 px-3 rounded-md text-xs" style={{ background: "var(--bg-primary)", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          app.flowsync.io/dashboard
        </div>
      </div>
      {/* Kanban */}
      <div className="grid grid-cols-3 gap-3 p-4">
        {cols.map(col => (
          <div key={col.title} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full" style={{ background: col.color }} />
              <span className="text-xs font-semibold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>{col.title}</span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{col.tasks.length}</span>
            </div>
            {col.tasks.map(task => (
              <div key={task.name} className="p-3 rounded-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
                <span className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block" style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)", fontSize: "10px" }}>
                  {task.tag}
                </span>
                <p className="text-xs font-medium mb-2" style={{ color: "var(--text-primary)" }}>{task.name}</p>
                <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "var(--gradient)", fontSize: "8px", color: "#fff", fontWeight: 700 }}>
                  {task.initials}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function StepIllustration({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg" style={{ background: "var(--gradient)" }} />
          <div className="h-3 w-32 rounded-full" style={{ background: "var(--gradient-subtle)" }} />
        </div>
        <div className="h-3 w-full rounded-full mb-3" style={{ background: "var(--gradient-subtle)" }} />
        <div className="h-3 w-3/4 rounded-full" style={{ background: "var(--gradient-subtle)" }} />
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="glass-card p-6">
        <div className="flex gap-2 mb-4">
          {["SK", "MC", "PP", "AL"].map(init => (
            <div key={init} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "var(--gradient)", color: "#fff" }}>
              {init}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs" style={{ border: "2px dashed var(--border-color)", color: "var(--text-muted)" }}>+</div>
        </div>
        {["Design system", "API integration", "User testing"].map(t => (
          <div key={t} className="flex items-center gap-3 py-2" style={{ borderBottom: "1px solid var(--border-color)" }}>
            <div className="w-4 h-4 rounded" style={{ border: "2px solid var(--accent)" }} />
            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{t}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="glass-card p-6">
      <div className="flex items-end gap-2 mb-4" style={{ height: "80px" }}>
        {[40, 60, 35, 80, 55, 70, 45].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: "var(--gradient)", opacity: 0.7 + i * 0.04 }} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="h-2 flex-1 rounded-full overflow-hidden" style={{ background: "var(--bg-surface)" }}>
          <div className="h-full rounded-full" style={{ width: "72%", background: "var(--gradient)" }} />
        </div>
        <span className="text-xs font-mono" style={{ color: "var(--accent-light)", fontFamily: "var(--font-mono)" }}>72%</span>
      </div>
    </div>
  );
}

function KanbanMini() {
  return (
    <div className="glass-card p-5">
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: "Backlog", items: ["Research competitors", "Define personas"] },
          { title: "Active", items: ["Build dashboard", "Design system"] },
          { title: "Review", items: ["Landing page copy"] },
        ].map(col => (
          <div key={col.title}>
            <div className="text-xs font-semibold mb-2" style={{ color: "var(--text-muted)" }}>{col.title}</div>
            {col.items.map(item => (
              <div key={item} className="p-2 rounded-lg mb-2 text-xs" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)", color: "var(--text-secondary)" }}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatMockup() {
  const messages = [
    { initials: "SK", name: "Sarah", text: "Just pushed the new designs. Can you review?", time: "2m ago" },
    { initials: "MC", name: "Marcus", text: "@Sarah looks great! Small tweak on the spacing.", time: "1m ago" },
    { initials: "PP", name: "Priya", text: "Approved ✅ Let's ship it!", time: "Just now" },
  ];
  return (
    <div className="glass-card p-5">
      <div className="flex flex-col gap-3">
        {messages.map(m => (
          <div key={m.text} className="flex gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{ background: "var(--gradient)", color: "#fff", fontSize: "9px" }}>
              {m.initials}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>{m.name}</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{m.time}</span>
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
