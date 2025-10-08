import { useEffect } from "react"

export default function Nosotros() {
  useEffect(() => {
    document.title = "Luna & Granos | Nosotros";
  }, [])

  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src="/CafeteriaLuna&GranosCafe.png"
            alt="Imagen establecimiento"
            className="img-fluid mb-3"
          />
        </div>
        <div className="col-md-8">
          <h1>Nosotros</h1>
          <p>
            En luna & granos Café creemos que cada taza de café es una oportunidad para conectar, disfrutar y compartir momentos únicos. Nacimos con la idea de crear un espacio donde el aroma del café recién molido se combine con un ambiente acogedor, ideal para relajarse, trabajar o simplemente disfrutar de una buena conversación.


            Seleccionamos nuestros granos de café de manera responsable, priorizando pequeños productores locales y tostadores artesanales. Cada bebida es preparada con dedicación y atención al detalle, porque sabemos que el sabor está en los pequeños gestos.


            Pero en Luna & Granos Café  es más que café: también ofrecemos una selección de pastelería casera y propuestas dulces  siempre frescas y hechas con amor.


            Nuestro equipo está formado por personas que aman lo que hacen y que buscan, cada día, hacer de tu visita una experiencia especial. Porque para nosotros, lo más importante no es solo lo que servimos, sino cómo te hacemos sentir.
          </p>
        </div>
      </div>
    </div>
  )
}
