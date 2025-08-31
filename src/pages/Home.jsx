import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react"

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
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald-500 via-blue-300 to-white-100 px-6"
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
        {/* Modernizing HAB Forecasting - download tile */}
        <a
        href="/assets/HAB_Forecasting.pdf"
        download="HAB_Forecasting.pdf"
        className="group block"
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
        >
            <h3 className="text-2xl font-semibold mb-2">
                Modernizing Harmful Algal Bloom Forecasting
            </h3>
            <p className="text-gray-600">
                Using ML models and satellite imagery to forecast cyanobacteria blooms in Western Lake Erie.
            </p>
            <span className="mt-3 inline-flex items-center text-sm text-blue-700 group-hover:underline">
                Download Report
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v10m0 0l-4-4m4 4l4-4" />
                <path d="M4 19h16" />
            </svg>
            </span>
        </motion.div>
        </a>
        
        {/* PMN - external website tile */}
        <a
        href="https://apps.ischool.berkeley.edu/phytoplankton/"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
        aria-label="Open Visualizing NOAA Algae Observations (opens in a new tab)"
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
        >
            <h3 className="text-2xl font-semibold mb-2">
            Visualizing NOAA Algae Observations
            </h3>
            <p className="text-gray-600">
            Using JavaScript (D3.js) to plot 20+ years of US algae observations by phylogeny, location, and time.
            </p>
            <span className="mt-3 inline-flex items-center text-sm text-blue-700 group-hover:underline">
            Visit webpage ↗
            </span>
        </motion.div>
        </a>

        
        {/* Dielectrons - download tile */}
        <a
        href="/assets/Dielectron_Eventas.pdf"
        download="Dielectron_Eventas.pdf"
        className="group block"
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
        >
            <h3 className="text-2xl font-semibold mb-2">
                Predicting Large Hadron Collision Conditions
            </h3>
            <p className="text-gray-600">
                Using AI / ML to predict characteristics of dielectron events in CERN high energy collisions.
            </p>
            <span className="mt-3 inline-flex items-center text-sm text-blue-700 group-hover:underline">
                Download Stakeholder Presentation
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v10m0 0l-4-4m4 4l4-4" />
                <path d="M4 19h16" />
            </svg>
            </span>
        </motion.div>
        </a>
        
        {/* Experimentation - download tile */}
        <a
        href="/assets/Experiment.pdf"
        download="Engagement_Experiment.pdf"
        className="group block"
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
        >
            <h3 className="text-2xl font-semibold mb-2">
                Enhancing Patient Engagement in Health Care
            </h3>
            <p className="text-gray-600">
                Causal experimentation on the effectiveness of personalized and generic digital outreach strategies.
            </p>
            <span className="mt-3 inline-flex items-center text-sm text-blue-700 group-hover:underline">
                Download Report
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v10m0 0l-4-4m4 4l4-4" />
                <path d="M4 19h16" />
            </svg>
            </span>
        </motion.div>
        </a>
        
        {/* Student Consent / Privacy - download tile */}
        <a
        href="/assets/Student_Consent_Privacy_Adaptive_Learning.pdf"
        download="Student_Consent_Privacy_Adaptive_Learning.pdf"
        className="group block"
        >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
        >
            <h3 className="text-2xl font-semibold mb-2">
                AI in the Classroom
            </h3>
            <p className="text-gray-600">
                Analyzing the Intersection of Student Consent, Privacy, and Data Analytics in Adaptive Learning Platforms.
            </p>
            <span className="mt-3 inline-flex items-center text-sm text-blue-700 group-hover:underline">
                Download Report
            <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v10m0 0l-4-4m4 4l4-4" />
                <path d="M4 19h16" />
            </svg>
            </span>
        </motion.div>
        </a>

      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-200 px-6 text-center">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-6">Contact</motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="max-w-2xl mx-auto text-lg text-gray-800 mb-8">
        Interested in collaborating or have a question?
      </motion.p>
      <motion.a href="mailto:jbcox@berkeley.edu" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
        Say Hello
      </motion.a>
    </section>
  );
}

function Testimonials() {
  const [openIndex, setOpenIndex] = useState(null);

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Senior Data Scientist, NOAA",
      img: "/assets/testimonials/alex.jpg",
      quote:
        "Jesse’s blend of scientific rigor and practical engineering accelerated our workflow. His HAB forecasting work gave our team a clear, actionable path."
    },
    {
      name: "Priya Shah",
      role: "Product Manager, EdTech Startup",
      img: "/assets/testimonials/priya.jpg",
      quote:
        "We leaned on Jesse to translate privacy requirements into analytics we could trust. He communicates complex tradeoffs simply and precisely."
    },
    {
      name: "Marco DeLuca",
      role: "Research Engineer, UC Berkeley",
      img: "/assets/testimonials/marco.jpg",
      quote:
        "From data plumbing to model evaluation, Jesse delivered end-to-end. The code quality and documentation made handoff painless."
    },
    {
      name: "Sofia Nguyen",
      role: "ML Engineer, Healthcare",
      img: "/assets/testimonials/sofia.jpg",
      quote:
        "Thoughtful, reliable, and fast. Jesse’s experiments were reproducible and the visualizations made stakeholder decisions much easier."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>

        <ul className="space-y-4">
          {testimonials.map((t, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i} className="border border-gray-200 rounded-xl bg-white shadow-sm">
                {/* Header row (clickable) */}
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`testimonial-panel-${i}`}
                  className="w-full flex items-center gap-4 p-4 text-left hover:bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <img
                    src={t.img}
                    alt={`${t.name} headshot`}
                    className="h-12 w-12 rounded-full object-cover border border-gray-200"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-600">{t.role}</div>
                  </div>

                  {/* Chevron */}
                  <svg
                    className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.172l3.71-2.94a.75.75 0 11.94 1.16l-4.24 3.36a.75.75 0 01-.94 0l-4.24-3.36a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Smooth expanding panel (CSS grid trick for auto height) */}
                <div
                  id={`testimonial-panel-${i}`}
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0">
                    <p className="px-4 pt-4 pb-4 text-gray-700">
                      {t.quote}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
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
