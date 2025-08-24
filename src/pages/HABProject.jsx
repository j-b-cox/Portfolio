import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Section = ({ id, title, children }) => (
  <motion.section
    id={id}
    variants={fade}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="scroll-mt-24 py-4"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
      {title}
    </h2>
    <div className="mt-6 text-gray-700 leading-relaxed">{children}</div>
  </motion.section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
    {children}
  </span>
);

export default function HABProject() {
  const pdfHref = "/assets/Technical_Report.pdf";

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-medium text-gray-700 hover:text-gray-900">
            ← Back to Portfolio
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#abstract" className="hover:text-gray-900">Abstract</a>
            <a href="#models" className="hover:text-gray-900">Models</a>
            <a href="#data" className="hover:text-gray-900">Data</a>
            <a href="#results" className="hover:text-gray-900">Results</a>
            <a href="#download" className="hover:text-gray-900">Download</a>
          </nav>
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
          >
            Open Technical Report (PDF)
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 pb-32">
        <motion.section
          variants={fade}
          initial="hidden"
          animate="show"
          className="pt-20 pb-24 grid md:grid-cols-5 gap-8 items-center"
        >
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Modernizing Harmful Algal Bloom Forecasting
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              Machine learning + satellite imagery for faster, more informative HAB forecasts in Western Lake Erie.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Lake Erie</Pill>
              <Pill>Sentinel‑3 OLCI</Pill>
              <Pill>NASA PACE OCI</Pill>
              <Pill>GLERL Buoys</Pill>
              <Pill>FCNN</Pill>
              <Pill>ConvLSTM</Pill>
              <Pill>CNN Ensemble</Pill>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="relative rounded-2xl border border-gray-200 bg-gradient-to-b from-blue-50 to-white p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-gray-500">Authors</dt>
                  <dd className="font-medium text-gray-800">
                    Jesse Cox, Muthumayan Madhayyan, Alexander Caichen, Irina Lee
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-500">Affiliation</dt>
                  <dd className="font-medium text-gray-800">UC Berkeley School of Information</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Region</dt>
                  <dd className="font-medium text-gray-800">Western Lake Erie</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Focus</dt>
                  <dd className="font-medium text-gray-800">Forecasting & Species Detection</dd>
                </div>
              </dl>
              <a
                href={pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-white text-sm font-medium hover:bg-blue-700"
                aria-label="Open the technical report PDF"
              >
                View Full Report
              </a>
            </div>
          </div>
        </motion.section>

        {/* Quick TOC for mobile */}
        <div className="md:hidden -mt-4 mb-10 flex flex-wrap gap-3">
          {[
            ["#abstract", "Abstract"],
            ["#models", "Models"],
            ["#data", "Data"],
            ["#results", "Results"],
            ["#download", "Download"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Abstract */}
        <Section id="abstract" title="Abstract">
          <p>
            We present three ML models to improve HAB forecasting: (1) a date‑driven Fully Connected Neural Network
            (FCNN) that predicts chlorophyll‑a concentration from seasonal patterns; (2) a temporal Convolutional LSTM
            that predicts the next chlorophyll or reflectance raster from recent sequences; and (3) a hyperspectral CNN
            ensemble that identifies the likely presence of <em>Microcystis</em> via particulate microcystin signals. Models use
            Sentinel‑3 OLCI and NASA PACE OCI imagery plus GLERL buoy data. Together, these tools complement NOAA
            physical models by filling observation gaps, capturing short‑term dynamics, and adding species context for risk
            management.
          </p>
        </Section>

        {/* Models */}
        <Section id="models" title="Models">
          <div className="mt-2 grid md:grid-cols-3 gap-6">
            {/* FCNN */}
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">1) FCNN — Seasonal Chlorophyll</h3>
              <p className="mt-2 text-sm text-gray-700">
                Input: calendar day encodings → Output: 93×163 chlorophyll‑a raster. Trained on 2017–present
                OLCI composites; useful when imagery is missing (clouds, orbital gaps) or for long‑term planning.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Seven dense layers, ReLU; reshapes to lake grid.</li>
                <li>Masking to avoid land/cloud pixels and enforce lake shape.</li>
                <li>Generalizes seasonal patterns despite relatively high MSE.</li>
              </ul>
            </div>

            {/* ConvLSTM */}
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">2) ConvLSTM — Short‑Term Dynamics</h3>
              <p className="mt-2 text-sm text-gray-700">
                Input: 5 frames of multi‑channel reflectance (or Chl‑a) → Output: next frame. Robust scaling,
                time encodings, and masked loss. Evaluated with PSNR/SSIM to capture structural similarity.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>2× Conv → ConvLSTM2D → Conv head.</li>
                <li>Temporal splits to prevent leakage (train ≤ Jun 2022, val to Oct 2023, test to Aug 2025).</li>
                <li>PSNR ~44–59, SSIM ~0.87–0.996 across channels (reflectance).</li>
              </ul>
            </div>

            {/* CNN Ensemble */}
            <div className="rounded-2xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">3) CNN Ensemble — Microcystis Detection</h3>
              <p className="mt-2 text-sm text-gray-700">
                Hyperspectral PACE OCI patches (3×3…9×9) with buoy‑paired labels for particulate microcystin
                thresholds. Slide over rasters to map probabilities; average across models to balance precision vs. recall.
              </p>
              <ul className="mt-3 list-disc pl-5 text-sm text-gray-700">
                <li>Normalization with global stats + local per‑scene context.</li>
                <li>Spatial flips/rotations to augment limited 2024 OCI data.</li>
                <li>Ensemble transparency encodes confidence across models.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Data */}
        <Section id="data" title="Data Sources">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-gray-200 p-4">
              <h4 className="font-medium text-gray-900">Sentinel‑3 OLCI</h4>
              <p className="mt-1 text-sm text-gray-700">
                11 public bands (~400–709 nm), ~400 m pixels, ~2‑day revisit; includes derived chlorophyll‑a product.
                Records 2016–present.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <h4 className="font-medium text-gray-900">NASA PACE OCI</h4>
              <p className="mt-1 text-sm text-gray-700">
                Hyperspectral (172 bands), ~1.2 km pixels, 2024–present. Enables species‑level spectral inference.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4">
              <h4 className="font-medium text-gray-900">GLERL Buoys</h4>
              <p className="mt-1 text-sm text-gray-700">
                Weekly in‑situ samples (bloom season) for temperature, turbidity, chlorophyll, and microcystin thresholds
                used as ground truth for classification.
              </p>
            </div>
          </div>
        </Section>

        {/* Results & Figures (placeholders users can swap with images) */}
        <Section id="results" title="Results (Selected)">
          <div className="grid md:grid-cols-2 gap-6">
            <figure className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-sky-50 to-white border border-dashed border-sky-200 flex items-center justify-center text-sm text-sky-700">
                Drop your FCNN vs. Ground Truth figure here
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                FCNN seasonal chlorophyll pattern vs. composite imagery.
              </figcaption>
            </figure>
            <figure className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-emerald-50 to-white border border-dashed border-emerald-200 flex items-center justify-center text-sm text-emerald-700">
                Drop your ConvLSTM PSNR/SSIM chart here
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                Structural similarity metrics across channels and dates.
              </figcaption>
            </figure>
            <figure className="rounded-2xl border border-gray-200 p-4 bg-white shadow-sm md:col-span-2">
              <div className="aspect-[2/1] w-full rounded-lg bg-gradient-to-br from-rose-50 to-white border border-dashed border-rose-200 flex items-center justify-center text-sm text-rose-700">
                Drop your Microcystis probability map here
              </div>
              <figcaption className="mt-3 text-sm text-gray-600">
                Ensemble probability mask (red alpha) overlaying true‑color or basemap.
              </figcaption>
            </figure>
          </div>
        </Section>

        {/* Download & citation */}
        <Section id="download" title="Download & Citation">
          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Technical Report (PDF)</h3>
                <p className="text-sm text-gray-700">Full methods, data processing, and extended figures.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700"
                >
                  Open PDF
                </a>
                <a
                  download
                  href={pdfHref}
                  className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Download
                </a>
              </div>
            </div>
            <details className="mt-5 group">
              <summary className="cursor-pointer text-sm text-gray-700 group-open:text-gray-900">
                Show BibTeX citation
              </summary>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-50 p-4 text-xs text-gray-800 border border-gray-200">
{`@techreport{cox2025hab,
  title        = {Modernizing Harmful Algal Bloom Forecasting with Machine Learning & Satellite Imagery},
  author       = {Cox, Jesse and Madhayyan, Muthumayan and Caichen, Alexander and Lee, Irina},
  institution  = {UC Berkeley School of Information},
  year         = {2025},
  address      = {Berkeley, CA},
  note         = {Western Lake Erie; Sentinel-3 OLCI; PACE OCI; GLERL}
}`}
              </pre>
            </details>
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-16 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Jesse Cox — HAB Forecasting Research. This page summarizes a student project
            leveraging publicly available NOAA / NASA / GLERL data sources.
          </p>
        </footer>
      </main>
    </div>
  );
}
