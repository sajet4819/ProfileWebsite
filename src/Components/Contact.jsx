import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Code, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

export default function Contact() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/sajet4819",
      color: "hover:text-white",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/sajet4819",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/sajet-dhopare-5a02a1343",
      color: "hover:text-blue-500",
    },
    {
      name: "LeetCode",
      icon: <Code className="w-6 h-6" />,
      url: "https://leetcode.com/u/sajet4819/",
      color: "hover:text-yellow-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-honey-400 font-mono text-sm mb-4 tracking-wider">
            [ LET'S CONNECT ]
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Ready to build
            <br />
            <span className="text-honey-400">something amazing?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Email CTA */}
          <motion.a
            href="mailto:sajetdhopare72@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-honey-400 text-black font-mono font-bold rounded-full text-lg hover:bg-honey-300 transition-colors shadow-2xl shadow-honey-400/20 group"
          >
            <Mail className="w-5 h-5" />
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center items-center gap-8 mb-20"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 bg-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-xl ${social.color} transition-all duration-300 hover:border-current group`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-gray-800 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Back to Top */}
            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-honey-400 font-mono"
              >
                :)
              </motion.div>
            </Link>

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Sajet Dhopare. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1 font-mono">
                Designed & Developed with{" "}
                <span className="text-honey-400">passion</span>
              </p>
            </div>

            {/* Availability Badge */}
            <Link
              to="hero"
              smooth={true}
              duration={800}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-honey-400/10 border border-honey-400/30 rounded-full text-honey-400 text-sm font-mono hover:bg-honey-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-honey-400 rounded-full animate-pulse" />
                AVAILABLE FOR WORK
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Section Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 font-mono text-sm text-right mt-12"
        >
          [ 04 / 04 ]
        </motion.div>
      </div>
    </section>
  );
}