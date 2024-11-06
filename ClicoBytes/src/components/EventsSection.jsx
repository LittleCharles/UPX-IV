import { Link } from 'react-router-dom'
import evento1 from "../assets/Evento1.png"
import evento2 from "../assets/Evento2.png"
import evento3 from "../assets/Evento3.png"
import { Calendar, MapPin } from "lucide-react"

export default function EventsSection() {
    const events = [
      {
        id: 1,
        image: evento1,
        title: "PASSEIO CICLÍSTICO SANTA BIKE",
        date: "14/11/2024 08:00",
        location: "Santa Bárbara d'Oeste, SP",
      },
      {
        id: 2,
        image: evento2,
        title: "PASSEIO CICLÍSTICO HJ TEM PEDAL",
        date: "19/03/2025 08:00",
        location: "Gramado, RS",
      },
      {
        id: 3,
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
            {events.map((event) => (
              <Link
                to={`/evento/${event.id}`}
                key={event.id}
                className="group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full rounded-lg mb-4"
                  />
                  <h3 className="text-[#00A3E0] font-semibold mb-2 group-hover:text-[#0081b3] transition-colors">
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
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link
              to="/eventos"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold
                        hover:bg-opacity-90 transition-colors duration-300"
            >
              MOSTRAR MAIS
            </Link>
          </div>
        </div>
      </section>
    )
}