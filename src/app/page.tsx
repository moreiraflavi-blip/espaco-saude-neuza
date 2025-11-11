"use client";

// ====== Cores do tema ======
const PALETTE = {
  lilac: "#e2a9f1",
  softLilac: "#F7F3FF",
  moss: "#06662a",
  white: "#FFFFFF",
  beige: "#F7F3EE",
  gray: "#444444",
};

// ====== Ícones SVG nativos (sem libs) ======
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 12 15.8 2.8 2.8 0 0 0 12 9.2zM17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
    </svg>
  );
}

export default function LandingPage() {
  const CONFIG = {
    instagram: "https://www.instagram.com/espacosaudeneuza/",
    whatsapp: "https://wa.me/5511939273471?text=Ol%C3%A1%20Neuza%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o",
    maps: "https://google.com/maps/place/Espaço+Saúde+Neuza+Fernandes+%7C+Perdizes/data=!4m2!3m1!1s0x0:0x30f3cd4266258a45?sa=X&ved=1t:2428&ictx=111",
  };

  // ====== Helper para mensurar cliques com GTM/GA4 ======
  const track = (event: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event, ...params });
    }
  };

  // ====== Imagens (todas .webp) ======
  const GALLERY = [
    "/images/foto-neuza-arrumando.webp",
    "/images/espaco1.webp",
    "/images/espaco2.webp",
    "/images/espaco3.webp",
    "/images/espaco4.webp",
    "/images/espaco5.webp",
    "/images/espaco6.webp",
    "/images/espaco7.webp",
  ];

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
          onClick={() => track("instagram_click", { from: "header" })}
          className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-sm px-3 py-2 rounded-2xl border border-[#eae2db] hover:bg-[#faf7f3]"
          aria-label="Instagram Espaço Saúde Neuza Fernandes"
        >
          <InstagramIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Instagram</span>
        </a>
      </header>

      {/* SOBRE */}
      <section id="sobre" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center px-4">
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease_forwards]">
            <p className="text-sm tracking-wide uppercase" style={{ color: PALETTE.moss }}>
              Estética terapêutica em Perdizes · SP
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-[#222]">
              Sobre Neuza Fernandes
            </h2>
            <p className="mt-4 text-[#555] leading-relaxed">
              Com mais de <strong>40 anos de prática</strong>, Neuza combina técnica, sensibilidade e propósito
              para transformar corpo e mente com segurança e acolhimento. Especialista em{" "}
              <strong>Drenagem Linfática Método Vodder</strong>, <strong>Shiatsu</strong>, <strong>Reiki</strong> e{" "}
              <strong>Reflexologia</strong>.
            </p>
            <blockquote
              className="mt-6 border-l-4 pl-4 italic text-[#666]"
              style={{ borderColor: PALETTE.lilac }}
            >
              “Cada corpo tem um ritmo. Eu respeito o seu.”
            </blockquote>

            <div className="mt-6 flex gap-3">
              <a
                href={CONFIG.whatsapp}
                target="_blank" rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { from: "sobre" })}
                className="px-5 py-3 rounded-2xl text-white"
                style={{ background: PALETTE.moss }}
              >
                💬 Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="px-5 py-3 rounded-2xl border border-[#e6ddd4] hover:bg-white"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="opacity-0 animate-[fadeIn_0.6s_ease_0.1s_forwards]">
            <img
              src="/images/foto-neuza-preparando.webp"
              alt="Neuza preparando materiais de atendimento"
              className="rounded-2xl shadow-md object-cover w-full h-[420px]"
              width={800}
              height={420}
            />
          </div>
        </div>
      </section>

      {/* GALERIA (cards alinhados, .webp) */}
      <section id="galeria" className="py-20" style={{ background: PALETTE.softLilac }}>
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222] mb-10">O Espaço</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className="rounded-2xl shadow-md overflow-hidden bg-white opacity-0 animate-[fadeInUp_0.5s_ease_forwards]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <img
                  src={src}
                  alt={`Foto ${i + 1} do Espaço Saúde Neuza Fernandes`}
                  className="object-cover w-full h-60"
                  width={400}
                  height={240}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS (R$ 120) */}
      <section id="servicos" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222] text-center">Serviços</h2>
          <p className="text-[#555] text-center mt-2">
            Atendimento acolhedor e técnico — valor por sessão: <strong>R$ 120</strong>
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["💆‍♀️ Limpeza de Pele Profunda", "Remoção de impurezas, hidratação e renovação da pele."],
              ["💧 Drenagem Linfática Tradicional", "Estimula o sistema linfático, reduz inchaços e melhora a circulação."],
              ["🤱 Drenagem para Gestantes", "Alívio do inchaço e relaxamento com total segurança."],
              ["🏥 Drenagem Pós-Cirúrgica", "Auxilia na recuperação e reduz edemas pós-procedimentos."],
              ["🌿 Massagem Relaxante", "Bem-estar físico e mental; alívio de estresse e tensões."],
              ["🔥 Massagem Modeladora", "Ativa a circulação e ajuda no contorno corporal."],
              ["🌀 Ventosaterapia", "Alívio de dores e tensões com efeito detox natural."],
              ["🎋 Bambuterapia", "Ativa circulação, modela o corpo e relaxa profundamente."],
              ["✋ Shiatsu", "Equilíbrio físico e mental por pressão em pontos energéticos."],
              ["✨ Reiki", "Equilíbrio emocional e relaxamento profundo."],
              ["🦶 Reflexologia Podal", "Ativa pontos reflexos e melhora o funcionamento de sistemas."],
            ].map(([title, desc]) => (
              <div key={title as string} className="rounded-2xl border border-[#efe9e2] p-5 bg-white">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-[#222]">{title}</h3>
                  <span className="text-[13px] px-2 py-1 rounded-full" style={{ background: "#eef7f0", color: PALETTE.moss }}>
                    R$ 120
                  </span>
                </div>
                <p className="text-sm text-[#555] mt-2">{desc}</p>
                <a
                  href={CONFIG.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { from: "servico", service: title })}
                  className="inline-block mt-4 text-sm px-3 py-2 rounded-2xl text-white"
                  style={{ background: PALETTE.moss }}
                >
                  Agendar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISITE-NOS */}
      <section id="visite" className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">Visite-nos</h2>
          <p className="mt-2 text-[#555]">R. Cotoxó, 611 — 1º andar (Cj 17) — Perdizes / SP</p>
          <p className="text-sm mt-1" style={{ color: PALETTE.moss }}>Estacionamento pago no prédio</p>

          <div className="mt-4">
            <a
              href={CONFIG.maps}
              target="_blank" rel="noopener noreferrer"
              onClick={() => track("maps_click", { from: "visite" })}
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white shadow-sm hover:shadow-md"
              style={{ background: PALETTE.moss }}
            >
              <MapPinIcon className="h-4 w-4" /> Ver no Google Maps
            </a>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden border border-[#efe9e2] shadow-sm">
            <iframe
              title="Mapa – Espaço Saúde Neuza Fernandes"
              src="https://www.google.com/maps?q=R.+Cotox%C3%B3,+611+-+Perdizes,+S%C3%A3o+Paulo+-+SP&output=embed"
              width="100%" height="340" style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
            <div className="rounded-2xl p-5 bg-[#F7F3EE] border border-[#efe9e2]">
              <h3 className="font-semibold text-[#222]">Horário de Funcionamento</h3>
              <ul className="mt-3 text-sm text-[#555] space-y-1">
                <li>Segunda-feira: <strong>Encerrado</strong></li>
                <li>Terça a Sexta: <strong>09:00–19:00</strong></li>
                <li>Sábado: <strong>08:00–16:00</strong></li>
                <li>Domingo: <strong>Encerrado</strong></li>
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

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-16" style={{ background: PALETTE.softLilac }}>
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222] text-center">Quem veio, recomenda</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              ["“Saí leve. A drenagem da Neuza mudou minha semana.”", "Marina • Perdizes"],
              ["“Atendimento humano e técnico. Confio de olhos fechados.”", "Patrícia • Pompeia"],
              ["“A melhor massagem relaxante que já fiz.”", "Camila • Sumaré"],
            ].map(([quote, author]) => (
              <div key={author as string} className="rounded-2xl bg-white p-5 border border-[#efe9e2] shadow-sm">
                <p className="text-[#444] leading-relaxed">{quote}</p>
                <p className="text-sm text-[#666] mt-3">{author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222] text-center">Dúvidas frequentes</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {[
            ["Quanto tempo dura cada sessão?", "Em média 50–60 minutos."],
            ["Gestantes podem fazer?", "Sim, com protocolos específicos e segurança total."],
            ["Contraindicações?", "Estados febris, trombose ativa e pós-operatório sem liberação médica."],
            ["Formas de pagamento?", "Pix, cartão e dinheiro."],
          ].map(([q, a]) => (
            <div key={q as string} className="rounded-2xl border border-[#efe9e2] p-5 bg-white">
              <h3 className="font-semibold text-[#222]">{q}</h3>
              <p className="text-[#555] mt-2 text-sm">{a}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="py-20 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">Reserve seu momento de equilíbrio</h2>
        <p className="mt-3 text-[#555]">Agende sua sessão agora e sinta o poder do toque consciente.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={CONFIG.whatsapp}
            target="_blank" rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { from: "cta_final" })}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-white shadow-md hover:shadow-lg transition"
            style={{ background: PALETTE.moss }}
          >
            💬 Agendar pelo WhatsApp
          </a>
          <a
            href={CONFIG.instagram}
            target="_blank" rel="noopener noreferrer"
            onClick={() => track("instagram_click", { from: "cta_final" })}
            className="inline-flex items-center gap-2 rounded-2xl border border-[#dfd7cf] px-4 py-2 hover:bg-white"
          >
            <InstagramIcon className="h-4 w-4" /> Instagram
          </a>
        </div>
      </section>

      {/* CTA STICKY (mobile) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-[#eee]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <span className="text-sm text-[#444]">Pronta para se cuidar?</span>
          <a
            href={CONFIG.whatsapp}
            target="_blank" rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { from: "sticky_bar" })}
            className="px-4 py-2 rounded-2xl text-white text-sm"
            style={{ background: PALETTE.moss }}
          >
            Agendar
          </a>
        </div>
      </div>

      {/* Keyframes de animação */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </div>
  );
}
