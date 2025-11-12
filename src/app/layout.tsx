// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Espaço Saúde Neuza Fernandes | Perdizes",
  description:
    "Massoterapia com 40+ anos de experiência em Perdizes: Drenagem Linfática Método Vodder, Shiatsu, Reflexologia, Reiki e mais. Agende pelo WhatsApp.",
  metadataBase: new URL("https://espaco-saude-neuza.vercel.app"),
  openGraph: {
    title: "Espaço Saúde Neuza Fernandes | Perdizes",
    description:
      "Cuidado técnico e acolhedor em Perdizes. Drenagem Vodder, Shiatsu, Reflexologia, Reiki e mais.",
    url: "https://espaco-saude-neuza.vercel.app",
    siteName: "Espaço Saúde Neuza Fernandes",
    images: [
      { url: "/images/logo-neuza-tight.webp", width: 1200, height: 630, alt: "Logo Neuza Fernandes" },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
