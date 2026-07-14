import type { Metadata } from "next"; import "./globals.css"; import "./personalization.css";
export const metadata:Metadata={title:"Travel Partner | Tu viaje, mi prioridad",description:"Viajes personalizados sin estrés. Planeo cada detalle para que tú solo disfrutes."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
