import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Espaço Saúde Neuza Fernandes | Estética Terapêutica em Perdizes – SP",
  description:
    "Drenagem linfática, shiatsu, relaxante, limpeza de pele e mais. Atendimento acolhedor em Perdizes. Agende pelo WhatsApp.",
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = "GTM-XXXXXXX"; // <- substitua aqui

  // JSON-LD (rico para Google)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Espaço Saúde Neuza Fernandes",
    image: "/images/espaco1.webp",
    url: "https://espacosaudeneuzafernandes.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Cotoxó, 611 - Cj 17, 1º andar",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "05021-000",
      addressCountry: "BR"
    },
    sameAs: ["https://www.instagram.com/espacosaudeneuza/"],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" }
    ]
  };

  return (
    <html lang="pt-BR">
      <body>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0" width="0" style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
