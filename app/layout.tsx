import type { Metadata, Viewport } from "next";
import "./globals.css";


const siteUrl = "https://espaco-saude-neuza.vercel.app";
const title = "Espaço Saúde Neuza Fernandes | Perdizes";
const description =
"Massoterapia com 40+ anos de experiência em Perdizes: Drenagem Vodder, Shiatsu, Reflexologia, Reiki e mais.";


export const metadata: Metadata = {
metadataBase: new URL(siteUrl),
title,
description,
robots: { index: true, follow: true },
openGraph: {
title,
description,
url: siteUrl,
siteName: "Espaço Saúde Neuza Fernandes",
images: [
{ url: "/images/logo-neuza-tight.webp", width: 1200, height: 630, alt: "Espaço Saúde Neuza Fernandes" },
],
locale: "pt_BR",
type: "website",
},
alternates: { canonical: siteUrl },
};


export const viewport: Viewport = { themeColor: "#2aa588" };


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt-BR">
<body>{children}</body>
</html>
);
}