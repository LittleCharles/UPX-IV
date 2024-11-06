import { useParams, Link } from 'react-router-dom'
import { Calendar, MapPin, Info, ArrowLeft, User, Flag, X } from 'lucide-react'
import { useState } from 'react'

export default function EventDetails() {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  
  const events = [
    {
      id: 1,
      title: "PASSEIO CICLÍSTICO SANTA BIKE",
      date: "14/11/2024 08:00",
      location: "Santa Bárbara d'Oeste, SP",
      description: "Junte-se a nós para um passeio ciclístico emocionante pelas ruas de Santa Bárbara d'Oeste! Este evento é ideal para ciclistas de todos os níveis e oferece uma excelente oportunidade para praticar exercícios e conhecer outros entusiastas do ciclismo. O trajeto inclui paradas estratégicas e suporte completo aos participantes.",
      details: {
        distance: "20km",
        difficulty: "Moderada",
        meetingPoint: "Café da Manhã - Beach Tenis",
        requirements: "Bicicleta em bom estado e capacete",
        maxParticipants: 100
      }
    },
    {
      id: 2,
      title: "PASSEIO CICLÍSTICO HJ TEM PEDAL",
      date: "19/03/2025 09:00",
      location: "Gramado, RS",
      description: "Desfrute das belas paisagens de Gramado neste passeio ciclístico especial. Organizado em conjunto com a IX Feira de Gramado, o evento proporciona uma experiência única combinando ciclismo e turismo. Ideal para quem quer conhecer a cidade de uma perspectiva diferente.",
      details: {
        distance: "15km",
        difficulty: "Fácil",
        meetingPoint: "Ginásio Municipal P. Herbert Oreggweiler - R. Otto Hermann - Centro",
        requirements: "Bicicleta, capacete e luzes",
        maxParticipants: 80,
        contact: "(54) 99514-5559 com Daniel"
      }
    },
    {
      id: 3,
      title: "PEDAL TRÂNSITO SEGURO",
      date: "19/09/2025 08:00",
      location: "Magé, RJ",
      description: "Um evento especial focado na conscientização sobre segurança no trânsito. O passeio inclui ações educativas, palestras sobre segurança viária e arrecadação de alimentos não-perecíveis. Uma oportunidade de contribuir com a comunidade enquanto pratica ciclismo.",
      details: {
        distance: "25km",
        difficulty: "Moderada",
        meetingPoint: "Rua Papa Pio XII, 385 - Magé (Próximo à subida do Morro do Bonfim)",
        requirements: "Bicicleta, capacete e colete reflexivo",
        maxParticipants: 150,
        extras: "Arrecadação de alimentos não perecíveis, palestras"
      }
    }
  ]

  const event = events.find(e => e.id === parseInt(id))

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p>Evento não encontrado</p>
        <Link to="/" className="text-[#00A3E0] hover:underline">Voltar para home</Link>
      </div>
    )
  }

  const handleSubscribe = () => {
    setShowModal(true)
    setTimeout(() => setShowModal(false), 4000)
  }

  return (
    <div className="bg-neutral py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <Link 
          to="/eventos" 
          className="inline-flex items-center text-[#00A3E0] mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para eventos
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cabeçalho novo */}
          <div className="bg-[#00A3E0] p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Vagas: {event.details.maxParticipants}</span>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <Flag className="w-5 h-5 text-[#00A3E0] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00A3E0]">Ponto de Encontro</h3>
                    <p className="text-gray-700">{event.details.meetingPoint}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-[#00A3E0] mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#00A3E0]">Distância</h3>
                    <p className="text-gray-700">{event.details.distance}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-[#00A3E0] mb-4">
                  Detalhes do Evento
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-medium">Dificuldade:</span> {event.details.difficulty}</p>
                  <p><span className="font-medium">Requisitos:</span> {event.details.requirements}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h2 className="text-xl font-semibold text-[#00A3E0] mb-4">
                Sobre o Evento
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button 
                onClick={handleSubscribe}
                className="bg-[#00A3E0] text-white px-8 py-3 rounded-full font-semibold 
                         hover:bg-opacity-90 transition-colors duration-300"
              >
                INSCREVER-SE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Sucesso */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inscrição Confirmada!
              </h3>
              <p className="text-gray-600">
                Sua inscrição no evento {event.title} foi realizada com sucesso.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}