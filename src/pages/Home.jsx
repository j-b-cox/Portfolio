import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Jesse Cox</Link>
        <div className="space-x-6 hidden md:flex">
          <a href="/#home" className="hover:text-blue-600">Home</a>
          <a href="/#about" className="hover:text-blue-600">About</a>
          <a href="/#projects" className="hover:text-blue-600">Projects</a>
          <a href="/#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-blue-300 via-white to-white-100 px-6"
    >
      <motion.img
        src="/headshot.jpg"
        alt="Jesse Cox"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-64 h-64 rounded-full shadow-xl mb-12 object-cover ring-4 ring-blue-800"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900 mb-4"
      >
        Jesse Cox
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-2xl text-gray-600 max-w-xl mb-4"
      >
        Data Scientist • Software Developer • Researcher
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-gray-900 text-white rounded-full shadow hover:bg-gray-700 transition">Resume</a>
        <a href="https://www.linkedin.com/in/jesse-cox-662458ab/" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">LinkedIn</a>
        <a href="https://github.com/j-b-cox" target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-gray-800 text-white rounded-full shadow hover:bg-gray-600 transition">GitHub</a>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 bg-blue-200 px-6 text-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-6 text-center">About Me</motion.h2>
      <div className="max-w-3xl mx-auto text-left space-y-8 text-lg">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
          I’m a data scientist and engineer with a decade of experience in scientific research and national security. My work spans machine learning, signal processing, and large-scale data engineering, with applications from algal bloom detection via hyperspectral satellite data to acoustic modeling for autonomous underwater vehicles.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
          I’ve built cloud-native applications and pipelines that help research teams standardize, analyze, and share millions of environmental data records across platforms like Azure, AWS, and Google. I enjoy turning messy datasets into clear insights by deploying deep learning models, designing interactive visualizations, or implementing simple customizable data quality control systems.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
          Before transitioning into civilian data science, I served as a U.S. Navy Non-Commissioned Officer, where I led training and qualification programs for over 1,000 personnel in Anti-Submarine Warfare. That leadership foundation continues to shape my approach to mentoring, collaboration, and building effective technical teams.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}>
          Recently I completed a Master of Information and Data Science at UC Berkeley, focusing on machine learning systems engineering, NLP, and advanced data visualization. My career goal is to leverage these tools to deliver practical, equitable, and high-impact solutions for science and technology that serve everyone.
        </motion.p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-12 bg-gray-50 px-12">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-bold text-center mb-12">Projects</motion.h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        <Link to="/projects/hab">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
            <h3 className="text-2xl font-semibold mb-2">Modernizing Harmful Algal Bloom Forecasting</h3>
            <p className="text-gray-600">ML models and satellite imagery for forecasting cyanobacteria in Western Lake Erie.</p>
          </motion.div>
        </Link>
        {["Data Dashboard", "AI Research Project"].map((title, i) => (
          <Link key={i} to={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.15, duration: 0.8 }} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">Brief description. Highlight tech, challenges, and impact.</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-200 px-6 text-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-6">Contact</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
        Interested in collaborating or have a question?
      </motion.p>
      <motion.a href="mailto:jbcox@berkeley.edu" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
        Say Hello
      </motion.a>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
