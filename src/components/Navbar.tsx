import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Product", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--navbar-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 relative">
              <div
                className="absolute w-5 h-5 rounded-md top-0 left-0"
                style={{ background: "var(--accent)", opacity: 0.8 }}
              />
              <div
                className="absolute w-5 h-5 rounded-md bottom-0 right-0"
                style={{ background: "var(--accent-2)", opacity: 0.8 }}
              />
            </div>
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "20px", color: "var(--text-primary)" }}
            >
              Flow<span className="gradient-text">Sync</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="no-underline text-sm font-medium transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: location.pathname === link.path ? "var(--accent-light)" : "var(--text-muted)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Link to="/contact" className="btn-ghost" style={{ padding: "8px 20px", fontSize: "14px" }}>
              Log In
            </Link>
            <Link to="/pricing" className="btn-gradient" style={{ padding: "8px 20px", fontSize: "14px" }}>
              Start Free Trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              style={{ color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer" }}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50"
              style={{ background: "rgba(0,0,0,0.5)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] z-50 flex flex-col p-6"
              style={{ background: "var(--bg-surface)" }}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  style={{ color: "var(--text-primary)", background: "none", border: "none", cursor: "pointer" }}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="no-underline text-lg font-semibold py-2"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: location.pathname === link.path ? "var(--accent-light)" : "var(--text-primary)",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-3">
                  <Link to="/contact" className="btn-ghost" style={{ justifyContent: "center" }}>Log In</Link>
                  <Link to="/pricing" className="btn-gradient" style={{ justifyContent: "center" }}>Start Free Trial</Link>
                </div>
              </div>
              <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border-color)" }}>
                <ThemeToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
