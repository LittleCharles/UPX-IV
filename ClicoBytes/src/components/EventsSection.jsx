import evento1 from "../assets/Evento1.png"
import evento2 from "../assets/Evento2.png"
import evento3 from "../assets/Evento3.png"
import { Calendar, MapPin } from "lucide-react"

export default function EventsSection() {
    const events = [
      {
        image: evento1,
        title: "PASSEIO CICLÍSTICO SANTA BIKE",
        date: "14/11/2024 08:00",
        location: "Santa Bárbara d'Oeste, SP",
      },
      {
        image: evento2,
        title: "PASSEIO CICLÍSTICO HJ TEM PEDAL",
        date: "19/03/2025 08:00",
        location: "Gramado, RS",
      },
      {
        image: evento3,
        title: "PEDAL TRÂNSITO SEGURO",
        date: "15/08/2025 08:00",
        location: "Magé, RJ",
      }
    ]

    return (
      <section id="eventos" className="bg-neutral py-16">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-center text-[#00A3E0] text-3xl font-bold mb-12">
            PRÓXIMOS EVENTOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full rounded-lg mb-4"
                />

                <h3 className="text-[#00A3E0] font-semibold mb-2">
                  {event.title}
                </h3>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#00A3E0]" />
                    <span className="text-gray-600 text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#4d5f66]" />
                    <span className="text-gray-600 text-sm">{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold
                            hover:bg-opacity-90 transition-colors duration-300">
              MOSTRAR MAIS
            </button>
          </div>
        </div>
      </section>
    )
}