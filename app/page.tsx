"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between p-8 text-gray-900"
      style={{
        backgroundImage: "url('/dna-background.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-1 text-center p-8 max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Bioinformatics & Clinical Metagenomics Analysis
        </h1>

        <p className="text-lg max-w-2xl mb-6 text-gray-900/90">
          An innovative platform by Dr. Elmira Davasaz T. integrating microbiome
          analysis, mobile genetic elements, and novel bacterial species discovery
          to advance chronic disease research and personalized therapeutic strategies.
        </p>

        {/* === Proteomic Analyses (Modern Card Style) === */}
        <section className="mt-2 mb-12 w-full max-w-5xl">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
              Proteomic Analyses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Text */}
              <div className="text-left">
                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                  Advanced <span className="font-semibold">proteomics solutions</span> including
                  <span className="italic"> mass spectrometry–based analysis</span>, protein quantification,
                  biomarker discovery, and pathway enrichment. We integrate proteomic data with
                  metagenomic insights to deliver <span className="font-semibold">multi-omics interpretation</span>
                   for clinical and biological research projects.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>LC-MS/MS data processing and QC</li>
                  <li>Quantitative proteomics & biomarker discovery</li>
                  <li>GO/KEGG/Reactome enrichment & network mapping</li>
                  <li>Integration with metagenomics for multi-omics studies</li>
                </ul>

                <div className="mt-5">
                  <a href="/enrichment" className="underline text-blue-600">
                    See all enrichment figures →
                  </a>
                </div>
              </div>

              {/* Image (uses the file you already deployed) */}
              <div className="flex justify-center">
                <Image
                  src="/images/enrichment/enrichment_biomarkers_1.png"
                  alt="Biomarker enrichment network (set 1)"
                  width={520}
                  height={360}
                  className="rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setShowContact(true)}
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Contact Us
          </button>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2NTzP2V5jyvIh-KGfQKTbt00Z_y9OJS2ZeUethUvsiFfITQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Send Project
          </a>
        </div>

        {/* Contact Modal */}
        {showContact && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Contact Us</h2>
              <div className="flex flex-col gap-3">
                <a href="mailto:elmira.dt@gmail.com" className="text-blue-600 underline">
                  📧 elmira.dt@gmail.com
                </a>
                <a href="tel:+905342699127" className="text-blue-600 underline">
                  📞 +90 534 269 91 27
                </a>
              </div>
              <button
                onClick={() => setShowContact(false)}
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* NOT / Article Editing */}
        <div className="mt-6 text-gray-800 text-xl font-semibold leading-relaxed max-w-3xl">
          Professional article editing and consultancy for submissions to high-impact
          Q1–Q2 journals in biology, with specialization in
          <span className="font-bold"> bioinformatics</span>,
          <span className="font-bold"> microbiome</span>, and
          <span className="font-bold"> clinical metagenomics</span>.
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 mt-6">
          <figure className="group text-center float-slow will-change-transform">
            <Image
              src="/bioinfo.jpg"
              alt="Clinical metagenomics in chronic disease research."
              width={380}
              height={285}
              sizes="(min-width: 768px) 380px, 100vw"
              className="rounded-lg shadow-md mx-auto transition-transform duration-500 group-hover:scale-[1.03]"
              priority
            />
            <figcaption className="mt-2 text-sm text-gray-700">
              Clinical metagenomics in chronic disease research.
            </figcaption>
          </figure>

          <figure className="group text-center float-slow-2 will-change-transform">
            <Image
              src="/microbiome.jpg"
              alt="Microbiome network visualization"
              width={380}
              height={285}
              sizes="(min-width: 768px) 380px, 100vw"
              className="rounded-lg shadow-md mx-auto transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="mt-2 text-sm text-gray-700">
              Microbiome diversity and network analysis
            </figcaption>
          </figure>

          <figure className="group text-center float-slow-3 will-change-transform">
            <Image
              src="/antibiotic.jpg"
              alt="Antibiotic resistance illustration"
              width={380}
              height={285}
              sizes="(min-width: 768px) 380px, 100vw"
              className="rounded-lg shadow-md mx-auto transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <figcaption className="mt-2 text-sm text-gray-700">
              Antibiotic resistance and clinical impact
            </figcaption>
          </figure>
        </div>

        {/* Publication image with DOI */}
        <div className="mb-8">
          <Image
            src="/publication.jpg"
            alt="Publication: Bioinformatic Strategies in Metagenomics of Chronic Prostatitis"
            width={600}
            height={400}
            sizes="(min-width: 768px) 600px, 100vw"
            className="rounded-lg shadow-md mx-auto"
          />
          <p className="mt-2 text-[12px] text-gray-700 italic">
            <a
              href="https://doi.org/10.1007/s00345-025-05514-7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://doi.org/10.1007/s00345-025-05514-7
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex flex-col items-center justify-center mt-8 gap-2">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://drelmira-bioinformatic.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Bioinformatics & Clinical Metagenomics by Dr. Elmira Davasaz T. →
        </a>
        <div className="flex flex-col items-center mt-2 text-sm text-gray-700">
          <p>
            Email:{" "}
            <a href="mailto:elmira.dt@gmail.com" className="underline">
              elmira.dt@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+905342699127" className="underline">
              +90 534 269 91 27
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
