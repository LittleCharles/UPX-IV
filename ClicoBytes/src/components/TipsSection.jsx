import dica1 from "../assets/dica1.png"
import dica2 from "../assets/dica2.png"
import dica3 from "../assets/dica3.png"

export default function TipsSection() {
  const tips = [
    {
      image: dica1,
      title: "Escolha a bicicleta adequada",
      description: "Não é necessário investir caro, em uma bicicleta de última geração. O que realmente importa é a manutenção em dia e vai depender muito do tipo de ciclismo que você pretende praticar."
    },
    {
      image: dica2,
      title: "Use roupas e equipamentos adequados",
      description: "O uso de equipamentos no ciclismo é fundamental para garantir segurança e conforto, ajudam a evitar lesões e melhorar o desempenho."
    },
    {
      image: dica3,
      title: "Preste atenção na via e no trânsito",
      description: "Atenção no trânsito é essencial para ciclistas. Estar atento às regras e sinais e evitar distrações ajuda a previnir acidentes e garantir mais segurança."
    }
  ]

  return (
    <section id="dicas" className="bg-secondary py-20">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-center text-white text-4xl font-bold mb-16">
          DICAS PARA INICIANTES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="mb-6">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="object-cover rounded-xl shadow-lg w-full" 
                />
              </div>
              
              <h3 className="text-white font-bold text-xl mb-4 text-center">
                {tip.title}
              </h3>
              
              <p className="text-white/90 leading-relaxed text-center">
                {tip.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold
                          hover:bg-white/90 transition-all duration-300 shadow-lg">
            MOSTRAR MAIS
          </button>
        </div>
      </div>
    </section>
  )
}