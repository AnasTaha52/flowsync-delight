import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    desc: "For individuals and small teams getting started.",
    badge: null,
    highlight: false,
    features: [
      { text: "Up to 5 members", included: true },
      { text: "3 active projects", included: true },
      { text: "Basic task management", included: true },
      { text: "1GB storage", included: true },
      { text: "Community support", included: true },
      { text: "Advanced views", included: false },
      { text: "Automations", included: false },
      { text: "Priority support", included: false },
    ],
    cta: "Get Started Free",
    ctaStyle: "ghost",
  },
  {
    name: "Pro",
    monthly: 12,
    annual: 10,
    desc: "For growing teams that need more power.",
    badge: "Most Popular",
    highlight: true,
    features: [
      { text: "Unlimited members", included: true },
      { text: "Unlimited projects", included: true },
      { text: "Advanced views (Timeline, Gantt)", included: true },
      { text: "Automations (100/month)", included: true },
      { text: "50GB storage", included: true },
      { text: "Priority support", included: true },
      { text: "All integrations", included: true },
      { text: "Custom fields", included: true },
    ],
    cta: "Start Free Trial",
    ctaStyle: "gradient",
  },
  {
    name: "Business",
    monthly: 28,
    annual: 22,
    desc: "For organizations that need enterprise-grade features.",
    badge: null,
    highlight: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Admin controls & permissions", included: true },
      { text: "Advanced reporting & analytics", included: true },
      { text: "Custom workflows", included: true },
      { text: "Unlimited automations", included: true },
      { text: "500GB storage", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "SSO & SAML", included: true },
    ],
    cta: "Contact Sales",
    ctaStyle: "ghost",
  },
];

const faqs = [
  { q: "Can I change plans later?", a: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing." },
  { q: "Is there a free trial on paid plans?", a: "Yes, both Pro and Business plans come with a 14-day free trial. No credit card required to start." },
  { q: "How does per-seat pricing work?", a: "You're billed based on the number of active team members in your workspace. Guests and viewers don't count toward your seat limit." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for annual enterprise contracts." },
  { q: "Do you offer nonprofit or student discounts?", a: "Yes! We offer 50% off for verified nonprofits and educational institutions. Contact our sales team to get started." },
  { q: "What happens to my data if I cancel?", a: "Your data remains accessible for 30 days after cancellation. You can export everything at any time. After 30 days, data is permanently deleted." },
  { q: "Is my data secure?", a: "Absolutely. We use AES-256 encryption at rest and TLS 1.3 in transit. We're SOC 2 Type II certified and GDPR compliant." },
  { q: "Do you offer enterprise contracts?", a: "Yes, we offer custom enterprise agreements with dedicated support, SLAs, and volume discounts. Contact our sales team for details." },
];

const comparisonCategories = [
  {
    category: "Core Features",
    rows: [
      { feature: "Projects", free: "3", pro: "Unlimited", business: "Unlimited" },
      { feature: "Members", free: "5", pro: "Unlimited", business: "Unlimited" },
      { feature: "Storage", free: "1GB", pro: "50GB", business: "500GB" },
    ],
  },
  {
    category: "Views",
    rows: [
      { feature: "List & Board", free: "✓", pro: "✓", business: "✓" },
      { feature: "Timeline & Gantt", free: "—", pro: "✓", business: "✓" },
      { feature: "Calendar", free: "—", pro: "✓", business: "✓" },
    ],
  },
  {
    category: "Collaboration",
    rows: [
      { feature: "Comments & @mentions", free: "✓", pro: "✓", business: "✓" },
      { feature: "Live Presence", free: "—", pro: "✓", business: "✓" },
      { feature: "Guest Access", free: "—", pro: "✓", business: "✓" },
    ],
  },
  {
    category: "Admin & Support",
    rows: [
      { feature: "Role-based Permissions", free: "—", pro: "Basic", business: "Advanced" },
      { feature: "SSO / SAML", free: "—", pro: "—", business: "✓" },
      { feature: "Support", free: "Community", pro: "Priority", business: "Dedicated" },
    ],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h1>
          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>No hidden fees. No surprises. Cancel anytime.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className="text-sm font-medium" style={{ color: annual ? "var(--text-muted)" : "var(--text-primary)" }}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-7 rounded-full relative cursor-pointer transition-all duration-300"
              style={{ background: annual ? "var(--accent)" : "var(--border-color)" }}
            >
              <div
                className="w-5 h-5 rounded-full absolute top-1 transition-all duration-300"
                style={{ background: "#fff", left: annual ? "32px" : "4px" }}
              />
            </button>
            <span className="text-sm font-medium" style={{ color: annual ? "var(--text-primary)" : "var(--text-muted)" }}>
              Annual
            </span>
            {annual && (
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: "rgba(16,185,129,0.15)", color: "var(--success)" }}>
                Save 20%
              </span>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Cards */}
      <div className="max-w-[1280px] mx-auto px-6 -mt-8 mb-20">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${plan.highlight ? "md:-mt-4 md:mb-4" : ""}`}
              style={{
                background: "var(--bg-card)",
                border: plan.highlight ? "2px solid var(--accent)" : "1px solid var(--border-color)",
                boxShadow: plan.highlight ? "0 0 40px var(--glow-accent)" : "var(--shadow)",
              }}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{ background: "var(--gradient)", color: "#fff" }}>
                  {plan.badge}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>{plan.name}</h3>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                  ${annual ? plan.annual : plan.monthly}
                </span>
                {plan.monthly > 0 && <span className="text-sm" style={{ color: "var(--text-muted)" }}>/seat/month</span>}
              </div>
              <Link
                to={plan.ctaStyle === "ghost" ? "/contact" : "/pricing"}
                className={plan.ctaStyle === "gradient" ? "btn-gradient" : "btn-ghost"}
                style={{ width: "100%", justifyContent: "center", marginBottom: "24px" }}
              >
                {plan.cta}
              </Link>
              <div className="flex flex-col gap-3">
                {plan.features.map(f => (
                  <div key={f.text} className="flex items-center gap-2">
                    {f.included
                      ? <Check size={16} style={{ color: "var(--success)" }} />
                      : <Minus size={16} style={{ color: "var(--text-muted)", opacity: 0.4 }} />
                    }
                    <span className="text-sm" style={{ color: f.included ? "var(--text-secondary)" : "var(--text-muted)", opacity: f.included ? 1 : 0.5 }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <SectionWrapper className="section-padding" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--border-color)", background: "var(--bg-card)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 cursor-pointer text-left"
                  style={{ background: "transparent", border: "none", color: "var(--text-primary)", fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "15px" }}
                >
                  {faq.q}
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} style={{ color: "var(--text-muted)" }} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm" style={{ color: "var(--text-muted)", lineHeight: 1.7 }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison */}
      <SectionWrapper className="section-padding">
        <div className="max-w-[1280px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
            Full Feature <span className="gradient-text">Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left text-sm py-3 px-4" style={{ color: "var(--text-muted)" }}></th>
                  <th className="text-center text-sm font-semibold py-3 px-4" style={{ color: "var(--text-muted)" }}>Free</th>
                  <th className="text-center text-sm font-bold py-3 px-4" style={{ color: "var(--accent-light)", borderBottom: "2px solid var(--accent)" }}>Pro</th>
                  <th className="text-center text-sm font-semibold py-3 px-4" style={{ color: "var(--text-muted)" }}>Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonCategories.map(cat => (
                  <>
                    <tr key={cat.category}>
                      <td colSpan={4} className="text-xs font-bold uppercase pt-6 pb-2 px-4" style={{ color: "var(--accent-light)", letterSpacing: "0.05em" }}>
                        {cat.category}
                      </td>
                    </tr>
                    {cat.rows.map(row => (
                      <tr key={row.feature} style={{ borderBottom: "1px solid var(--border-color)" }}>
                        <td className="py-3 px-4 text-sm" style={{ color: "var(--text-secondary)" }}>{row.feature}</td>
                        <td className="text-center py-3 px-4 text-sm" style={{ color: row.free === "—" ? "var(--text-muted)" : "var(--text-primary)", opacity: row.free === "—" ? 0.4 : 1 }}>{row.free}</td>
                        <td className="text-center py-3 px-4 text-sm font-medium" style={{ color: "var(--text-primary)" }}>{row.pro}</td>
                        <td className="text-center py-3 px-4 text-sm" style={{ color: "var(--text-primary)" }}>{row.business}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
