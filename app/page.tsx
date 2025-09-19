"use client";

import Image from "next/image";

export default function Home() {
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
          <a
            href="mailto:your-email@example.com"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://forms.gle/your-google-form-link" // Google Form linkini buraya koy
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Send Project
          </a>
        </div>

        {/* Article Editing */}
        <div className="max-w-xl p-6 border rounded-2xl shadow-md bg-gray-50 mb-8">
          <h2 className="text-2xl font-semibold mb-2">Article Editing (Q1–Q2 Journals)</h2>
          <p>
            Professional article editing and consultancy for submissions to high-impact
            Q1–Q2 journals in bioinformatics, microbiome, and clinical metagenomics.
          </p>
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
            <a href="mailto:your-email@example.com" className="underline">
              your-elmira.dt@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+905342699127" className="underline">
              +90 5342699127
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
