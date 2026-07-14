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
 ["Gracias a Travel Partner tuvimos el mejor viaje en familia. Todo fue perfecto, sin estrés y con recomendaciones increíbles.","Mariana G.","https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"],
 ["Nuestro viaje de luna de miel fue un sueño. Cada detalle pensado para nosotros. ¡Superó todas nuestras expectativas!","Carlos & Andrea","https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80"],
 ["Me ahorró horas de investigación y dinero. Siempre estuvo disponible y nos acompañó durante todo el viaje.","Jorge R.","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"]
];
export default function Home(){return <main>
  <header className="hero" id="inicio"><nav><a className="brand" href="#inicio">TRAVEL<br/>PARTNER<span>PAULINA SALAZAR</span></a><div className="links"><a href="#inicio">Inicio</a><a href="#sobre-mi">Sobre mí</a><a href="#proceso">Servicios</a><a href="#destinos">Destinos</a><a href="#testimonios">Testimonios</a><a href="#faq">FAQ</a></div><a className="wa small" href={WA}><MessageCircle/>Hablemos por WhatsApp</a><Menu className="menu"/></nav>
  <div className="heroCopy"><p className="eyebrow light">TU TRAVEL PARTNER · LA COMPAÑERA DE VIAJE QUE PLANEA TODO POR TI</p><h1>Yo me encargo<br/>de todo, tú solo<br/>disfrutas.</h1><p>Soy Paulina Salazar, tu Travel Partner: la compañera de viaje que te<br/>acompaña desde el primer mensaje hasta que regresas a casa. Especialista<br/>en Riviera Maya y Cancún — y si sueñas con otro destino, también te ayudo<br/>a planearlo, sin que tengas que preocuparte por caer en una estafa o perder tu dinero.</p><a className="wa" href={WA}><MessageCircle/>Cuéntame tu viaje</a></div></header>
  <section className="benefits">{benefits.map(([Icon,t,d])=><article key={t}><Icon/><h3>{t}</h3><p>{d}</p></article>)}</section>
  <section className="pain" id="sobre-mi"><p className="eyebrow">¿TE SUENA FAMILIAR?</p><h2>Planear un viaje puede ser abrumador</h2><div className="rule"/><div className="painGrid">{pains.map(([Icon,t])=><article key={t}><Icon/><p>{t}</p></article>)}</div><h3>No es solo un viaje, es tu tranquilidad.</h3><p>Permíteme ser tu Travel Partner y convirtamos tu viaje en la mejor experiencia.</p></section>
  <section className="process" id="proceso"><p className="eyebrow">ASÍ TRABAJO CONTIGO</p><h2>Tu viaje en 4 simples pasos</h2><div className="rule"/><div className="stepGrid">{steps.map(([Icon,t,d])=><article key={t}><div className="iconBubble"><Icon/></div><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="destinations" id="destinos"><p className="eyebrow">MI ESPECIALIDAD</p><h2>Riviera Maya y destinos de playa — y a donde tú sueñes</h2><div className="placeGrid">{places.map(([t,d,img])=><article key={t}><img src={img} alt={t}/><h3>{t}</h3><p>{d}</p></article>)}</div></section>
  <section className="testimonials" id="testimonios"><p className="eyebrow">LO QUE DICEN MIS VIAJEROS</p><h2>Historias reales, experiencias inolvidables</h2><div className="reviewGrid">{reviews.map(([q,n,img])=><article key={n}><div className="quote">“</div><p>“{q}”</p><div className="stars">★★★★★</div><strong>— {n}</strong><img src={img} alt={`Cliente ${n}`}/></article>)}</div></section>
  <FAQAccordion/>
  <footer><div><p className="eyebrow light">TU PRÓXIMA HISTORIA COMIENZA AQUÍ</p><h2>Cuéntame tu viaje<br/>y hagámoslo realidad.</h2><p>Estoy lista para ayudarte a vivir tu mejor experiencia.</p></div><div><a className="wa" href={WA}><MessageCircle/>Escríbeme por WhatsApp</a><small>Respuesta rápida y atención personalizada</small><p>hola@travelpartner.com · +52 998 392 1530</p></div></footer>
  <a className="floating" href={WA} aria-label="Abrir WhatsApp"><MessageCircle/></a>
 </main>}
