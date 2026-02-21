import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", path: "/features" },
    { label: "Pricing", path: "/pricing" },
    { label: "Changelog", path: "#" },
    { label: "Roadmap", path: "#" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Careers", path: "#" },
    { label: "Press", path: "#" },
  ],
  Support: [
    { label: "Help Center", path: "#" },
    { label: "Contact", path: "/contact" },
    { label: "Status", path: "#" },
    { label: "Privacy", path: "#" },
  ],
};

const socialIcons = [
  { Icon: Twitter, label: "Twitter" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Github, label: "GitHub" },
  { Icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="section-padding" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border-color)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline mb-4">
              <div className="w-7 h-7 relative">
                <div className="absolute w-4 h-4 rounded top-0 left-0" style={{ background: "var(--accent)", opacity: 0.8 }} />
                <div className="absolute w-4 h-4 rounded bottom-0 right-0" style={{ background: "var(--accent-2)", opacity: 0.8 }} />
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "18px", color: "var(--text-primary)" }}>
                Flow<span className="gradient-text">Sync</span>
              </span>
            </Link>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "240px" }}>
              The modern workspace for teams who ship.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ border: "1px solid var(--border-color)", color: "var(--text-muted)", background: "var(--glass-bg)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4" style={{ fontFamily: "var(--font-heading)", color: "var(--text-primary)" }}>
                {title}
              </h4>
              <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm no-underline transition-colors duration-200"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © 2024 FlowSync. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: "var(--gradient-subtle)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
            >
              GDPR Compliant
            </span>
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: "var(--gradient-subtle)", color: "var(--text-muted)", border: "1px solid var(--border-color)" }}
            >
              SOC 2
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
