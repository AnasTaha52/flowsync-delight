import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, BarChart3, Zap, Link2, Bot, X, Check, Layers, Clock, Shield, Globe, MessageSquare, FileText, Calendar, Settings, Bell, Search, Filter, Lock, Cloud } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const tabs = [
  { id: "tasks", label: "Tasks", icon: <CheckCircle size={16} /> },
  { id: "collab", label: "Collaboration", icon: <Users size={16} /> },
  { id: "reporting", label: "Reporting", icon: <BarChart3 size={16} /> },
  { id: "integrations", label: "Integrations", icon: <Link2 size={16} /> },
  { id: "automations", label: "Automations", icon: <Bot size={16} /> },
];

const tabContent: Record<string, { title: string; features: { icon: any; title: string; desc: string }[] }> = {
  tasks: {
    title: "Manage tasks your way",
    features: [
      { icon: <Layers size={18} />, title: "Multiple Views", desc: "Switch between Kanban, List, Timeline, and Calendar views." },
      { icon: <Filter size={18} />, title: "Custom Filters", desc: "Save and share filtered views across your team." },
      { icon: <Calendar size={18} />, title: "Due Dates & Milestones", desc: "Set deadlines, dependencies, and track milestones." },
      { icon: <Settings size={18} />, title: "Custom Fields", desc: "Add dropdowns, numbers, dates, or text fields to any task." },
    ],
  },
  collab: {
    title: "Collaborate in real time",
    features: [
      { icon: <MessageSquare size={18} />, title: "Threaded Comments", desc: "Comment on any task with rich text, files, and @mentions." },
      { icon: <Users size={18} />, title: "Live Presence", desc: "See who's viewing what in real time with live cursors." },
      { icon: <Bell size={18} />, title: "Smart Notifications", desc: "Get notified only about what matters to you." },
      { icon: <FileText size={18} />, title: "Shared Documents", desc: "Embed docs, specs, and notes directly in projects." },
    ],
  },
  reporting: {
    title: "Insights that drive results",
    features: [
      { icon: <BarChart3 size={18} />, title: "Burndown Charts", desc: "Track sprint progress with automated burndown views." },
      { icon: <Clock size={18} />, title: "Time Tracking", desc: "Log time on tasks and generate utilization reports." },
      { icon: <Zap size={18} />, title: "Velocity Metrics", desc: "Measure team output and predict delivery dates." },
      { icon: <Globe size={18} />, title: "Custom Dashboards", desc: "Build dashboards with widgets that matter to your team." },
    ],
  },
  integrations: {
    title: "Connect your favorite tools",
    features: [
      { icon: <Link2 size={18} />, title: "50+ Integrations", desc: "Connect Slack, GitHub, Google Drive, and more." },
      { icon: <Zap size={18} />, title: "Zapier & API", desc: "Build custom workflows with our REST API or Zapier." },
      { icon: <Cloud size={18} />, title: "Cloud Sync", desc: "Automatically sync data across all your connected tools." },
      { icon: <Lock size={18} />, title: "OAuth & SSO", desc: "Secure authentication for enterprise integrations." },
    ],
  },
  automations: {
    title: "Automate the busywork",
    features: [
      { icon: <Bot size={18} />, title: "Rule Builder", desc: "Create if-then rules without any code." },
      { icon: <Zap size={18} />, title: "Auto-Assign", desc: "Route tasks to the right person automatically." },
      { icon: <Bell size={18} />, title: "Status Updates", desc: "Auto-move tasks when conditions are met." },
      { icon: <Clock size={18} />, title: "Scheduled Actions", desc: "Run automations on a schedule (daily, weekly, etc.)." },
    ],
  },
};

const integrations = [
  "Slack", "GitHub", "Google Drive", "Notion", "Jira", "Zoom",
  "Figma", "Zapier", "Dropbox", "Trello", "Asana", "Microsoft Teams",
];

const intIcons: Record<string, any> = {
  Slack: <MessageSquare size={20} />, GitHub: <Cloud size={20} />, "Google Drive": <FileText size={20} />,
  Notion: <FileText size={20} />, Jira: <Layers size={20} />, Zoom: <Users size={20} />,
  Figma: <Layers size={20} />, Zapier: <Zap size={20} />, Dropbox: <Cloud size={20} />,
  Trello: <Layers size={20} />, Asana: <CheckCircle size={20} />, "Microsoft Teams": <Users size={20} />,
};

const allFeatures = [
  { icon: <Layers size={16} />, title: "Kanban Boards", desc: "Visualize work with drag-and-drop boards." },
  { icon: <Calendar size={16} />, title: "Timeline View", desc: "Gantt-style planning for project timelines." },
  { icon: <Filter size={16} />, title: "Custom Filters", desc: "Save and share views with your team." },
  { icon: <Settings size={16} />, title: "Custom Fields", desc: "Add any field type to your tasks." },
  { icon: <Users size={16} />, title: "Live Cursors", desc: "See who's working on what in real time." },
  { icon: <MessageSquare size={16} />, title: "Comments & Threads", desc: "Rich discussions on every task." },
  { icon: <Bell size={16} />, title: "Smart Notifications", desc: "Only get notified about what matters." },
  { icon: <BarChart3 size={16} />, title: "Burndown Charts", desc: "Track sprint velocity automatically." },
  { icon: <Clock size={16} />, title: "Time Tracking", desc: "Log hours and generate reports." },
  { icon: <Bot size={16} />, title: "Automations", desc: "If-then rules without code." },
  { icon: <Zap size={16} />, title: "Zapier Integration", desc: "Connect to 5,000+ apps." },
  { icon: <Link2 size={16} />, title: "REST API", desc: "Build custom integrations easily." },
  { icon: <Lock size={16} />, title: "SSO & SAML", desc: "Enterprise-grade authentication." },
  { icon: <Shield size={16} />, title: "Permissions", desc: "Granular role-based access control." },
  { icon: <Globe size={16} />, title: "Guest Access", desc: "Invite clients without full accounts." },
  { icon: <Search size={16} />, title: "Global Search", desc: "Find anything across all projects." },
  { icon: <FileText size={16} />, title: "Docs & Wiki", desc: "Shared knowledge base built in." },
  { icon: <Cloud size={16} />, title: "File Storage", desc: "Attach and preview files on tasks." },
];

const comparisonRows = [
  { feature: "Unlimited Projects", flow: true, asana: true, trello: false, monday: true },
  { feature: "Real-time Collaboration", flow: true, asana: false, trello: false, monday: true },
  { feature: "Built-in Time Tracking", flow: true, asana: false, trello: false, monday: false },
  { feature: "Custom Automations", flow: true, asana: true, trello: false, monday: true },
  { feature: "Gantt / Timeline", flow: true, asana: true, trello: false, monday: true },
  { feature: "Native Integrations (50+)", flow: true, asana: true, trello: false, monday: true },
  { feature: "SSO & SAML", flow: true, asana: true, trello: false, monday: true },
  { feature: "Custom Fields", flow: true, asana: true, trello: false, monday: true },
  { feature: "Free Plan", flow: true, asana: true, trello: true, monday: false },
  { feature: "API Access", flow: true, asana: true, trello: true, monday: true },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState("tasks");

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
            Powerful Features, <span className="gradient-text">Zero Complexity</span>
          </motion.h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Designed for speed, simplicity, and scale. Everything you need to run world-class projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "50+ Integrations", icon: <Link2 size={14} /> },
              { label: "99.9% Uptime", icon: <Zap size={14} /> },
              { label: "4.9★ Rating", icon: <CheckCircle size={14} /> },
            ].map(s => (
              <span key={s.label} className="glass-card-sm px-4 py-2 text-sm font-medium flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                {s.icon} {s.label}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Tabs */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all duration-200"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: activeTab === tab.id ? "var(--gradient)" : "var(--glass-bg)",
                  color: activeTab === tab.id ? "#fff" : "var(--text-muted)",
                  border: `1px solid ${activeTab === tab.id ? "transparent" : "var(--border-color)"}`,
                }}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-12 items-start"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  {tabContent[activeTab].title}
                </h3>
                <div className="flex flex-col gap-4">
                  {tabContent[activeTab].features.map(f => (
                    <div key={f.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)" }}>
                        {f.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{f.title}</div>
                        <div className="text-sm" style={{ color: "var(--text-muted)" }}>{f.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <TabMockup tab={activeTab} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </SectionWrapper>

      {/* All Features Grid */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Every feature you need, <span className="gradient-text">built in</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="glass-card-sm p-4 flex gap-3"
              >
                <div className="flex-shrink-0" style={{ color: "var(--accent-light)" }}>{f.icon}</div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{f.title}</div>
                  <div className="text-xs" style={{ color: "var(--text-muted)" }}>{f.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Integrations */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Connects with the tools <span className="gradient-text">you already use</span>
          </h2>
          <p className="text-center mb-12" style={{ color: "var(--text-muted)" }}>50+ integrations and growing.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="glass-card-sm p-4 flex flex-col items-center gap-2 text-center cursor-pointer"
              >
                <div style={{ color: "var(--accent-light)" }}>{intIcons[name]}</div>
                <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            How FlowSync <span className="gradient-text">compares</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold py-3 px-4" style={{ color: "var(--text-muted)" }}>Feature</th>
                  <th className="text-center text-sm font-bold py-3 px-4" style={{ color: "var(--accent-light)", borderBottom: "2px solid var(--accent)" }}>FlowSync</th>
                  <th className="text-center text-sm font-semibold py-3 px-4" style={{ color: "var(--text-muted)" }}>Asana</th>
                  <th className="text-center text-sm font-semibold py-3 px-4" style={{ color: "var(--text-muted)" }}>Trello</th>
                  <th className="text-center text-sm font-semibold py-3 px-4" style={{ color: "var(--text-muted)" }}>Monday</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td className="py-3 px-4 text-sm" style={{ color: "var(--text-secondary)" }}>{row.feature}</td>
                    {[row.flow, row.asana, row.trello, row.monday].map((val, j) => (
                      <td key={j} className="text-center py-3 px-4">
                        {val ? <Check size={18} style={{ color: "var(--success)", display: "inline" }} /> : <X size={18} style={{ color: "var(--text-muted)", opacity: 0.4, display: "inline" }} />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function TabMockup({ tab }: { tab: string }) {
  if (tab === "reporting") {
    return (
      <div className="glass-card p-6">
        <div className="text-xs font-semibold mb-3" style={{ color: "var(--text-muted)" }}>Weekly Velocity</div>
        <div className="flex items-end gap-2 mb-4" style={{ height: "120px" }}>
          {[65, 80, 45, 90, 70, 85, 60].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md transition-all duration-300" style={{ height: `${h}%`, background: "var(--gradient)", opacity: 0.6 + i * 0.05 }} />
          ))}
        </div>
        <div className="flex justify-between text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => <span key={d}>{d}</span>)}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-2 flex-1 rounded-full overflow-hidden" style={{ background: "var(--bg-surface)" }}>
            <div className="h-full rounded-full" style={{ width: "78%", background: "var(--gradient)" }} />
          </div>
          <span className="text-xs font-mono" style={{ color: "var(--accent-light)", fontFamily: "var(--font-mono)" }}>78%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-color)" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: i <= 2 ? "var(--success)" : "var(--accent)" }} />
            <div className="flex-1 h-2 rounded-full" style={{ background: "var(--gradient-subtle)", width: `${60 + i * 10}%` }} />
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs" style={{ background: "var(--gradient)", color: "#fff", fontSize: "8px", fontWeight: 700 }}>
              {["SK", "MC", "PP", "AL"][i - 1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
