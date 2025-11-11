import type { Metadata } from "next";
import "./globals.css";

const SITE = {
  name: "Espaço Saúde Neuza Fernandes",
  url: "https://espacosaudeneuzafernandes.com.br",
  description:
    "Estética terapêutica em Perdizes (SP): Drenagem Linfática Método Vodder, Shiatsu, Reiki, Reflexologia e massagem relaxante. Cuidado técnico e acolhedor.",
  locale: "pt_BR",
  instagram: "https://www.instagram.com/espacosaudeneuza/",
  phoneIntl: "+55 11 93927-3471",
  street: "R. Cotoxó, 611 - Cj 17, 1º andar",
  city: "São Paulo",
  region: "SP",
  zip: "05021-000",
  country: "BR",
  image: "/images/og-cover.jpg", // coloque uma imagem 1200x630 em /public/images/og-cover.jpg
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    locale: SITE.locale,
    images: [
      {
        url: SITE.image,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Perdizes`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.image],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "healthcare",
  robots: {
    index: true,
    follow: true,
  },
  // se for usar verificação de propriedade:
  // verification: { google: "CÓDIGO_DO_SEARCH_CONSOLE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // JSON-LD de negócio local (HealthAndBeautyBusiness)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}${SITE.image}`,
    telephone: SITE.phoneIntl,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.zip,
      addressCountry: SITE.country,
    },
    sameAs: [SITE.instagram],
    priceRange: "R$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "00:00", closes: "00:00" }, // Fechado
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" }, // Fechado
    ],
    // geo opcional se quiser (coloque as coordenadas reais)
    // geo: { "@type": "GeoCoordinates", latitude: -23.5365, longitude: -46.6770 },
  };

  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#F7F3EE] text-[#444]">
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
