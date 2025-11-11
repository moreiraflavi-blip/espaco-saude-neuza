"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER - logo proporcional */}
      <header className="relative py-4 md:py-6 bg-white shadow-sm flex justify-center items-center">
        <img
          src="/images/logo-neuza-tight.webp"
          alt="Logo Neuza Fernandes - Espaço Saúde Perdizes"
          className="w-[160px] md:w-[220px] lg:w-[310px] h-auto block transition-all duration-300"
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
      <section id="sobre" className="py-16 bg-white">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">Sobre Neuza Fernandes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Com mais de <strong>40 anos de experiência em estética terapêutica</strong>,
              Neuza combina técnica, sensibilidade e propósito para transformar corpo e mente com
              segurança e acolhimento.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Especialista em <strong>Drenagem Linfática Método Vodder, Shiatsu, Reiki e Reflexologia</strong>,
              ela acredita que cada toque é uma forma de cuidar.
            </p>
            <a
              href="https://wa.me/55119939273471"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-6 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Agendar pelo WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/foto-neuza-preparando.webp"
              alt="Neuza Fernandes em atendimento"
              width={600}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </motion.div>
        </div>
      </section>

      {/* O ESPAÇO */}
      <section id="espaco" className="py-16 bg-[#f7f3ff]">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-10">O Espaço</h2>
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <Image
                src={foto.src}
                alt={foto.legenda}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="text-center text-sm py-3 text-gray-700">{foto.legenda}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 bg-white">
        <h2 className="text-center text-xl font-semibold text-gray-800 mb-10">Serviços</h2>
        <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
            { nome: "Drenagem Linfática", duracao: "60 min", preco: "R$ 180" },
            { nome: "Shiatsu Terapêutico", duracao: "60 min", preco: "R$ 170" },
            { nome: "Reflexologia Podal", duracao: "50 min", preco: "R$ 150" },
            { nome: "Massagem Relaxante", duracao: "60 min", preco: "R$ 170" },
            { nome: "Massagem Modeladora", duracao: "60 min", preco: "R$ 190" },
            { nome: "Drenagem Pós-Cirúrgica", duracao: "60 min", preco: "R$ 210" },
            { nome: "Ventosaterapia", duracao: "50 min", preco: "R$ 140" },
            { nome: "Bambuterapia", duracao: "60 min", preco: "R$ 180" },
            { nome: "Massagem Facial", duracao: "45 min", preco: "R$ 130" },
          ].map((servico, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition bg-[#fafafa]"
            >
              <h3 className="font-medium text-gray-800">{servico.nome}</h3>
              <p className="text-sm text-gray-600 mt-1">{servico.duracao}</p>
              <p className="text-green-700 font-semibold mt-2">{servico.preco}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-100">
        © {new Date().getFullYear()} Espaço Saúde Neuza Fernandes · Todos os direitos reservados.
      </footer>
    </main>
  );
}
