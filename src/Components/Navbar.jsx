import { useState } from "react";
import { Copy, Menu, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import profileImage from "../assets/profile.PNG";
import resumeImage from "../assets/resume.png";

export default function NavbarHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sajetdhopare72@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="navBar" className="bg-black text-white pt-5">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-t border-gray-700">
        <div className="text-4xl font-bold text-red-500">:)</div>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link to="about" smooth={true} duration={500} className="text-red-500 font-semibold cursor-pointer">ABOUT</Link>
          <Link to="portfolio" smooth={true} duration={500} className="hover:text-red-500 transition-all duration-300 cursor-pointer">PORTFOLIO</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-red-500 transition-all duration-300 cursor-pointer">CONTACT</Link>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden bg-black p-4 space-y-4 text-center border-b border-gray-700 ${menuOpen ? "block" : "hidden"}`}
      >
        <Link to="about" smooth={true} duration={500} className="block text-red-500 cursor-pointer">ABOUT</Link>
        <Link to="portfolio" smooth={true} duration={500} className="block cursor-pointer">PORTFOLIO</Link>
        <Link to="contact" smooth={true} duration={500} className="block cursor-pointer">CONTACT</Link>
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-8 py-20">
        {/* Text Content */}
        <div className="max-w-lg ml-3">
          <p className="text-gray-400 text-lg">Software Developer</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            I'm <span className="text-white">Sajet Dhopare</span>
          </h1>
          <p className="text-gray-400 mt-2">I Develop software with perfection.</p>
          <div className="flex space-x-4 mt-6">
            <button
              id="hireMe"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded transition-all duration-300"
              onClick={() => window.location.href = "mailto:sajetdhopare72@gmail.com"}
            >
              Hire me
            </button>

            <button
              className="bg-gray-700 hover:bg-gray-600 text-white flex items-center space-x-2 px-6 py-2 rounded relative"
              onClick={copyEmailToClipboard}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
            
            <button
              className="bg-gray-700 hover:bg-gray-600 text-white flex items-center space-x-2 px-6 py-2 rounded"
              onClick={() => window.open(resumeImage, "_blank")}
            >
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Avatar & Status */}
        <div className="relative mt-8 md:mt-0">
          <div className="absolute top-0 right-0 bg-red-500 text-xs text-white px-3 py-1 rounded-full">
            AVAILABLE FOR JOB
          </div>
          <img 
            src={profileImage} 
            alt="Avatar" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-700"
          />
        </div>
      </section>
    </div>
  );
}