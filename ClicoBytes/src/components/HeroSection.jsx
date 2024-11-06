import Background from "../assets/BackGroundBike.png"

export default function HeroSection() {
    return (
      <section id="inicio" className="relative h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: ' center'
          }}
    
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"  />
        
        <div className="container mx-auto px-4 max-w-[1140px] relative h-full">
          <div className="flex flex-col justify-center h-full max-w-lg text-white">
            <h2 className="text-4xl font-bold mb-4">
              Venha descobrir os motivos do porquê é vantajoso andar de bicicleta.
            </h2>
            <h3 className="text-3xl font-semibold mb-8">
              Seja sustentável!
            </h3>
          </div>
        </div>
      </section>
    )
}