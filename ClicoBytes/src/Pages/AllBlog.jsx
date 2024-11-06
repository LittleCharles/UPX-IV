import { Link } from 'react-router-dom'
import { CalendarDays } from 'lucide-react'
import noticia1 from "../assets/BlogImage1.png"
import noticia2 from "../assets/BlogImage2.png"
import noticia3 from "../assets/BlogImage3.png"

export default function AllBlog() {
  const posts = [
    {
      id: 1,
      image: noticia1,
      title: "Veja os benefícios de pedalar para a saúde e como começar",
      description: "Confira dicas para escolher a melhor bicicleta e saiba como evitar lesões no corpo e na coluna",
      date: "NOVEMBRO 15, 2023"
    },
    {
      id: 2,
      image: noticia2,
      title: "Piauí encerra a Copa Norte e Nordeste de Ciclismo com oito medalhas",
      description: "Estado volta a sediar a competição após oito anos, sobe ao pódio nos três dias de disputa e...",
      date: "DEZEMBRO 08, 2022"
    },
    {
      id: 3,
      image: noticia3,
      title: "Diego Mendes fica em 48º no Mundial de contrarrelógio",
      description: "Diego Mendes completou o percurso de 45,1 km em 1h02min11s e ficou na 48ª colocação no Mundial",
      date: "JUNHO 23, 2024"
    }
  ]

  return (
    <div className="bg-neutral min-h-[70vh] py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h1 className="text-center text-[#00A3E0] text-4xl font-bold mb-12">
          BLOG
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-lg mb-4 aspect-[4/3] object-cover"
                />
                <h3 className="text-[#00A3E0] font-semibold mb-2 text-lg group-hover:text-[#0081b3] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                  <CalendarDays className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}