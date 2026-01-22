
import React from 'react';
import { CheckCircle2, Zap, Target, Layers, TrendingUp, Cpu } from 'lucide-react';

const ShopifySeo: React.FC = () => {
  const features = [
    {
      title: "Optimización de Core Web Vitals",
      desc: "Mejoramos la velocidad de tu tema Shopify (Liquid/OS 2.0) para reducir rebotes y mejorar rankings.",
      icon: <Zap className="text-shopify" />
    },
    {
      title: "Indexación Inteligente",
      desc: "Gestión avanzada de facetas, filtros y variaciones de productos para evitar contenido duplicado.",
      icon: <Layers className="text-shopify" />
    },
    {
      title: "SEO de Contenidos & Keywords",
      desc: "Identificamos términos transaccionales de alta intención que tus clientes ya están buscando.",
      icon: <Target className="text-shopify" />
    },
    {
      title: "Estructura de Datos (Schema)",
      desc: "Implementación de JSON-LD enriquecido para aparecer con estrellas y precios en Google.",
      icon: <Cpu className="text-shopify" />
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Hero Section */}
      <div className="bg-zinc-950 border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
          <div className="px-4 py-1.5 bg-shopify/10 text-shopify rounded-full text-[10px] font-bold tracking-widest uppercase mb-8 border border-shopify/20">
            Especialista en Ecommerce
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
            DOMINA EL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shopify to-green-300">SEARCH EN SHOPIFY</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed mb-12">
            El SEO de Shopify tiene reglas propias. Yo conozco cada limitación técnica y cada oportunidad para poner tus productos delante de quien quiere comprarlos.
          </p>
          <button 
            onClick={() => document.dispatchEvent(new CustomEvent('toggle-contact'))}
            className="group relative px-10 py-5 bg-white text-black rounded-full font-bold overflow-hidden"
          >
            <span className="relative z-10">SOLICITAR CONSULTA GRATUITA</span>
            <div className="absolute inset-0 bg-shopify translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Why Shopify SEO? */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight italic">¿Por qué tu Shopify no está rankeando?</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Muchos consultores aplican SEO generalista. En Shopify, lidiar con la estructura de URLs rígida, el contenido duplicado en colecciones y el exceso de apps que ralentizan tu sitio requiere mano experta.
            </p>
            <ul className="space-y-4">
              {[
                "Optimización de archivos Liquid y JSON",
                "Gestión de redirecciones post-migración",
                "SEO internacional y multidioma",
                "Estrategia de backlinks de nicho"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={20} className="text-shopify" />
                  <span className="text-zinc-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-64 bg-zinc-900/50 rounded-3xl border border-white/5 flex flex-col items-center justify-center p-6 text-center">
                <TrendingUp size={40} className="text-shopify mb-4" />
                <span className="text-3xl font-bold">+140%</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Tráfico Orgánico medio</span>
             </div>
             <div className="h-64 bg-zinc-900/50 rounded-3xl border border-white/5 flex flex-col items-center justify-center p-6 text-center translate-y-8">
                <Target size={40} className="text-shopify mb-4" />
                <span className="text-3xl font-bold">ROI 4x</span>
                <span className="text-xs text-zinc-500 uppercase tracking-widest mt-2">En los primeros 6 meses</span>
             </div>
          </div>
        </div>

        {/* Technical Features Grid */}
        <div className="mb-32">
          <h2 className="text-center text-3xl font-bold mb-16 tracking-tight">Mi metodología 360º</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="p-10 glass-panel rounded-[32px] hover:bg-white/5 transition-all group">
                <div className="mb-6">{f.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-shopify transition-colors">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed italic">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative p-12 md:p-20 bg-gradient-to-br from-zinc-900 to-black rounded-[60px] border border-white/5 overflow-hidden text-center">
           <div className="absolute inset-0 opacity-10 pointer-events-none" 
                style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #95bf47 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
           <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10 tracking-tighter">Tu tienda Shopify merece ser la #1.</h2>
           <p className="text-zinc-400 max-w-2xl mx-auto mb-12 relative z-10 text-lg">
             He trabajado con marcas que facturan 7 cifras y marcas que acaban de empezar. El proceso es el mismo: rigor técnico y mentalidad de crecimiento.
           </p>
           <button 
             onClick={() => document.dispatchEvent(new CustomEvent('toggle-contact'))}
             className="relative z-10 px-12 py-5 bg-shopify text-black font-black rounded-full hover:scale-105 transition-transform"
           >
             AGENDAR SESIÓN ESTRATÉGICA
           </button>
        </div>
      </div>
    </div>
  );
};

export default ShopifySeo;
