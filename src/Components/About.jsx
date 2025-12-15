import { motion } from "framer-motion";
import { Code2, Palette, Zap, Briefcase } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with React, Node.js, and MongoDB.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with modern design principles.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Delivering lightning-fast experiences through code optimization and best practices.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Experience",
      description: "Proven track record with internships and successful project deliveries.",
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
    <section id="about" className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-honey-400 font-mono text-sm mb-4 tracking-wider">
            [ ABOUT ME ]
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Building the future,
            <br />
            <span className="text-honey-400">one line at a time.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            I'm a passionate software developer with a keen eye for detail and a love for creating
            exceptional digital experiences. My expertise spans modern web technologies, and I'm
            always eager to tackle new challenges that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-8 bg-white/[0.02] backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-honey-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-honey-400/10 rounded-xl text-honey-400 group-hover:bg-honey-400 group-hover:text-black transition-all duration-300">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-honey-400 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <p className="text-honey-400 font-mono text-sm mb-6 tracking-wider">
            [ TECH STACK ]
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "Express",
              "TailwindCSS",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "Firebase",
              "Git",
              "Framer Motion",
              "REST APIs",
            ].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white/[0.02] border border-gray-800 rounded-full font-mono text-sm hover:border-honey-400 hover:text-honey-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Section Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-700 font-mono text-sm text-right"
        >
          [ 02 / 04 ]
        </motion.div>
      </div>
    </section>
  );
}