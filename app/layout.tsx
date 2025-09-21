import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Elmira Davasaz T. — Bioinformatics & Clinical Metagenomics",
  description:
    "Clinical metagenomics, microbiome, and bioinformatics consulting.",
  metadataBase: new URL("https://www.drelmira-bioinformatic.com"),
  alternates: { canonical: "/" },

  // WhatsApp/Facebook/LinkedIn önizleme (Open Graph)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.drelmira-bioinformatic.com/",
    siteName: "Dr. Elmira Davasaz T.",
    title: "Bioinformatics & Clinical Metagenomics",
    description:
      "Microbiome • Clinical Metagenomics • Bioinformatics consulting by Dr. Elmira Davasaz T.",
    images: [
      {
        url: "/bioinfo.jpg",     // public/bioinfo.jpg kullanılıyor
        width: 1200,
        height: 630,
        alt: "Bioinformatics & Clinical Metagenomics",
      },
    ],
  },

  // Twitter/X kartı (opsiyonel ama faydalı)
  twitter: {
    card: "summary_large_image",
    title: "Bioinformatics & Clinical Metagenomics",
    description:
      "Microbiome • Clinical Metagenomics • Bioinformatics consulting by Dr. Elmira Davasaz T.",
    images: ["/bioinfo.jpg"],
  },

  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
