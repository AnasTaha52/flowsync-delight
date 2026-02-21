import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileHover={{ rotate: 15, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer flex-shrink-0"
      style={{
        border: "1px solid var(--border-color)",
        background: "var(--glass-bg)",
        backdropFilter: "blur(10px)",
        color: "var(--text-primary)",
      }}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
}
