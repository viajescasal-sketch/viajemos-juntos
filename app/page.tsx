import type { Metadata } from "next";
import { Clock3, ShieldCheck, UserRound, Gem, Headphones, MessageCircle, MapPinned, Luggage, Palmtree, Search, BadgeAlert, WalletCards, CircleHelp, Menu, Timer } from "lucide-react";
import FAQAccordion from "./components/FAQAccordion";

export const metadata: Metadata = { title: "Paulina Salazar | Tu Travel Partner en México", description: "Soy Paulina, tu Travel Partner y compañera de viaje. Te acompaño a planear tu viaje a Riviera Maya, Cancún y más, sin estrés ni miedo a equivocarte." };
const WA="https://wa.me/529983921530?text=Hola%2C%20quiero%20planear%20un%20viaje%20personalizado";
const benefits=[
  [Clock3,"Ahorra tiempo","No pierdas horas buscando, yo lo hago por ti."], [ShieldCheck,"Viaja seguro","Te acompaño antes, durante y después de tu viaje."], [UserRound,"100% personalizado","Cada viaje se diseña según tu estilo y presupuesto."], [Timer,"Respondo en menos de 15 minutos","Porque tu tranquilidad no espera."], [Gem,"Experiencias únicas","Acceso a lugares, hoteles y experiencias que marcan."], [Headphones,"Atención cercana","Estoy contigo en cada paso del camino."]
] as const;
const pains=[[CircleHelp,"Demasiadas opciones y no sabes cuál elegir."],[Search,"Pierdes horas buscando y comparando."],[BadgeAlert,"Miedo a estafas, malas experiencias o perder dinero."],[WalletCards,"Terminas gastando más por decisiones incorrectas."],[Clock3,"No tienes tiempo ni energía para organizarlo todo tú mismo."]] as const;
const steps=[[MessageCircle,"1. Hablamos","Me cuentas tu idea de viaje, presupuesto y lo que sueñas vivir."],[MapPinned,"2. Diseño tu viaje","Creo un itinerario 100% personalizado con las mejores opciones."],[Luggage,"3. Reservo y organizo","Me encargo de todo: reservas, coordinación y detalles."],[Palmtree,"4. Disfrutas","Tú solo disfrutas, yo estoy contigo en cada paso."]] as const;
const places=[
 ["Riviera Maya","Playas turquesa, lujo y experiencias únicas.","https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"],
 ["Grecia","Pueblos mágicos, paisajes que te roban el aliento.","https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80"],
 ["Bali","Cultura, naturaleza y bienestar en perfecta armonía.","https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"],
 ["Europa","Historia, arte y los destinos más icónicos.","https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"],
 ["NYC","Energía, compras y experiencias que nunca duermen.","https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=800&q=80"]
];
const reviews=[
 ["Quiero agradecer profundamente a Paulina por toda su ayuda y dedicación durante nuestro viaje. Desde el primer momento estuvo pendiente de cada detalle. Fue una persona muy especial para mis hijos, siempre amable, paciente y dispuesta a ayudarnos.","Anayely Bello — viaje de menores desde Estados Unidos","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"],
 ["¡Altamente recomendados! He viajado con ellos en repetidas ocasiones y mis viajes han sido muy significativos y una grata experiencia. Destaco el excelente servicio y la atención al detalle, desde la planeación hasta el acompañamiento en el viaje y al regreso.","Luz Niño — viajera frecuente","https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&q=80"],
 ["Excelente servicio y atención. Me ayudaron a organizar mi viaje a Chile con gran profesionalismo; cuidaron cada detalle con mucha precisión. Sin duda, una experiencia totalmente recomendable.","Carolina José — viaje a Chile","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80"],
 ["Excelente servicio, muy buena atención al cliente, profesionalismo, altamente recomendable.","Juan Manuel Alvarado Moctezuma","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"],
 ["La atención que tienen con el cliente es fantástica, buscan que tu experiencia sea acogedora, no debes preocuparte de nada, todo lo tienen resuelto para que solo te dediques a disfrutar las vacaciones. Ampliamente recomendable.","Bj Ramírez — viajero frecuente","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"]
];
function FacebookIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3v2H7.3v3h2.8v8h3.4Z"/></svg>;}
function TikTokIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15 3c.4 2.2 1.7 3.6 4 4v3c-1.5 0-2.8-.4-4-1.2v6.1a5.1 5.1 0 1 1-4.4-5V13a2.1 2.1 0 1 0 1.4 2V3h3Z"/></svg>;}
function InstagramIcon(){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>;}
function YoutubeIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-2.1-.2-3.8-.5-4.7a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.6.4a2.7 2.7 0 0 0-1.9 1.9C2.2 8.2 2 9.9 2 12s.2 3.8.5 4.7a2.7 2.7 0 0 0 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.6-.4a2.7 2.7 0 0 0 1.9-1.9c.3-.9.5-2.6.5-4.7Zm-12 3.5v-7l6 3.5-6 3.5Z"/></svg>;}
const socials=[
  [FacebookIcon,"Facebook","https://www.facebook.com/share/1GjFtGYqvk/"],
  [TikTokIcon,"TikTok","https://www.tiktok.com/@viajes_bumeran_casal?_r=1&_t=ZS-97tnwvvVyF8"],
  [InstagramIcon,"Instagram","https://www.instagram.com/viaja.pau?igsh=bWZzeGphM2JveHV0&utm_source=qr"],
  [YoutubeIcon,"YouTube","https://youtube.com/@inspirateaviajar?si=x4N2enDjoUBr3QF_"]
] as const;
export default function Home(){return <main>
  <header className="hero" id="inicio"><nav><a className="brand" href="#inicio">TRAVEL<br/>PARTNER<span>PAULINA SALAZAR</span></a><div className="links"><a href="#inicio">Inicio</a><a href="#sobre-mi">Sobre mí</a><a href="#proceso">Servicios</a><a href="#destinos">Destinos</a><a href="#testimonios">Testimonios</a><a href="#faq">FAQ</a></div><a className="wa small" href={WA}><MessageCircle/>Hablemos por WhatsApp</a><Menu className="menu"/></nav>
  <div className="heroCopy"><p className="eyebrow light">TU TRAVEL PARTNER · LA COMPAÑERA DE VIAJE QUE PLANEA TODO POR TI</p><h1>Yo me encargo<br/>de todo, tú solo<br/>disfrutas.</h1><p>Soy Paulina Salazar, tu Travel Partner: la compañera de viaje que te<br/>acompaña desde el primer mensaje hasta que regresas a casa. Especialista<br/>en Riviera Maya y Cancún — y si sueñas con otro destino, también te ayudo<br/>a planearlo, sin que tengas que preocuparte por caer en una estafa o perder tu dinero.</p><a className="wa" href={WA}><MessageCircle/>Cuéntame tu viaje</a></div></header>
  <section className="benefits">{benefits.map(([Icon,t,d])=><article key={t}><Icon/><h3>{t}</h3><p>{d}</p></article>)}</section>
  <section className="pain" id="sobre-mi"><p className="eyebrow">¿TE SUENA FAMILIAR?</p><h2>Planear un viaje puede ser abrumador</h2><div className="rule"/><div className="painGrid">{pains.map(([Icon,t])=><article key={t}><Icon/><p>{t}</p></article>)}</div><h3>No es solo un viaje, es tu tranquilidad.</h3><p>Permíteme ser tu Travel Partner y convirtamos tu viaje en la mejor experiencia.</p></section>
  <section className="process" id="proceso"><p className="eyebrow">ASÍ TRABAJO CONTIGO</p><h2>Tu viaje en 4 simples pasos</h2><div className="rule"/><div className="stepGrid">{steps.map(([Icon,t,d])=><article key={t}><div className="iconBubble"><Icon/></div><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="destinations" id="destinos"><p className="eyebrow">MI ESPECIALIDAD</p><h2>Riviera Maya y destinos de playa — y a donde tú sueñes</h2><div className="placeGrid">{places.map(([t,d,img])=><article key={t}><img src={img} alt={t}/><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="testimonials" id="testimonios"><p className="eyebrow">LO QUE DICEN MIS VIAJEROS</p><h2>Historias reales, experiencias inolvidables</h2><div className="reviewGrid">{reviews.map(([q,n,img])=><article key={n}><div className="quote">“</div><p>“{q}”</p><div className="stars">★★★★★</div><strong>— {n}</strong><img src={img} alt={`Cliente ${n}`}/></article>)}</div></section>
  <FAQAccordion/>
  <footer><div><p className="eyebrow light">TU PRÓXIMA HISTORIA COMIENZA AQUÍ</p><h2>Cuéntame tu viaje<br/>y hagámoslo realidad.</h2><p>Estoy lista para ayudarte a vivir tu mejor experiencia.</p></div><div><a className="wa" href={WA}><MessageCircle/>Escríbeme por WhatsApp</a><small>Respuesta rápida y atención personalizada</small><p>psalazar@viajesbumeran.com · +52 998 392 1530</p><div className="social" aria-label="Redes sociales">{socials.map(([Icon,label,href])=><a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon/></a>)}</div></div></footer>
  <a className="floating" href={WA} aria-label="Abrir WhatsApp"><MessageCircle/></a>
 </main>}
