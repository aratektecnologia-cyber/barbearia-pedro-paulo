'use client';

import { motion } from 'framer-motion';
import { defaultServices, defaultSite, defaultTestimonials } from '@/lib/constants';

const images = ['/gallery/1.jpg','/gallery/2.jpg','/gallery/3.jpg','/gallery/4.jpg','/gallery/5.jpg'];

export default function HomePage() {
  const waLink = `https://wa.me/${defaultSite.whatsapp}?text=${encodeURIComponent(defaultSite.whatsappMessage)}`;

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-r from-brand-aqua to-brand-coral p-10 text-white">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-4xl font-bold max-w-4xl">{defaultSite.hero}</motion.h1>
        <p className="mt-4 text-xl">{defaultSite.heroSubtitle}</p>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Serviços</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {defaultServices.map(([name, price], i) => (
            <motion.div key={String(name)} whileHover={{ rotateX: 4, rotateY: -4, scale: 1.02 }} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-xl bg-white p-5 shadow-lg border border-brand-gold/40">
              <p className="font-semibold">{name}</p>
              <p className="text-brand-coral font-bold">R$ {Number(price).toFixed(2).replace('.', ',')}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="p-8 bg-white/60">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <p>{defaultSite.about}</p>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Galeria</h2>
        <div className="grid md:grid-cols-5 gap-3">
          {images.map((src, i) => (
            <motion.img key={src} src={src} alt={`Corte ${i+1}`} className="rounded-xl h-64 w-full object-cover" whileHover={{scale:1.04}} initial={{opacity:0}} whileInView={{opacity:1}} />
          ))}
        </div>
      </section>

      <section className="p-8 bg-brand-dark text-white">
        <h2 className="text-3xl font-bold mb-6">Depoimentos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {defaultTestimonials.map(([text, author]) => (
            <motion.blockquote key={String(author)} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} className="rounded-xl bg-white/10 p-5 border border-brand-gold/30">“{text}” — {author}</motion.blockquote>
          ))}
        </div>
      </section>

      <a href={waLink} target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-xl">
        <motion.span animate={{ scale:[1,1.05,1] }} transition={{ repeat: Infinity, duration: 1.8 }}>{defaultSite.whatsappButton}</motion.span>
      </a>
    </main>
  );
}
