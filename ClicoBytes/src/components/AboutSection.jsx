import LogoCiclista from '../assets/CiclistaImage.png'

export default function AboutSection() {
  return (
    <section id="sobre-nos" className="bg-white py-24">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-center text-primary text-4xl font-bold mb-16">
          SOBRE NÓS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto à esquerda */}
          <div className="flex flex-col gap-8">
            <p className="text-primary text-lg leading-relaxed">
              O projeto Ciclista Consciente tem como objetivo incentivar o uso 
              de bicicletas como meio de transporte sustentável nas cidades, 
              oferecendo uma plataforma que disponibilize informações práticas 
              e relevantes para ciclistas e potenciais usuários de bicicletas.
            </p>

            <p className="text-primary text-lg leading-relaxed hover:text-secondary transition-colors duration-300">
              O projeto é fundamental diante do aumento da urbanização e dos 
              problemas relacionados, como poluição, congestionamentos e acidentes 
              de trânsito. Ele promove a mobilidade sustentável, oferecendo uma 
              alternativa ao uso excessivo de automóveis e contribuindo para a 
              redução das mudanças climáticas.
            </p>
          </div>

     
          <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
            <img
              src={LogoCiclista}
              alt="Logo Ciclista Consciente"
              className="w-80 drop-shadow-xl"
            />
          </div>
        </div>

      
        <div className="mt-16 flex justify-center">
          <div className="h-1 w-[60%] bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>
      </div>
    </section>
  )
}