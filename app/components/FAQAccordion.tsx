"use client";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WA = "https://wa.me/529983921530?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20tu%20servicio";
const faqs: [string, string][] = [
  ["¿Cómo funciona esto de tener un Travel Partner?", "Muy sencillo: me cuentas tu idea de viaje por WhatsApp (destino, fechas, presupuesto y lo que sueñas vivir). Yo te armo un itinerario personalizado, me encargo de las reservas y te acompaño antes, durante y después de tu viaje. Tú solo confirmas y disfrutas."],
  ["¿Esto es real? ¿Cómo sé que no me van a estafar?", "Trabajo de forma 100% personalizada y transparente: hablamos por WhatsApp desde el primer mensaje, te comparto cotizaciones detalladas antes de pedirte cualquier pago, y puedes ver las experiencias de viajeros que ya me confiaron su viaje. Sigo aquí durante todo tu viaje."],
  ["Nunca he viajado así, ¿me puedes ayudar aunque no sepa nada de organizar un viaje?", "Para eso estoy. No necesitas saber de viajes, solo necesitas contarme qué quieres vivir; yo me encargo de traducir eso en un plan claro, paso a paso."],
  ["¿Qué pasa si necesito cancelar o cambiar mi viaje?", "Los planes cambian, lo sé. Tengo políticas flexibles de cambios y cancelación, y te asesoro según las condiciones de cada aerolínea y hotel para que la afectación sea la menor posible."],
  ["¿Qué formas de pago aceptan?", "Transferencia bancaria, depósito, tarjeta de crédito/débito y efectivo. También manejo planes de pago en mensualidades sin intereses para que tu viaje sea más fácil de planear."],
  ["¿Solo armas viajes de playa o también otros destinos?", "Mi especialidad es Riviera Maya y destinos de playa. Pero si sueñas con otro lugar del mundo, también te acompaño a planearlo."],
  ["¿Qué pasa si surge un problema durante mi viaje?", "Mi trabajo no termina cuando abordas el avión. Estoy disponible por WhatsApp durante todo tu viaje para resolver cualquier imprevisto que surja."],
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return <section className="faqSection" id="faq">
    <p className="eyebrow">RESOLVEMOS TUS DUDAS</p><h2>Preguntas frecuentes</h2><div className="rule" />
    <div className="faqList">{faqs.map(([q,a],i) =>
      <div className={`faqItem${open === i ? " open" : ""}`} key={q}>
        <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`faq-a-${i}`}>
          <span>{q}</span><ChevronDown className="chev" aria-hidden="true" />
        </button>
        <div className="faqAnswer" id={`faq-a-${i}`} aria-hidden={open !== i}><p>{a}</p></div>
      </div>)}</div>
    <div className="faqCta"><p>¿Tienes otra duda? Pregúntame directo, yo te respondo.</p>
      <a className="wa" href={WA}><MessageCircle />Pregúntame por WhatsApp</a>
    </div>
  </section>;
}
