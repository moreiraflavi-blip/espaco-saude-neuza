"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo } from "react";

const WHATSAPP = "https://wa.me/5511939273471";
const INSTAGRAM = "https://instagram.com/espacosaudeneuza";
const MAPS =
  "https://www.google.com/maps?q=R.+Cotox%C3%B3,+611+-+Perdizes,+S%C3%A3o+Paulo";

const services = [
  { name: "Drenagem Linfática", desc: "Técnica Vodder para reduzir inchaço, ativar o sistema linfático e aliviar retenção de líquidos." },
  { name: "Shiatsu Terapêutico", desc: "Pressões com os dedos ao longo dos meridianos para aliviar tensões e dores, equilibrando a energia vital." },
  { name: "Reflexologia Podal", desc: "Estimulação de pontos nos pés que refletem órgãos e sistemas, melhora a circulação e relaxa profundamente." },
  { name: "Massagem Relaxante", desc: "Manobras suaves que reduzem estresse e ansiedade, promovendo bem-estar imediato e sono de qualidade." },
  { name: "Massagem Modeladora", desc: "Movimentos firmes para contorno corporal, melhora do aspecto da pele e metabolismo local." },
  { name: "Drenagem Pós-Cirúrgica", desc: "Drenagem delicada para controle de edemas e recuperação mais confortável (recomendado com liberação médica)." },
  { name: "Ventosaterapia", desc: "Aplicação de ventosas para liberar aderências, aumentar a circulação e aliviar dores musculares." },
  { name: "Bambuterapia", desc: "Uso de hastes de bambu em manobras profundas para relaxamento intenso e modelagem suave." },
  { name: "Massagem Facial", desc: "Técnicas faciais para tônus, drenagem e aspecto descansado da pele." },
];

const gallery = [
  { src: "/images/foto-neuza-arrumando2.webp", caption: "Preparo do atendimento" },
  { src: "/images/espaco3.webp", caption: "Sala de atendimento 1" },
  { src: "/images/espaco4.webp", caption: "Sala de atendimento 2" },
  { src: "/images/espaco5.webp", caption: "Sala de atendimento 3" },
  { src: "/images/experiencia6.webp", caption: "Detalhes do ambiente" },
  { src: "/images/produtos7.webp", caption: "Nosso produto" },
  { src: "/images/localizacao8.webp", caption: "Localização" },
  { src: "/images/espaco7.webp", caption: "Recepção aconchegante" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="relative mx-auto max-w-6xl px-4 sm:px-6 py-6 flex items-center justify-center">
        <div className="absolute right-4 top-6 flex items-center gap-2">
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition">Instagram</a>
        </div>
        <Image src="/images/logo-neuza-tight.webp" width={220} height={88} priority alt="Espaço Saúde Neuza Fernandes" className="h-auto w-[170px] sm:w-[200px] md:w-[220px]" />
      </header>

      {/* Seção Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-900">Toque terapêutico com 40+ anos de experiência em Perdizes</h1>
            <p className="mt-4 text-lg text-slate-700">Neuza Fernandes é massoterapeuta especializada em <strong>Drenagem Linfática</strong>, <strong>Shiatsu</strong>, <strong>Reflexologia</strong> e <strong>Reiki</strong>. Atendimento acolhedor, técnica precisa e resultados visíveis — bem-estar que você sente no corpo e na mente.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" className="rounded-2xl bg-brand-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-brand-700 transition">Agendar pelo WhatsApp</a>
              <a href={MAPS} target="_blank" className="rounded-2xl border border-slate-300 px-5 py-3 text-slate-800 font-medium hover:bg-slate-50 transition">Ver no Google Maps</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-lg">
            <Image src="/images/foto-neuza-preparando1.webp" alt="Neuza preparando o atendimento" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Seção Espaço */}
      <section id="espaco" className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-semibold text-slate-900">O Espaço</motion.h2>
          <p className="mt-2 text-slate-600">Ambiente silencioso, iluminação suave e higiene impecável — tudo para você relaxar desde a chegada.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {gallery.map((g, i) => (
              <motion.figure key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={g.src} alt={g.caption} fill className="object-cover" />
                </div>
                <figcaption className="p-3 text-sm text-slate-700">{g.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-semibold text-slate-900">Serviços</motion.h2>
          <p className="mt-2 text-slate-600">Atendimentos personalizados com preço único para facilitar sua escolha.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.03 }} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{s.name}</h3>
                  <span className="rounded-xl bg-brand-50 px-3 py-1 text-brand-700 text-sm font-semibold">R$ 120,00</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                <div className="mt-4">
                  <a href={WHATSAPP} target="_blank" className="inline-block rounded-xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold hover:bg-brand-700 transition">Agendar</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center text-sm text-slate-600">
          © {year} Espaço Saúde Neuza Fernandes · Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
