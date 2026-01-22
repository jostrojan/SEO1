
import React from 'react';
import { ArrowRight, Search, BarChart, Code2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Provided pixel art image URL
  const pixelArtUrl = "https://r.jina.ai/i/6652df5360f04e1eb325f6908a8a3011";

  const services = [
    {
      icon: <Search className="text-shopify" />,
      title: "SEO Técnico",
      description: "Optimización de arquitectura, velocidad de carga y rastreo para Shopify."
    },
    {
      icon: <BarChart className="text-shopify" />,
      title: "Crecimiento Orgánico",
      description: "Estrategias de contenido y autoridad para dominar tu nicho de mercado."
    },
    {
      icon: <Code2 className="text-shopify" />,
      title: "Shopify Specialist",
      description: "Conocimiento profundo del Liquid y la API de Shopify para SEO avanzado."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 mb-32">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shopify opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-shopify"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">Disponible para proyectos</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Escala tu negocio <br />
            <span className="text-zinc-500">con SEO para Shopify.</span>
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
            Hola, soy <span className="text-white font-semibold">JosBarMar</span>. Ayudo a tiendas online a maximizar sus ingresos orgánicos mediante estrategias de SEO técnico y tácticas de crecimiento probadas en el ecosistema Shopify.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
            <Link 
              to="/seo-en-shopify"
              className="px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-bold flex items-center space-x-2 hover:bg-white hover:scale-105 transition-all shadow-xl shadow-white/5"
            >
              <span>Ver mi enfoque SEO</span>
              <ArrowRight size={18} />
            </Link>
            <button 
               onClick={() => document.dispatchEvent(new CustomEvent('toggle-contact'))}
               className="px-8 py-4 border border-white/10 rounded-full font-medium hover:bg-white/5 transition-all"
            >
              Hablemos
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 relative group">
          <div className="absolute -inset-4 bg-shopify/20 rounded-[40px] blur-2xl group-hover:bg-shopify/30 transition-all duration-500"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
            <img 
              src={pixelArtUrl} 
              alt="JosBarMar Pixel Art" 
              className="w-full h-full object-cover pixel-corners opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 glass-panel rounded-2xl border border-white/10 animate-bounce duration-[3000ms]">
            <Rocket className="text-shopify" size={24} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {services.map((service, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-3xl group hover:border-shopify/30 transition-all duration-500">
            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </section>

      {/* Quick CTA */}
      <section className="text-center bg-zinc-950 border border-white/5 rounded-[48px] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-shopify/5 to-transparent pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">¿Listo para vender más?</h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
          No dejes que tu competencia se lleve todo el tráfico de Google. Implementemos una estrategia que funcione de verdad.
        </p>
        <button 
           onClick={() => document.dispatchEvent(new CustomEvent('toggle-contact'))}
           className="px-10 py-5 bg-shopify text-black rounded-full font-black tracking-widest uppercase text-sm hover:scale-110 transition-transform active:scale-95"
        >
          INICIAR AUDITORÍA
        </button>
      </section>
    </div>
  );
};

export default Home;
