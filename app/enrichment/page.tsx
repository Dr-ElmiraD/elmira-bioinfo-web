export default function EnrichmentPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Enrichment Network Analysis</h1>

      {/* Section: Proteomic Analyzes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Proteomic Analyzes</h2>
        <p className="text-gray-600 mb-4">
          This section demonstrates enrichment results for proteomic datasets. 
          Nodes represent enriched biological terms, and edges represent overlaps 
          between these terms.
        </p>

        <figure className="flex flex-col items-center">
          <img
            src="/images/enrichment/example.png"
            alt="Proteomic enrichment network figure"
            className="rounded-xl border shadow max-w-2xl"
          />
          <figcaption className="text-sm text-gray-500 mt-2">
            Figure 1. Example proteomic enrichment network.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
