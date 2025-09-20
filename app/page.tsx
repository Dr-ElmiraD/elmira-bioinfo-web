"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-between p-8"
      style={{
        backgroundImage: "url('/dna-background.jpg')", // public klasörüne ekleyin
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-1 text-center bg-white/80 rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Bioinformatics & Clinical Metagenomics Analysis
        </h1>
        <p className="text-lg max-w-2xl mb-6">
          An innovative platform by Dr. Elmira Davasaz T. integrating microbiome
          analysis, mobile genetic elements, and novel bacterial species
          discovery to advance chronic disease research and personalized
          therapeutic strategies.
        </p>

        {/* Actions */}
        <div className="flex gap-4 mb-8">
          <a
            href="mailto:elmira.dt@gmail.com"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe2NTzP2V5jyvIh-KGfQKTbt00Z_y9OJS2ZeUethUvsiFfITQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
          >
            Send Project
          </a>
        </div>

        {/* Article Editing */}
        <div className="mt-6 text-gray-800 text-lg font-semibold">
          Professional article editing and consultancy for submissions to
          high-impact Q1–Q2 journals in biology, with specialization in
          bioinformatics, microbiome, and clinical metagenomics.
        </div>

        {/* Bioinformatics image */}
        <div className="mb-8 mt-6">
          <Image
            src="/bioinfo.jpg"
            alt="Bioinformatics & Clinical Metagenomics"
            width={450}   // küçültülmüş boyut
            height={300}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
      </main>
    </div>
  );
}

