
import React, { useState, useEffect } from 'react';
import { X, Send, Check } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    document.addEventListener('toggle-contact', handleToggle);
    return () => document.removeEventListener('toggle-contact', handleToggle);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-lg glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold mb-2 tracking-tight">Hablemos de tu tienda.</h2>
            <p className="text-zinc-400 mb-8">Cuéntame sobre tu proyecto en Shopify y te responderé en menos de 24h.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Nombre</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-shopify transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-shopify transition-colors"
                  placeholder="hola@tuweb.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Mensaje</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-shopify transition-colors resize-none"
                  placeholder="¿Cómo puedo ayudarte con el SEO de tu tienda?"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-zinc-100 text-zinc-950 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-white transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-zinc-950 rounded-full animate-spin" />
                ) : (
                  <>
                    <span>ENVIAR MENSAJE</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-zinc-600 font-mono">
              Destino: josbarmar+seo@gmail.com
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-shopify/20 text-shopify rounded-full flex items-center justify-center mb-6">
              <Check size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
            <p className="text-zinc-400 text-center">Me pondré en contacto contigo pronto.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
