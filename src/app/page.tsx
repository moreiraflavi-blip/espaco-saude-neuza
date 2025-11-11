"use client";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

const PALETTE = {
  lilac: "#e2a9f1",
  softLilac: "#F7F3FF",
  moss: "#06662a",
  white: "#FFFFFF",
  beige: "#F7F3EE",
  gray: "#444444",
};

type Service = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
};

export default function LandingPage() {
  const CONFIG = {
    instagram: "https://www.instagram.com/espacosaudeneuza/",
    whatsappDefault:
      "https://wa.me/5511939273471?text=Ol%C3%A1%20Neuza%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o",
    whatsappBase: "https://wa.me/5511939273471?text=",
  };

  const SERVICES: Service[] = [
    { name: "Limpeza de Pele Profunda", desc: "Protocolo para remover impurezas, hidratar e renovar a pele.", price: "R$ 120,00" },
    { name: "Drenagem Linfática Tradicional", desc: "Técnica suave que estimula o sistema linfático e reduz inchaços.", price: "R$ 120,00" },
    { name: "Drenagem para Gestantes", desc: "Segura e indicada para aliviar inchaços na gestação.", price: "R$ 120,00", tag: "Gestante" },
    { name: "Drenagem Pós-Cirúrgica", desc: "Auxilia na recuperação e reduz edemas após procedimentos.", price: "R$ 120,00", tag: "Pós-op" },
    { name: "Massagem Relaxante", desc: "Alívio do estresse e tensões. Bem-estar físico e mental.", price: "R$ 120,00" },
    { name: "Massagem Modeladora", desc: "Estimula a região e melhora o contorno corporal.", price: "R$ 120,00" },
    { name: "Ventosaterapia", desc: "Alívio de dores e tensões com efeito detox natural.", price: "R$ 120,00" },
    { name: "Bambuterapia", desc: "Modela o corpo e relaxa profundamente com bambus.", price: "R$ 120,00" },
    { name: "Shiatsu", desc: "Pressão em pontos energéticos para equilíbrio do corpo.", price: "R$ 120,00" },
    { name: "Reiki", desc: "Terapia energética para equilíbrio emocional e relaxamento.", price: "R$ 120,00" },
    { name: "Reflexologia Podal", desc: "Ativa pontos reflexos nos pés e melhora funções do corpo.", price: "R$ 120,00" },
  ];

  const gallery = [
    { src: "/images/foto-neuza-arrumando.webp", alt: "Preparo do atendimento" },
    { src: "/images/espaco1.webp", alt: "Sala de atendimento 1" },
    { src: "/images/espaco2.webp", alt: "Sala de atendimento 2" },
    { src: "/images/espaco3.webp", alt: "Sala de atendimento 3" },
    { src: "/images/espaco4.webp", alt: "Detalhes do ambiente" },
    { src: "/images/espaco5.webp", alt: "Camilla e iluminação suave" },
    { src: "/images/espaco6.webp", alt: "Higiene e organização" },
    { src: "/images/espaco7.webp", alt: "Recepção aconchegante" },
  ];

  const whatsappFor = (service: string) =>
    `${CONFIG.whatsappBase}${encodeURIComponent(
      `Olá Neuza, gostaria de agendar ${service}.`
    )}`;

  return (
    <div className="min-h-screen bg-[#F7F3EE] text-[#444444]">
      {/* HEADER */}
      <header className="relative py-6 bg-white shadow-sm flex justify-center items-center">
        <img
          src="/images/logo-neuza.png"
          alt="Logo Neuza Fernandes - Espaço Saúde Perdizes"
          className="h-20 md:h-24"
        />
        <a
          href={CONFIG.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-sm px-3 py-2 rounded-2xl border border-[#eae2db] hover:bg-[#faf7f3]"
          aria-label="Instagram Espaço Saúde Neuza Fernandes"
        >
          <Instagram className="h-4 w-4" />
          <span className="hidden sm:inline">Instagram</span>
        </a>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center px-4">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">
              Sobre Neuza Fernandes
            </h2>
            <p className="mt-4 text-[#555] leading-relaxed">
              Com mais de <strong>40 anos de prática em estética terapêutica</strong>, Neuza
              combina técnica, sensibilidade e propósito para transformar corpo e mente com
              segurança e acolhimento.
              <br />
              <br />
              Especialista em <strong>Drenagem Linfática Método Vodder</strong>,{" "}
              <strong>Shiatsu</strong>, <strong>Reiki</strong> e{" "}
              <strong>Reflexologia</strong>, ela acredita que cada toque é uma forma de cuidar
              profundamente.
            </p>
            <blockquote
              className="mt-6 border-l-4 pl-4 italic text-[#666]"
              style={{ borderColor: "#e2a9f1" }}
            >
              “Cada corpo tem um ritmo. Eu respeito o seu.”
            </blockquote>
            <div className="mt-6 flex gap-3">
              <a
                href={CONFIG.whatsappDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-white shadow-md hover:shadow-lg transition"
                style={{ background: PALETTE.moss }}
              >
                💬 Agendar pelo WhatsApp
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border border-[#eae2db] text-[#444] hover:bg-white"
              >
                Ver o espaço
              </a>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/foto-neuza-preparando.webp"
              alt="Neuza Fernandes preparando materiais de atendimento"
              className="rounded-2xl shadow-md object-cover w-full h-[420px]"
            />
          </m.div>
        </div>
      </section>

      {/* O ESPAÇO */}
      <section id="galeria" className="py-20 bg-[#F7F3FF]">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222] text-center mb-10">
            O Espaço
          </h2>

          <LazyMotion features={domAnimation}>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {gallery.map((f, i) => (
                <m.article
                  key={f.src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={f.src}
                      alt={f.alt}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="px-4 py-3 text-center text-[13px] text-[#666]">
                    {f.alt}
                  </div>
                </m.article>
              ))}
            </div>
          </LazyMotion>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">Serviços</h2>
            <p className="text-sm text-[#6b6b6b] mt-2">
              Atendimentos individuais · valor por sessão: <strong>R$ 120,00</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <m.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-[#efe9e2] bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-[#222] leading-snug">{s.name}</h3>
                  <span className="text-[12px] text-[#067a36] bg-[#eaf7f0] px-2 py-1 rounded-full whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#555]">{s.desc}</p>

                <div className="mt-3 flex items-center justify-between">
                  {s.tag ? (
                    <span className="text-[11px] px-2 py-1 rounded-full bg-[#F7F3FF] text-[#6b5a81]">
                      {s.tag}
                    </span>
                  ) : (
                    <span />
                  )}

                  <a
                    href={whatsappFor(s.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] inline-flex items-center gap-2 px-3 py-2 rounded-xl text-white hover:shadow transition"
                    style={{ background: PALETTE.moss }}
                  >
                    Agendar
                  </a>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISITE-NOS */}
      <section id="visite" className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">Visite-nos</h2>
        <p className="mt-2 text-[#555]">
            R. Cotoxó, 611 — 1º andar (Cj 17) — Perdizes / SP
          </p>
          <p className="text-sm mt-1" style={{ color: PALETTE.moss }}>
            Estacionamento pago no prédio
          </p>
          <div className="mt-4">
            <a
              href="https://google.com/maps/place/Espaço+Saúde+Neuza+Fernandes+%7C+Perdizes/data=!4m2!3m1!1s0x0:0x30f3cd4266258a45"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white shadow-sm hover:shadow-md"
              style={{ background: PALETTE.moss }}
            >
              <MapPin className="h-4 w-4 text-white" /> Ver no Google Maps
            </a>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-[#efe9e2] shadow-sm">
            <iframe
              title="Mapa – Espaço Saúde Neuza Fernandes"
              src="https://www.google.com/maps?q=R.+Cotox%C3%B3,+611+-+Perdizes,+S%C3%A3o+Paulo+-+SP&output=embed"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl p-5 bg-[#F7F3EE] border border-[#efe9e2]">
              <h3 className="font-semibold text-[#222]">Horário de Funcionamento</h3>
              <ul className="mt-3 text-sm text-[#555] space-y-1">
                <li>Segunda-feira: <strong>Fechado</strong></li>
                <li>Terça a Sexta: <strong>09:00–19:00</strong></li>
                <li>Sábado: <strong>08:00–16:00</strong></li>
                <li>Domingo: <strong>Fechado</strong></li>
              </ul>
            </div>
            <div className="rounded-2xl p-5 bg-[#F7F3EE] border border-[#efe9e2] md:col-span-2">
              <h3 className="font-semibold text-[#222]">Como chegar</h3>
              <p className="mt-3 text-sm text-[#555]">
                A poucos minutos da Av. Sumaré. Acesso fácil por transporte público e carro.
                Estacionamento <strong>pago</strong> disponível no prédio (sujeito à disponibilidade).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="py-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">
          Reserve seu momento de equilíbrio
        </h2>
        <p className="mt-3 text-[#555]">
          Agende sua sessão agora e sinta o poder do toque consciente.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
          <a
            href={CONFIG.whatsappDefault}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-white shadow-md hover:shadow-lg transition"
            style={{ background: PALETTE.moss }}
          >
            💬 Agendar pelo WhatsApp
          </a>
          <a
            href={CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-[#dfd7cf] text-[#444] hover:bg-white"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </div>
      </section>

      {/* BOTÃO FIXO WHATSAPP (MOBILE) */}
      <a
        href={CONFIG.whatsappDefault}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed md:hidden bottom-4 right-4 z-50 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-lg"
        style={{ background: PALETTE.moss }}
        aria-label="Agendar pelo WhatsApp"
      >
        <span className="text-white text-xl">💬</span>
      </a>
    </div>
  );
}
