import { HERO } from "../data";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center justify-center relative mt-24 max-w-4xl mx-auto px-4 md:px-0 mb-16">
      <div className="space-y-7 w-full flex flex-col items-start">
        <motion.h1
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {HERO.name}
        </motion.h1>
        <div className="text-lg md:text-2xl font-medium text-green-300 mb-2">{HERO.title}</div>
        <div className="text-base md:text-lg text-gray-300 font-light">{HERO.value}</div>
        <div className="flex gap-4 pt-2">
          {HERO.ctas.map((btn, i) => (
            <a
              key={btn.to}
              href={btn.to}
              className={`rounded-xl px-5 py-2.5 font-semibold transition-all border 
               ${i === 0
                  ? "bg-green-900 border-green-500 text-green-100 hover:bg-green-700"
                  : "border-gray-600 text-gray-100 hover:bg-gray-800"}
                shadow-md hover:shadow-green-800/20`}
            >
              {btn.text}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}