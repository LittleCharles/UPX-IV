import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import dica1 from "../assets/dica1.png"
import dica2 from "../assets/dica2.png"
import dica3 from "../assets/dica3.png"

export default function TipDetails() {
  const { id } = useParams()

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
        "Ajuste o tamanho do quadro de acordo com sua altura.",
        "Considere fatores como peso, material do quadro e tipo de freios."
      ],
      additionalInfo: {
        mainPoints: [
          "Avalie o tipo de terreno onde vai pedalar",
          "Considere seu orçamento e necessidades",
          "Pesquise diferentes marcas e modelos",
          "Teste a bicicleta antes de comprar se possível",
          "Verifique a garantia e assistência técnica disponível"
        ],
        maintenance: [
          "Limpe regularmente a corrente e engrenagens",
          "Verifique a pressão dos pneus semanalmente",
          "Faça revisões periódicas nos freios",
          "Mantenha os parafusos sempre bem apertados",
          "Lubrifique as partes móveis adequadamente"
        ]
      }
    },
    {
      id: 2,
      image: dica2,
      title: "Use roupas e equipamentos adequados",
      description: "O uso de equipamentos no ciclismo é fundamental para garantir segurança e conforto, ajudam a evitar lesões e melhorar o desempenho.",
      fullDescription: [
        "O capacete é item obrigatório e essencial para sua segurança.",
        "Roupas técnicas ajudam no conforto durante a pedalada.",
        "Luzes e refletivos são fundamentais para pedaladas noturnas.",
        "Luvas protegem as mãos e melhoram o controle da bike.",
        "Óculos protegem os olhos de insetos e detritos."
      ],
      additionalInfo: {
        essentialGear: [
          "Capacete certificado e bem ajustado",
          "Luvas acolchoadas",
          "Óculos de proteção",
          "Bermuda/calça com forro",
          "Camisa técnica respirável"
        ],
        safetyEquipment: [
          "Luzes dianteira e traseira",
          "Faixas refletivas",
          "Campainha ou buzina",
          "Kit de primeiros socorros básico",
          "Ferramentas básicas para emergências"
        ]
      }
    },
    {
      id: 3,
      image: dica3,
      title: "Preste atenção na via e no trânsito",
      description: "Atenção no trânsito é essencial para ciclistas. Estar atento às regras e sinais e evitar distrações ajuda a previnir acidentes e garantir mais segurança.",
      fullDescription: [
        "Respeite sempre as leis e sinalizações de trânsito.",
        "Mantenha-se visível e sinalize todas suas manobras.",
        "Pedale no mesmo sentido dos carros e use ciclovias quando disponíveis.",
        "Evite distrações como uso de fones de ouvido ou celular.",
        "Mantenha distância segura de veículos e obstáculos."
      ],
      additionalInfo: {
        trafficRules: [
          "Respeite os semáforos e sinais de trânsito",
          "Use gestos para sinalizar conversões",
          "Mantenha distância segura dos carros",
          "Fique atento a pedestres e cruzamentos",
          "Evite pedalar muito próximo a veículos estacionados"
        ],
        safetyTips: [
          "Planeje sua rota antecipadamente",
          "Prefira vias com menos movimento",
          "Evite pedalar em horários de pico",
          "Mantenha-se visível com roupas claras",
          "Pedale de forma defensiva e preventiva"
        ]
      }
    }
  ]

  const tip = tips.find(t => t.id === parseInt(id))

  if (!tip) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p>Dica não encontrada</p>
        <Link to="/dicas" className="text-[#00A3E0] hover:underline">Voltar para dicas</Link>
      </div>
    )
  }

  return (
    <div className="bg-bg py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <Link 
          to="/dicas" 
          className="inline-flex items-center text-[#00A3E0] mb-8 hover:text-[#0081b3] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para dicas
        </Link>
        
        <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-[0_0_50px_0_rgba(0,0,0,0.3)] backdrop-blur-lg">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 text-center">
              {tip.title}
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed text-center">
              {tip.description}
            </p>
            
            <div className="space-y-12">
              {/* Pontos Principais */}
              <div className="bg-white/10 p-8 rounded-xl space-y-6">
                <h2 className="text-white text-2xl font-semibold mb-6 flex items-center">
                  <span className="w-2 h-8 bg-[#00A3E0] rounded-full mr-4"></span>
                  Pontos Importantes
                </h2>
                {tip.fullDescription.map((paragraph, index) => (
                  <p key={index} className="text-white/90 leading-relaxed flex items-start gap-3">
                    <span className="text-[#00A3E0] mt-1.5 text-lg">•</span>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Informações Adicionais */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-xl space-y-6">
                  <h2 className="text-white text-2xl font-semibold mb-6 flex items-center">
                    <span className="w-2 h-8 bg-[#00A3E0] rounded-full mr-4"></span>
                    {tip.id === 1 ? 'Principais Considerações' : 
                     tip.id === 2 ? 'Equipamentos Essenciais' : 
                     'Regras de Trânsito'}
                  </h2>
                  {tip.additionalInfo[
                    tip.id === 1 ? 'mainPoints' : 
                    tip.id === 2 ? 'essentialGear' : 
                    'trafficRules'
                  ].map((point, index) => (
                    <p key={index} className="text-white/90 leading-relaxed flex items-start gap-3">
                      <span className="text-[#00A3E0] mt-1.5 text-lg">•</span>
                      {point}
                    </p>
                  ))}
                </div>

                <div className="bg-white/10 p-8 rounded-xl space-y-6">
                  <h2 className="text-white text-2xl font-semibold mb-6 flex items-center">
                    <span className="w-2 h-8 bg-[#00A3E0] rounded-full mr-4"></span>
                    {tip.id === 1 ? 'Manutenção' : 
                     tip.id === 2 ? 'Equipamentos de Segurança' : 
                     'Dicas de Segurança'}
                  </h2>
                  {tip.additionalInfo[
                    tip.id === 1 ? 'maintenance' : 
                    tip.id === 2 ? 'safetyEquipment' : 
                    'safetyTips'
                  ].map((point, index) => (
                    <p key={index} className="text-white/90 leading-relaxed flex items-start gap-3">
                      <span className="text-[#00A3E0] mt-1.5 text-lg">•</span>
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
