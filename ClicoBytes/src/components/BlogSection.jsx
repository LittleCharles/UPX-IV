import noticia1 from "../assets/BlogImage1.png" 
import noticia2 from "../assets/BlogImage2.png"
import { CalendarDays } from "lucide-react"

export default function BlogSection() {
  const posts = [
    {
      image: noticia1,
      title: "Veja os benefícios de pedalar para a saúde e como começar",
      description: "Confira dicas para escolher a melhor bicicleta e saiba como evitar lesões no corpo e na coluna",
      date: "NOVEMBRO 15, 2023",
    },
    {
      image: noticia2,
      title: "Piauí encerra a Copa Norte e Nordeste de Ciclismo com oito medalhas; veja colocação final",
      description: "Estado volta a sediar a competição após oito anos, sobe ao pódio nos três dias de disputa e consegue bom desempenho em Teresina",
      date: "DEZEMBRO 08, 2022",
    }
  ]

 return (
    <section id="blog" className="bg-neutral py-16">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <h2 className="text-center text-[#00A3E0] text-3xl font-bold mb-12">
          SAIBA MAIS SOBRE O CICLISMO
        </h2>

        <div className="flex flex-col divide-y divide-gray-200"> 
          {posts.map((post, index) => (
            <div key={index} className={`py-8 ${index === 0 ? 'pt-0' : ''}`}> 
              <div className="flex flex-col md:flex-row gap-8"> 
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="md:w-2/3 flex flex-col">
                  <a href="#" className="group"> 
                    <h3 className="text-[#00A3E0] font-bold text-2xl mb-4 
                                 group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                  </a>
                  
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                    <CalendarDays className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12"> 
        <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold
                            hover:bg-opacity-90 transition-colors duration-300">
              MOSTRAR MAIS
            </button>
        </div>
      </div>
    </section>
  )
}