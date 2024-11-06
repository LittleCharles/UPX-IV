import { Link } from 'react-router-dom'
import dica1 from "../assets/dica1.png"
import dica2 from "../assets/dica2.png"
import dica3 from "../assets/dica3.png"

export default function AllTips() {
  const tips = [
    {
      id: 1,
      image: dica1,
      title: "Escolha a bicicleta adequada",
      description: "Não é necessário investir caro, em uma bicicleta de última geração. O que realmente importa é a manutenção em dia e vai depender muito do tipo de ciclismo que você pretende praticar.",
      fullDescription: [
        "Antes de comprar uma bicicleta, considere o tipo de uso que você pretende fazer.",
        "Para uso urbano, uma bike mais simples e resistente pode ser suficiente.",
        "Mantenha sempre a manutenção em dia para garantir segurança e durabilidade.",
        "Ajuste o tamanho do quadro de acordo com sua altura."
      ]
    },
    {
      id: 2,
      image: dica2,
      title: "Use roupas e equipamentos adequados",
      description: "O uso de equipamentos no ciclismo é fundamental para garantir segurança e conforto, ajudam a evitar lesões e melhorar o desempenho.",
      fullDescription: [
        "O capacete é item obrigatório para sua segurança.",
        "Roupas adequadas ajudam na performance e conforto.",
        "Luzes e refletivos são essenciais para pedaladas noturnas.",
        "Considere o uso de luvas para melhor aderência."
      ]
    },
    {
      id: 3,
      image: dica3,
      title: "Preste atenção na via e no trânsito",
      description: "Atenção no trânsito é essencial para ciclistas. Estar atento às regras e sinais e evitar distrações ajuda a previnir acidentes e garantir mais segurança.",
      fullDescription: [
        "Respeite sempre as leis de trânsito.",
        "Mantenha-se visível e sinalize suas manobras.",
        "Pedale no mesmo sentido dos carros.",
        "Evite distrações como uso de fones de ouvido."
      ]
    }
  ]

  return (
    <div className="bg-secondary min-h-[70vh] py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h1 className="text-center text-white text-4xl font-bold mb-12">
          DICAS PARA INICIANTES
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <Link
              to={`/dicas/${tip.id}`}
              key={tip.id}
              className="block group cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 h-full">
                <div className="mb-6">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="object-cover rounded-xl shadow-lg w-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-white font-bold text-xl mb-4 text-center">
                  {tip.title}
                </h3>
                
                <p className="text-white/90 leading-relaxed text-center">
                  {tip.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}