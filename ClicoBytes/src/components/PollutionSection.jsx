import pollutionImage from "../assets/image 2.png"

export default function PollutionSection() {
    return (
      <section className="bg-neutral py-16">
        <div className="container mx-auto px-4 max-w-[1140px]">
          <h2 className="text-center text-primary text-3xl font-bold mb-12">
            POR QUE CARROS SÃO EXTREMAMENTE POLUENTES?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Imagem à esquerda */}
            <div className="relative">
              <img
                src={pollutionImage}
                alt="Congestionamento em São Paulo"
                className="w-full rounded-lg shadow-lg"
              />
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
      </section>
    )
}