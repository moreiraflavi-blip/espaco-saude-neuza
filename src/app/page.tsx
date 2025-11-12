"use client";
<div className="mt-4">
<a href={WHATSAPP} target="_blank" className="inline-block rounded-xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold hover:bg-brand-700 transition">Agendar</a>
</div>
</motion.div>
))}
</div>
</div>
</section>


{/* Localização / Contato / Horário */}
<section id="contato" className="bg-slate-50 py-14">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-semibold text-slate-900">Onde estamos</motion.h2>
<p className="mt-2 text-slate-600">R. Cotoxó, 611 — Perdizes, São Paulo</p>


<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 overflow-hidden rounded-3xl shadow-sm">
<iframe title="Mapa Espaço Saúde Neuza Fernandes" src="https://www.google.com/maps?q=R.+Cotox%C3%B3,+611+-+Perdizes,+S%C3%A3o+Paulo&output=embed" className="h-[380px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
</div>


<div className="space-y-6">
<div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
<h3 className="font-semibold text-slate-900">Horários</h3>
<ul className="mt-3 text-sm text-slate-700 space-y-1">
<li><strong>Segunda:</strong> Fechado</li>
<li><strong>Terça a Sexta:</strong> 09:00–19:00</li>
<li><strong>Sábado:</strong> 08:00–16:00</li>
<li><strong>Domingo:</strong> Fechado</li>
</ul>
</div>


<div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
<h3 className="font-semibold text-slate-900">Como chegar</h3>
<p className="mt-2 text-sm text-slate-700">Estamos a poucos minutos do Allianz Parque e da Av. Sumaré. Há opções de estacionamento pago nas proximidades.</p>
</div>


<div className="rounded-3xl bg-white p-5 shadow-sm border border-slate-200">
<h3 className="font-semibold text-slate-900">Contato rápido</h3>
<a href={WHATSAPP} target="_blank" className="mt-3 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-2 text-white text-sm font-semibold hover:bg-brand-700 transition">WhatsApp para agendar</a>
</div>
</div>
</div>
</div>
</section>


{/* Rodapé */}
<footer className="py-10">
<div className="mx-auto max-w-6xl px-4 sm:px-6 text-center text-sm text-slate-600">© {year} Espaço Saúde Neuza Fernandes · Todos os direitos reservados.</div>
</footer>
</main>
);
}