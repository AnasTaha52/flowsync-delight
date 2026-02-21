import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer glass-card-sm"
            style={{ color: "var(--text-primary)" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "#25D366",
            animation: "pulse-ring 2s infinite",
          }}
        />
        <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
          style={{ background: "#25D366", color: "#FFFFFF" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Chat with us"
        >
          <MessageCircle size={22} />
        </motion.a>
      </div>
    </div>
  );
}
