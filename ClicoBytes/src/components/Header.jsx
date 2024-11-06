import { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Logo from "../assets/LogoCicloBytes.png";

const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const menuItems = [
        { label: 'Início', href: '#inicio' },
        { label: 'Mapa', href: '#mapa' },
        { label: 'Calculadora', href: '#calculadora' },
        { label: 'Eventos', href: '#eventos' },
        { label: 'Blog', href: '#blog' },
        { label: 'Dicas', href: '#dicas' },
        { label: 'Sobre Nós', href: '#sobre-nos' }
    ];

    const handleNavigation = (href) => {
        if (isHomePage) {

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
        } else {
            // Se não estiver na home, navega para home com estado para scroll
            navigate('/', { state: { scrollTo: href } });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setHasShadow(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Se voltou para a home com um estado de scroll
        if (isHomePage && location.state?.scrollTo) {
            setTimeout(() => {
                const element = document.querySelector(location.state.scrollTo);
                if (element) {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                // Limpa o estado após o scroll
                navigate('/', { replace: true, state: {} });
            }, 100); // Pequeno delay para garantir que o DOM foi carregado
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location, isHomePage, navigate]);

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    return (
        <header className={`bg-primary w-full fixed top-0 z-[10000] transition-shadow duration-300 ${
            hasShadow ? 'shadow-[0px_8px_15px_rgba(0,0,0,0.35)]' : ''
        }`}>
            <div className="container mx-auto px-4 max-w-[1140px]">
                <nav className="flex items-center justify-between py-6">
                    <button
                        onClick={() => {
                            if (isHomePage) {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            } else {
                                navigate('/');
                            }
                        }}
                        className="flex items-center"
                    >
                        <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center"
                    >
                        <img
                            src={Logo}
                            alt="Logo Cidade Consciente"
                            className="w-[80px]"
                        />
                    </Link>
                    </button>
                    <div className="flex items-center space-x-6">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => handleNavigation(item.href)}
                                className="text-white hover:text-sky-100 transition-colors text-lg"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;