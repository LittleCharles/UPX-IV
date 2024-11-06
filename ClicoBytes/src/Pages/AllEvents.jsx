import { Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'
import evento1 from "../assets/Evento1.png"
import evento2 from "../assets/Evento2.png"
import evento3 from "../assets/Evento3.png"

const events = [
  {
    id: 1,
    image: evento1,
    title: "PASSEIO CICLÍSTICO SANTA BIKE",
    date: "14/11/2024 08:00",
    location: "Santa Bárbara d'Oeste, SP",
    description: "Junte-se a nós para um passeio ciclístico emocionante pelas ruas de Santa Bárbara d'Oeste! Este evento é ideal para ciclistas de todos os níveis.",
    details: {
      distance: "20km",
      difficulty: "Moderada",
      meetingPoint: "Praça Central",
      requirements: "Bicicleta em bom estado, capacete",
      contact: "(19) 99999-9999"
    }
  },
  {
    id: 2,
    image: evento2,
    title: "PASSEIO CICLÍSTICO HJ TEM PEDAL",
    date: "19/03/2025 08:00",
    location: "Gramado, RS",
    description: "Desfrute das belas paisagens de Gramado neste passeio ciclístico especial. Percorra as ruas charmosas da cidade com outros entusiastas do ciclismo.",
    details: {
      distance: "15km",
      difficulty: "Fácil",
      meetingPoint: "Rua Coberta",
      requirements: "Bicicleta, capacete, luzes",
      contact: "(54) 98888-8888"
    }
  },
  {
    id: 3,
    image: evento3,
    title: "PEDAL TRÂNSITO SEGURO",
    date: "15/08/2025 08:00",
    location: "Magé, RJ",
    description: "Um evento especial focado na conscientização sobre segurança no trânsito. Pedale conosco e apoie esta causa importante!",
    details: {
      distance: "25km",
      difficulty: "Moderada",
      meetingPoint: "Praça Municipal",
      requirements: "Bicicleta, capacete, colete reflexivo",
      contact: "(21) 97777-7777"
    }
  }
]

export default function AllEvents() {
  return (
    <div className="bg-neutral min-h-[70vh] py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h1 className="text-center text-[#00A3E0] text-4xl font-bold mb-12">
          TODOS OS EVENTOS
        </h1>
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
      </div>
    </div>
  )
}