import { Play, X } from 'lucide-react'
import { useState } from 'react'

export default function PollutionSection() {
  const [showModal, setShowModal] = useState(false)
  const videoId = 'bTIm6uw1a34'
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  const handleVideoClick = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <section className="bg-neutral py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-center text-primary text-3xl font-bold mb-12">
          POR QUE CARROS SÃO EXTREMAMENTE POLUENTES?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative group cursor-pointer" onClick={handleVideoClick}>
            {/* Thumbnail com overlay */}
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_15px_0_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_25px_0_rgba(0,0,0,0.3)] transition-shadow duration-300">
              <img
                src={thumbnailUrl}
                alt="Vídeo sobre poluição dos carros"
                className="w-full rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay escuro com fade */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              
              {/* Botão de play */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              
            
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-secondary">
              Carros são responsáveis por 90% da poluição do ar em São Paulo
            </h3>

            <p className="text-gray-700">
              Quando circulam pelas ruas da cidade, os automóveis emitem poluentes e partículas finas, 
              que ficam suspensas na atmosfera. Especialistas dizem que respirar o ar da capital paulista 
              equivale a fumar dois cigarros por dia.
            </p>

            <p className="text-gray-700">
              O principal motivo da poluição do ar de São Paulo é o trânsito, e respirar esse ar todos 
              os dias pode provocar problemas sérios de saúde.
            </p>
          </div>
        </div>
      </div>

      {/* Modal do Vídeo */}
      {showModal && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          {/* Overlay escuro */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
            onClick={closeModal}
          />
          
  
          <div className="relative w-full max-w-5xl mx-auto">
    
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            

            <div className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}