import { motion } from "framer-motion";
import { Copy, Check, Download, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sajetdhopare72@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="relative z-10 max-w-6xl mx-auto text-center"
>

        {/* Status Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-8">
          <div className="px-4 py-2 bg-honey-400/10 border border-honey-400/30 rounded-full">
            <p className="text-honey-400 text-sm font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-honey-400 rounded-full animate-pulse" />
              AVAILABLE FOR WORK
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
        >
          I'm{" "}
          <span className="text-honey-400 font-mono">
            Sajet Dhopare
          </span>
          <br />
          I develop software
          <br />
          with{" "}
          <span className="gradient-text inline-block">
            perfection
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Hyper-nimble full-stack developer specializing in crafting exceptional
          digital experiences with modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "mailto:sajetdhopare72@gmail.com"}
            className="px-8 py-4 bg-honey-400 text-white font-mono font-bold rounded-full text-sm hover:bg-honey-300 transition-colors shadow-lg shadow-honey-400/20"
          >
            LET'S TALK
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyEmailToClipboard}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 text-white font-mono rounded-full text-sm hover:border-honey-400 transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check size={18} className="text-green-400" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy size={18} />
                <span>COPY EMAIL</span>
              </>
            )} 
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 text-white font-mono rounded-full text-sm hover:border-honey-400 transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            <span>RESUME</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <Link to="about" smooth={true} duration={800} offset={-80}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer group"
            >
              <ArrowDown className="w-6 h-6 text-gray-600 group-hover:text-honey-400 transition-colors" />
            </motion.div>
          </Link>
          <p className="text-gray-600 text-xs font-mono mt-2 tracking-wider">
            [ SCROLL DOWN ]
          </p>
        </motion.div>

        {/* Section Counter */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-8 text-gray-700 font-mono text-sm"
        >
          [ 01 / 04 ]
        </motion.div>
      </motion.div>
    </section>
  );
}