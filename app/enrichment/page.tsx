export default function EnrichmentPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Enrichment Network Analysis</h1>
      <p className="text-gray-600 mb-6">
        Bu sayfada farklı projeler ve hastalıklar için yaptığımız zenginleştirme (enrichment) ağ analizlerini gösteriyoruz.
      </p>

      <figure>
        <img
          src="/images/enrichment/example.png"
          alt="Enrichment network figure"
          className="rounded-xl border shadow"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          Şekil 1. Örnek enrichment ağı.
        </figcaption>
      </figure>
    </main>
  );
}
