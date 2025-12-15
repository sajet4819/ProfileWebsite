import { motion } from "framer-motion";
import { ArrowUpRight, Award, Calendar } from "lucide-react";

// Import your actual video files
import netflixVideo from "../assets/netflix.mp4";
import uberVideo from "../assets/netflix1.mp4";
import tinderVideo from "../assets/Tinder Version 2 - Logo Animation - PW Motion (720p, h264).mp4";
import internshipCert from "../assets/intership.PNG";
import hackathonCert from "../assets/hackthon.JPG";

export default function Portfolio() {
  const projects = [
    {
      title: "TopTuitions",
      year: "2024",
      description:
        "Founded and built TopTuitions, a platform that helps students discover, rate, and review tuition centers based on location. Implemented user authentication, review posting with user identity, and interactive map-based search.",
      video: netflixVideo,
      link: "#",
      tags: ["React", "Node.js", "MongoDB", "Maps API"],
    },
    {
      title: "Dairy Farm Course Website",
      year: "2025",
      company: "Savant Dairy Pvt. Ltd.",
      description:
        "Built a full-stack web platform offering online dairy farming courses with Razorpay integration, user authentication, and course management using React, Node.js, and MongoDB.",
      video: uberVideo,
      link: "#",
      tags: ["React", "Node.js", "Payment Gateway"],
    },
    {
      title: "Tinder Clone",
      year: "2024",
      description:
        "A Tinder-like dating app with swipe functionality, real-time chat, and profile matching. Developed with React.js, Firebase, and TailwindCSS.",
      video: tinderVideo,
      link: "#",
      tags: ["React", "Firebase", "TailwindCSS"],
    },
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "Prodigy Infotech",
      period: "Sep 2024 – Oct 2024",
      description: "Developed full-stack web applications and collaborated with cross-functional teams.",
    },
  ];

  const certificates = [
    {
      title: "Prodigy Infotech Internship",
      year: "2024",
      description: "Completion of Internship with outstanding remarks.",
      image: internshipCert,
    },
    {
      title: "Vortex Tech Hackathon",
      year: "2024",
      description: "Built a web app in 12 hours.",
      image: hackathonCert,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-honey-400 font-mono text-sm mb-4 tracking-wider">
            [ SELECTED WORK ]
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Featured
            <br />
            <span className="text-honey-400">Projects.</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-honey-400/50 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Project Info */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-honey-400 font-mono text-sm">
                          {project.year}
                        </span>
                        {project.company && (
                          <span className="text-gray-600 text-sm">
                            • {project.company}
                          </span>
                        )}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-honey-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white/[0.05] border border-gray-800 rounded-full text-xs font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-honey-400 font-mono text-sm mt-6 hover:gap-4 transition-all duration-300"
                    >
                      VIEW PROJECT
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Project Video */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-900">
                    <video
                      src={project.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience & Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-honey-400/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-honey-400" />
              <h3 className="text-xl font-bold font-mono">EXPERIENCE</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-honey-400/30 pl-6">
                  <p className="text-honey-400 font-semibold mb-1">{exp.role}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                  <p className="text-sm text-gray-400 mt-3">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            variants={itemVariants}
            className="p-8 bg-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-honey-400/50 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-5 h-5 text-honey-400" />
              <h3 className="text-xl font-bold font-mono">CERTIFICATES</h3>
            </div>
            <div className="space-y-6">
              {certificates.map((cert, index) => (
                <div key={index} className="group cursor-pointer">
                  <div
                    onClick={() => window.open(cert.image, "_blank")}
                    className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="flex-1">
                      <p className="text-honey-400 font-semibold mb-1 group-hover:underline">
                        {cert.title}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">{cert.year}</p>
                      <p className="text-sm text-gray-500">{cert.description}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-honey-400 transition-colors flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Section Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 font-mono text-sm text-right"
        >
          [ 03 / 04 ]
        </motion.div>
      </div>
    </section>
  );
}