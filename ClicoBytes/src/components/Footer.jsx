import { Facebook, Instagram, Linkedin, Trello } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary">



      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white text-xl font-semibold">
            Acompanhe o nosso projeto!
          </h3>


          <div className="flex gap-8">
            <a 
              href="https://www.facebook.com/" 
              target="_blank"
              className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/" 
              target="_blank"
              className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Trello size={24} />
            </a>
          </div>
        </div>
      </div>

   
      <div className="border-t border-white/80" />

      <div className="container mx-auto px-4 py-8">
        <div className="text-white text-base text-center">
          Desenvolvido por Ciclebytes
        </div>
      </div>
    </footer>
  )
}