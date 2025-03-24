import { ArrowUpRight } from "lucide-react";
import { Link } from "react-scroll";
import { Github, Instagram, Linkedin, Code } from "lucide-react"; 

// Import assets properly
import netflixVideo from "../assets/netflix.mp4";
import uberVideo from "../assets/netflix.mp4";
import tinderVideo from "../assets/Tinder Version 2 - Logo Animation - PW Motion (720p, h264).mp4";
import internshipCert from "../assets/intership.PNG";
import hackathonCert from "../assets/hackthon.JPG";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-black text-white py-16 px-6 ">
    

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Reusable Box Styling */}
  {[
    {
      title: "Professional Experience",
      content: (
        <div className="space-y-4">
          {[
            { role: "Software Developer Intern", year: "Sep 2024 – Oct 2024", company: "Prodigy Infotech" },
            { role: "", year: "", company: "" },
          ].map((job, index) => (
            <div key={index}>
              <p className="text-red-500 font-semibold">{job.role}</p>
              <p className="text-sm text-gray-400">{job.year}</p>
              <p className="text-sm">{job.company}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Certificates",
      content: (
        <div className="flex flex-col space-y-4 text-left">
          <div>
            <h3 className="text-l font-semibold text-red-500">
              <a href="" onClick={() => window.open(internshipCert, "_blank")}>
                Prodigy Infotech | 2024
              </a>
            </h3>
            <h1 className="text-s font-semibold">Completion of Internship with outstanding remarks.</h1>
          </div>
          <div>
            <h3 className="text-l font-semibold text-red-500">
              <a href="" onClick={() => window.open(hackathonCert, "_blank")}>
                Vortex (Tech Hackathon) | 2024
              </a>
            </h3>
            <h1 className="text-s font-semibold">Built a web app in 12 hrs.</h1>
          </div>
        </div>
      ),
    },
  ].map((box, index) => (
    <div
      key={index}
      className="bg-gray-900 p-6 rounded-2xl border border-gray-700 transform transition duration-300 hover:scale-105"
    >
      <h3 className="text-lg font-semibold mb-4">{box.title}</h3>
      {box.content}
    </div>
  ))}


  {/* Netflix Clone */}
  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 relative transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <h3 className="text-xl font-semibold text-white">Netflix Clone</h3>
    <p className="text-sm text-gray-400 mb-3">
      A fully functional **Netflix-inspired** streaming platform with a sleek UI, smooth animations, and interactive user experience. Built using **HTML, CSS, and JavaScript**.
    </p>
<video src={netflixVideo} className="rounded-lg w-full" autoPlay loop muted></video>
    <a href="https://sajet4819.github.io/Netflix-Clone/Netflix%20clone%20(html,css,javascript)/index.html">
      <ArrowUpRight className="absolute top-4 right-4 text-red-500 transition-transform duration-200 hover:scale-110" />
    </a>
  </div>

  {/* Uber Clone */}
  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 relative transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <h3 className="text-xl font-semibold text-white">Uber Web App</h3>
    <p className="text-sm text-gray-400 mb-3">
      A modern **Uber clone** that simulates ride-booking, real-time tracking, and user authentication. Built using **React.js and Firebase**.
    </p>
    <video src={uberVideo} className="rounded-lg w-full" autoPlay loop muted></video>
    <a href="############">
      <ArrowUpRight className="absolute top-4 right-4 text-red-500 transition-transform duration-200 hover:scale-110" />
    </a>
  </div>

  {/* Tinder */}
  <div className="bg-gray-900 p-6 rounded-2xl border border-gray-700 relative transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <h3 className="text-xl font-semibold text-white">Tinder Clone</h3>
    <p className="text-sm text-gray-400 mb-3">
      A **Tinder-like** dating app with swipe functionality, real-time chat, and profile matching. Developed with **React.js, Firebase, and TailwindCSS**.
    </p>
    <video src={tinderVideo} className="rounded-lg w-full" autoPlay loop muted></video>
    <a href="##############">
      <ArrowUpRight className="absolute top-4 right-4 text-red-500 transition-transform duration-200 hover:scale-110" />
    </a>
  </div>
</div>


{/* Footer */}
<footer className="text-center py-6 border-t border-gray-700 mt-8">
  <div className="flex flex-col items-center space-y-4">
    {/* Available for Job Button */}
    <button 
      href="#navBar" 
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("navBar").scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 
                 hover:bg-white hover:text-red-500 hover:scale-105 border border-red-500"
    >
      AVAILABLE FOR JOB
    </button>

    {/* Social Links */}
    <div id="contact" className="flex space-x-6 text-gray-400">
      <a 
        href="https://github.com/sajet4819" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-gray-200 transition duration-300"
      >
        <Github className="w-6 h-6 text-white hover:text-gray-500" />
      </a>
      <a 
        href="https://www.instagram.com/sajet4819" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-pink-500 transition duration-300"
      >
        <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
      </a>
      <a 
        href="https://www.linkedin.com/in/sajet-dhopare-5a02a1343" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition duration-300"
      >
        <Linkedin className="w-6 h-6 text-blue-500 hover:text-blue-700" />
      </a>
      <a 
        href="https://leetcode.com/u/sajet4819/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition duration-300"
      >
        <Code className="w-6 h-6 text-yellow-500 hover:text-yellow-700" />
      </a>
    </div>

    {/* Footer Text */}
    <p className="text-gray-400 text-sm py-4 border-t border-gray-700 w-full mt-4">
      © {new Date().getFullYear()} All Rights Reserved | Designed & Developed by Sajet Dhopare
    </p>
  </div>
</footer>
</section>
  );
}