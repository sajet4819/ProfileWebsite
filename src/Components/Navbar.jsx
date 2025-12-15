import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", to: "about" },
    { name: "WORK", to: "portfolio" },
    { name: "CONTACT", to: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <Link
              to="hero"
              smooth
              duration={500}
              spy
              isDynamic
              className="cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-3xl lg:text-4xl font-bold text-honey-400 font-mono"
              >
                :)
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  isDynamic
                  className="relative text-sm font-mono tracking-wider cursor-pointer group"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-honey-400">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-honey-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}

              <Link
                to="contact"
                smooth
                duration={500}
                offset={-80}
                spy
                isDynamic
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-honey-400 text-black font-mono text-sm font-bold rounded-full hover:bg-honey-300 transition-colors"
                >
                  HIRE ME
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  isDynamic
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-mono font-bold cursor-pointer hover:text-honey-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
