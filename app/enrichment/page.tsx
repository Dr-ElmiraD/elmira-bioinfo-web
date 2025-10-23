// app/page.tsx
export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Welcome to drelmira-bioinformatic</h1>
      <p className="text-gray-600 mt-2">
        Bioinformatics • Proteomics • Enrichment analysis and reproducible science.
      </p>

      <section id="proteomic" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Proteomic Analyzes</h2>
        <p className="text-gray-600 mb-6">
          The figure below illustrates an enrichment network for proteomic datasets.
          Nodes represent enriched terms; edges represent Jaccard overlap between terms.
        </p>

        <figure>
          <img
            src="/images/enrichment/example.png"
            alt="Proteomic enrichment network figure"
            className="rounded-xl border shadow mx-auto"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Figure 1. Example proteomic enrichment network (node size ∝ hits; edge = Jaccard ≥ 0.20).
          </figcaption>
        </figure>

        <div className="mt-6 text-center">
          <a className="underline" href="/enrichment">See all enrichment figures →</a>
        </div>
      </section>
    </main>
  );
}
