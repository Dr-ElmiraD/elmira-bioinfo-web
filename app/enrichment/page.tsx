// app/enrichment/page.tsx
import Image from "next/image";

export default function EnrichmentPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Enrichment Network Analysis</h1>
      <p className="text-gray-600 mb-8">
        Nodes represent <strong>biomarkers</strong>; edges indicate pairwise overlap (Jaccard-like).
        These example networks are generic and can be adapted to any project or disease.
      </p>

      <div className="space-y-10">
        {/* 1) Biomarkers set 1 — ilk görsel */}
        <figure>
          <Image
            src="/images/enrichment/enrichment_biomarkers_1.png"
            alt="Biomarker enrichment network (set 1)"
            width={1600}
            height={900}
            className="rounded-xl border shadow w-full h-auto"
            sizes="(min-width: 1024px) 960px, 100vw"
            priority
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Biomarkers set 1 (e.g., ALB, APOA1, APOB, APOE, CD63, CD9, CD81…).
          </figcaption>
        </figure>

        {/* 2) Example görsel */}
        <figure>
          <Image
            src="/images/enrichment/example.png"
            alt="Enrichment network (example)"
            width={1600}
            height={900}
            className="rounded-xl border shadow w-full h-auto"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Example enrichment network.
          </figcaption>
        </figure>

        {/* 3) Biomarkers set 2 */}
        <figure>
          <Image
            src="/images/enrichment/enrichment_biomarkers_2.png"
            alt="Biomarker enrichment network (set 2)"
            width={1600}
            height={900}
            className="rounded-xl border shadow w-full h-auto"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
          <figcaption className="text-sm text-gray-500 mt-2 text-center">
            Biomarkers set 2 (e.g., CRP, IL6, TNF, MMP9, S100A8/A9, TLR4…).
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

