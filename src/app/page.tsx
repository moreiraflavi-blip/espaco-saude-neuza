"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, MapPin } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER compacto */}
      <header className="relative py-4 md:py-5 bg-white border-b border-gray-100 flex justify-center items-center">
        <img
          src="/images/logo-neuza-tight.webp"
          alt="Logo Neuza Fernandes - Espaço Saúde Perdizes"
          className="w-[170px] md:w-[230px] lg:w-[260px] h-auto block transition-all"
        />
        <a
          href="https://www.instagram.com/espacosaudeneuza/"
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
      <section id="sobre" className="pt-10 md:pt-12 pb-14 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-semibold mb-4">Sobre Neuza Fernandes</h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              Com mais de <strong>40 anos de experiência em estética terapêutica</strong>, Neuza
              combina técnica, sensibilidade e propósito para transformar corpo e mente com
              segurança e acolhimento.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Especialista em <strong>Drenagem Linfática Método Vodder, Shiatsu, Reiki e Reflexologia</strong>,
              ela acredita que cada toque é uma forma de cuidar.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href="https://wa.me/55119939273471"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="https://google.com/maps/place/Espaço+Saúde+Neuza+Fernandes+%7C+Perdizes/data=!4m2!3m1!1s0x0:0x30f3cd4266258a45?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
              >
                <MapPin className="h-4 w-4" /> Ver no Google Maps
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/foto-neuza-preparando.webp"
              alt="Neuza Fernandes em atendimento"
              width={640}
              height={480}
              className="rounded-2xl shadow-md w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* O ESPAÇO */}
      <section id="espaco" className="py-14 bg-[#f7f3ff]">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">O Espaço</h2>

        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {[
            { src: "/images/espaco1.webp", legenda: "Preparo do atendimento" },
            { src: "/images/espaco2.webp", legenda: "Sala de atendimento 1" },
            { src: "/images/espaco3.webp", legenda: "Sala de atendimento 2" },
            { src: "/images/espaco4.webp", legenda: "Sala de atendimento 3" },
            { src: "/images/espaco5.webp", legenda: "Detalhes do ambiente" },
            { src: "/images/espaco6.webp", legenda: "Nosso produto" },
            { src: "/images/espaco7.webp", legenda: "Localização" },
            { src: "/images/foto-neuza-arrumando.webp", legenda: "Recepção aconchegante" },
          ].map((foto, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={foto.src}
                  alt={foto.legenda}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="text-center text-sm py-3 text-gray-700">{foto.legenda}</div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SERVIÇOS (todos R$ 120,00) */}
      <section id="servicos" className="py-14 bg-white">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-8">Serviços</h2>

        <div className="mx-auto max-w-6xl grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { nome: "Drenagem Linfática", duracao: "60 min", preco: "R$ 120,00" },
            { nome: "Shiatsu Terapêutico", duracao: "60 min", preco: "R$ 120,00" },
            { nome: "Reflexologia Podal", duracao: "50 min", preco: "R$ 120,00" },
            { nome: "Massagem Relaxante", duracao: "60 min", preco: "R$ 120,00" },
            { nome: "Massagem Modeladora", duracao: "60 min", preco: "R$ 120,00" },
            { nome: "Drenagem Pós-Cirúrgica", duracao: "60 min", preco: "R$ 120,00" },
            { nome: "Ventosaterapia", duracao: "50 min", preco: "R$ 120,00" },
            { nome: "Bambuterapia", duracao: "60 min", preco: "R$ 120,00" },
            { nome: "Massagem Facial", duracao: "45 min", preco: "R$ 120,00" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="h-full rounded-xl border border-gray-200 bg-[#fafafa] p-5 shadow-[0_1px_0_#eee] hover:shadow-lg hover:bg-white transition"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">{s.nome}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.duracao}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-green-700 font-semibold">{s.preco}</span>
                  <a
                    href="https://wa.me/55119939273471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1.5 rounded-md border border-gray-300 hover:bg-gray-50"
                  >
                    Agendar
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* VISITE-NOS + HORÁRIOS (Fechado) */}
      <section id="visite" className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Visite-nos</h2>
          <p className="mt-2 text-gray-700">
            R. Cotoxó, 611 — 1º andar (Cj 17) — Perdizes / SP<br />
            <span className="text-green-700">Estacionamento pago no prédio</span>
          </p>

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
            />
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
            <div className="rounded-2xl p-5 bg-[#F7F3EE] border border-[#efe9e2]">
              <h3 className="font-semibold text-[#222]">Como chegar</h3>
              <p className="mt-3 text-sm text-[#555]">
                A poucos minutos da Av. Sumaré. Acesso fácil por transporte público e carro.
                Estacionamento <strong>pago</strong> no prédio (sujeito à disponibilidade).
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-[#F7F3EE] border border-[#efe9e2]">
              <h3 className="font-semibold text-[#222]">Contato rápido</h3>
              <p className="mt-3 text-sm text-[#555]">WhatsApp: <strong>(11) 93927-3471</strong></p>
              <a
                href="https://wa.me/55119939273471"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Espaço Saúde Neuza Fernandes · Todos os direitos reservados.
      </footer>
    </main>
  );
}
