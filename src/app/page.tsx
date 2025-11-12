"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

const WHATSAPP = "https://wa.me/55119939273471";
const INSTAGRAM = "https://instagram.com/espacosaudeneuza"; // confirme o handle
const MAPS =
  "https://www.google.com/maps?q=R.+Cotox%C3%B3,+611+-+Perdizes,+S%C3%A3o+Paulo";

const services = [
  {
    name: "Drenagem Linfática",
    desc: "Técnica Vodder para reduzir inchaço, ativar o sistema linfático e aliviar retenção de líquidos.",
  },
  {
    name: "Shiatsu Terapêutico",
    desc: "Pressões com os dedos ao longo dos meridianos para aliviar tensões e dores, equilibrando a energia vital.",
  },
  {
    name: "Reflexologia Podal",
    desc: "Estimulação de pontos nos pés que refletem órgãos e sistemas, melhora a circulação e relaxa profundamente.",
  },
  {
    name: "Massagem Relaxante",
    desc: "Manobras suaves que reduzem estresse e ansiedade, promovendo bem-estar imediato e sono de qualidade.",
  },
  {
    name: "Massagem Modeladora",
    desc: "Movimentos firmes para contorno corporal, melhora do aspecto da pele e metabolismo local.",
  },
  {
    name: "Drenagem Pós-Cirúrgica",
    desc: "Drenagem delicada para controle de edemas e recuperação mais confortável (recomendado com liberação médica).",
  },
  {
    name: "Ventosaterapia",
    desc: "Aplicação de ventosas para liberar aderências, aumentar a circulação e aliviar dores musculares.",
  },
  {
    name: "Bambuterapia",
    desc: "Uso de hastes de bambu em manobras profundas para relaxamento intenso e modelagem suave.",
  },
  {
    name: "Massagem Facial",
    desc: "Técnicas faciais para tônus, drenagem e aspecto descansado da pele.",
  },
];

const gallery = [
  { src: "/images/foto-neuza-arrumando.webp", caption: "Preparo do atendimento" },
  { src: "/images/espaco1.webp", caption: "Sala de atendimento 1" },
  { src: "/images/espaco2.webp", caption: "Sala de atendimento 2" },
  { src: "/images/espaco3.webp", caption: "Sala de atendimento 3" },
  { src: "/images/espaco4.webp", caption: "Detalhes do ambiente" },
  { src: "/images/espaco5.webp", caption: "Nosso produto" },
  { src: "/images/localizacao-laudo-natel-611.webp", caption: "Localização" },
  { src: "/images/espaco7.webp", caption: "Recepção aconchegante" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen">
      {/* HEADER */}
      <header className="relative mx-auto max-w-6xl px-4 sm:px-6 py-6 flex items-center justify-center">
        <div className="absolute right-4 top-6 flex items-center gap-2">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.6.5.7.3 1.3.7 1.9 1.3.6.6 1 .1 1.3.8.3.6.4 1.3.5 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.5 2.6-.3.7-.7 1.3-1.3 1.9-.6.6-1.2 1-1.9 1.3-.6.3-1.3.4-2.6.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.6-.5-.7-.3-1.3-.7-1.9-1.3-.6-.6-1-1.2-1.3-1.9-.3-.6-.4-1.3-.5-2.6C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.6.3-.7.7-1.3 1.3-1.9.6-.6 1.2-1 1.9-1.3.6-.3 1.3-.4 2.6-.5C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.8.1-.9.1-1.4.2-1.7.4-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.2.3-.3.8-.4 1.7-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1.9.2 1.4.4 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.2.8.3 1.7.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c.9-.1 1.4-.2 1.7-.4.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .2-.3.3-.8.4-1.7.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.2-.8-.3-1.7-.4-1.3-.1-1.7-.1-4.8-.1m0 2.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 1.8a3.8 3.8 0 1 0 0 7.5 3.8 3.8 0 0 0 0-7.5m6-1.2a1.3 1.3 0 1 1-2.5 0 1.3 1.3 0 0 1 2.5 0" />
            </svg>
            Instagram
          </a>
        </div>

        <Image
          src="/images/logo-neuza-tight.webp"
          width={220}
          height={88}
          priority
          alt="Espaço Saúde Neuza Fernandes"
          className="h-auto w-[170px] sm:w-[200px] md:w-[220px]"
        />
      </header>

      {/* As outras seções seguem conforme a versão validada (Sobre, Espaço, Serviços, Contato, Rodapé) */}
    </main>
  );
}
