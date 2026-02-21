import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Wrench, Mail, MapPin, Clock, Twitter, Linkedin, Github, Zap, CheckCircle, Send } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

const contactOptions = [
  { icon: <MessageSquare size={24} />, title: "Chat with Sales", desc: "Get a personalized demo of FlowSync.", cta: "Book a Call" },
  { icon: <Wrench size={24} />, title: "Technical Support", desc: "Having an issue? We'll fix it fast.", cta: "Open a Ticket" },
  { icon: <Mail size={24} />, title: "General Inquiry", desc: "hello@flowsync.io", cta: "Send Email" },
];

const teamSizes = ["Just me", "2–10", "11–50", "51–200", "200+"];
const subjects = ["Product Demo", "Pricing Question", "Technical Support", "Partnership", "Other"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", teamSize: "", subject: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            We'd Love to <span className="gradient-text">Hear From You</span>
          </motion.h1>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            Whether you're evaluating FlowSync, need help, or just want to say hi — we're here.
          </p>
        </div>
      </SectionWrapper>

      {/* 3 Option Cards */}
      <div className="max-w-[1280px] mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactOptions.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gradient-subtle)", color: "var(--accent-light)" }}>
                {opt.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>{opt.title}</h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>{opt.desc}</p>
              <button className="btn-ghost" style={{ fontSize: "13px", padding: "8px 20px" }}>{opt.cta}</button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Split Layout */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                Get in Touch
              </h2>

              {[
                { icon: <MapPin size={18} />, label: "San Francisco, CA", sub: "548 Market St, Suite 12345" },
                { icon: <MapPin size={18} />, label: "London, UK", sub: "71 Queen Victoria St, EC4V 4BE" },
              ].map(loc => (
                <div key={loc.label} className="flex gap-3 mb-6">
                  <div style={{ color: "var(--accent-light)" }}>{loc.icon}</div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{loc.label}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{loc.sub}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mb-6">
                <Mail size={18} style={{ color: "var(--accent-light)" }} />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>hello@flowsync.io</span>
              </div>

              <div className="flex gap-3 mb-6">
                <Clock size={18} style={{ color: "var(--accent-light)" }} />
                <span className="text-sm" style={{ color: "var(--text-muted)" }}>Mon–Fri, 9am–6pm PST</span>
              </div>

              <div className="flex gap-3 mb-8">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ border: "1px solid var(--border-color)", color: "var(--text-muted)", background: "var(--glass-bg)" }}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: "var(--gradient-subtle)", border: "1px solid var(--border-color)" }}>
                <Zap size={16} style={{ color: "var(--accent-light)" }} />
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>Average response: under 2 hours</span>
              </div>
            </div>

            {/* Right form */}
            <div className="flex-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--gradient-subtle)", color: "var(--success)" }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>Thank you!</h3>
                  <p style={{ color: "var(--text-muted)" }}>We'll be in touch within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-5">
                  {[
                    { key: "name", label: "Full Name", type: "text" },
                    { key: "email", label: "Work Email", type: "email" },
                    { key: "company", label: "Company Name", type: "text" },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="text-xs font-semibold mb-1 block" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ background: "var(--bg-surface)", color: "var(--text-primary)", border: "1px solid var(--border-color)", fontFamily: "var(--font-body)" }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={e => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--bg-surface)", color: "var(--text-primary)", border: "1px solid var(--border-color)", fontFamily: "var(--font-body)" }}
                    >
                      <option value="">Select...</option>
                      {teamSizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>What can we help with?</label>
                    <select
                      value={formData.subject}
                      onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ background: "var(--bg-surface)", color: "var(--text-primary)", border: "1px solid var(--border-color)", fontFamily: "var(--font-body)" }}
                    >
                      <option value="">Select...</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                      style={{ background: "var(--bg-surface)", color: "var(--text-primary)", border: "1px solid var(--border-color)", fontFamily: "var(--font-body)" }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-gradient w-full justify-center"
                    style={{ padding: "14px", fontSize: "15px" }}
                  >
                    Send Message <Send size={16} />
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
