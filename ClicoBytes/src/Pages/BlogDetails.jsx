import { useParams, Link } from 'react-router-dom'
import { CalendarDays, ArrowLeft } from 'lucide-react'
import noticia1 from "../assets/BlogImage1.png"
import noticia2 from "../assets/BlogImage2.png"
import blogImage3 from "../assets/BlogImage3.png"

export default function BlogDetails() {
  const { id } = useParams()

  const posts = [
    {
      id: 1,
      image: noticia1,
      title: "Veja os benefícios de pedalar para a saúde e como começar",
      description: "Confira dicas para escolher a melhor bicicleta e saiba como evitar lesões no corpo e na coluna",
      date: "NOVEMBRO 15, 2023",
      content: [
        {
          subtitle: "Benefícios do Ciclismo",
          text: "O ciclismo é uma atividade física completa que traz diversos benefícios para a saúde. Além de melhorar o condicionamento físico e cardiovascular, pedalar regularmente ajuda a fortalecer os músculos, principalmente das pernas, glúteos e core. A atividade também é excelente para a saúde mental, reduzindo o estresse e a ansiedade."
        },
        {
          subtitle: "Como Começar",
          text: "Para iniciar no ciclismo, é importante escolher uma bicicleta adequada ao seu perfil e objetivos. Considere fatores como o tipo de uso (urbano, trilhas, velocidade), sua altura e peso. Não se esqueça dos equipamentos de segurança essenciais, como capacete, luvas e óculos de proteção."
        },
        {
          subtitle: "Cuidados Importantes",
          text: "Para evitar lesões, é fundamental manter uma postura correta na bicicleta. O ajuste do selim e guidão deve estar adequado à sua altura. Comece com trajetos curtos e vá aumentando gradualmente a distância e intensidade. Faça alongamentos antes e depois de pedalar."
        },
        {
          subtitle: "Manutenção da Bicicleta",
          text: "Uma bicicleta bem cuidada é essencial para sua segurança. Faça revisões periódicas, verifique a pressão dos pneus, a lubrificação da corrente e o funcionamento dos freios. Mantenha sua bike limpa e guardada em local apropriado."
        }
      ]
    },
    {
      id: 2,
      image: noticia2,
      title: "Piauí encerra a Copa Norte e Nordeste de Ciclismo com oito medalhas",
      description: "Estado volta a sediar a competição após oito anos, sobe ao pódio nos três dias de disputa e...",
      date: "DEZEMBRO 08, 2022",
      content: [
        {
          subtitle: "Desempenho Excepcional",
          text: "O Piauí mostrou sua força no ciclismo regional ao conquistar oito medalhas na Copa Norte e Nordeste. A competição, que retornou ao estado após oito anos, reuniu atletas de toda a região em três dias intensos de disputas."
        },
        {
          subtitle: "Detalhes da Competição",
          text: "As provas foram realizadas em diferentes modalidades, incluindo velocidade, resistência e contrarrelógio. Os atletas piauienses se destacaram especialmente nas provas de velocidade, onde conquistaram três medalhas de ouro."
        }
      ]
    },
    {
      id: 3,
      image: blogImage3,
      title: "Diego Mendes fica em 48º no Mundial de contrarrelógio",
      description: "Diego Mendes completou o percurso de 45,1 km em 1h02min11s e ficou na 48ª colocação no Mundial",
      date: "JUNHO 23, 2024",
      content: [
        {
          subtitle: "Desafio Mundial",
          text: "O ciclista brasileiro Diego Mendes enfrentou os melhores atletas do mundo na prova de contrarrelógio do Campeonato Mundial. O percurso desafiador de 45,1 quilômetros exigiu o máximo dos competidores."
        },
        {
          subtitle: "Análise do Desempenho",
          text: "Completando a prova em 1h02min11s, Mendes garantiu a 48ª posição na classificação geral. O resultado representa um marco importante para o ciclismo brasileiro em competições internacionais."
        }
      ]
    }
  ]

  const post = posts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p>Post não encontrado</p>
        <Link to="/blog" className="text-[#00A3E0] hover:underline">Voltar para o blog</Link>
      </div>
    )
  }

  return (
    <div className="bg-neutral py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-[#00A3E0] mb-8 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o blog
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-[#00A3E0] p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="p-8">
            {/* Imagem em destaque */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg mb-8"
            />
            
            {/* Descrição */}
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {post.description}
            </p>
            
            {/* Conteúdo detalhado */}
            <div className="space-y-8">
              {post.content.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-semibold text-[#00A3E0] mb-4">
                    {section.subtitle}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}