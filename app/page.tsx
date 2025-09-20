"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8">
      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Bioinformatics & Clinical Metagenomics Analysis
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          An innovative platform by Dr. Elmira Davasaz T. integrating microbiome
          analysis, mobile genetic elements, and novel bacterial species discovery
          to advance chronic disease research and personalized therapeutic strategies.
        </p>

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
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Contact Us
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:elmira.dt@gmail.com"
                  className="text-blue-600 underline"
                >
                  📧 elmira.dt@gmail.com
                </a>
                <a
                  href="tel:+905342699127"
                  className="text-blue-600 underline"
                >
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

        {/* Article Editing */}
        <div className="mt-6 text-gray-700 text-sm">
          <strong>NOT:</strong> Professional article editing and consultancy for
          submissions to high-impact Q1–Q2 journals in bioinformatics, microbiome,
          and clinical metagenomics.
        </div>

        {/* Bioinformatics image */}
        <div className="mb-8">
          <Image
            src="/bioinfo.jpg"
            alt="Bioinformatics & Clinical Metagenomics"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
            priority
          />
          <p className="mt-2 text-sm text-gray-600">
            Clinical metagenomics in chronic disease research.
          </p>
        </div>

        {/* Two smaller images side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div>
            <Image
              src="/microbiome.jpg"
              alt="Microbiome network visualization"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm text-gray-600 text-center">
              Microbiome diversity and network analysis
            </p>
          </div>

          <div>
            <Image
              src="/antibiotic.jpg"
              alt="Antibiotic resistance illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-sm text-gray-600 text-center">
              Antibiotic resistance and clinical impact
            </p>
          </div>
        </div>

        {/* Publication image with DOI */}
        <div className="mb-8">
          <Image
            src="/publication.jpg"
            alt="Publication: Bioinformatic Strategies in Metagenomics of Chronic Prostatitis"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
          <p className="mt-2 text-[12px] text-gray-500 italic">
            <a
              href="https://doi.org/10.1007/s00345-025-05514-7"
              target="_blank"
              rel="noopener noreferrer"
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
          href="https://your-website.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Bioinformatics & Clinical Metagenomics by Dr. Elmira Davasaz T. →
        </a>

        {/* Contact details */}
        <div className="flex flex-col items-center mt-4 text-sm text-gray-600">
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
