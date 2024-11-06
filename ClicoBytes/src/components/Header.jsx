import { useEffect, useState } from 'react';
import Logo from "../assets/LogoCicloBytes.png";

const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);

    const menuItems = [
        { label: 'Início', href: '#inicio' },
        { label: 'Mapa', href: '#mapa' },
        { label: 'Calculadora', href: '#calculadora' },
        { label: 'Eventos', href: '#eventos' },
        { label: 'Blog', href: '#blog' },
        { label: 'Dicas', href: '#dicas' },
        { label: 'Sobre Nós', href: '#sobre-nos' }
    ];

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasShadow(true);
            } else {
                setHasShadow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-primary w-full fixed top-0 z-[10000] transition-shadow duration-300 ${hasShadow ? 'shadow-[0px_8px_15px_rgba(0,0,0,0.35)]' : ''}`}>
            <div className="container mx-auto px-4 max-w-[1140px]">
                <nav className="flex items-center justify-between py-6">
                    <a 
                        href="#inicio" 
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#inicio');
                        }}
                        className="flex items-center"
                    >
                        <img
                            src={Logo}
                            alt="Logo Cidade Consciente"
                            className="w-[80px]"
                        />
                    </a>
                    <div className="flex items-center space-x-6">
                        {menuItems.map((item) => (
                           <a
                                key={item.href}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className="text-white hover:text-sky-100 transition-colors text-lg"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
