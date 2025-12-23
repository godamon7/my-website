import { useState } from "react";
import { EXPERIENCE } from "../data";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section id="experience" className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-7 tracking-tight">项目经历</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.name}
            className={`bg-[#1c252e] rounded-2xl border border-gray-700 shadow hover:shadow-green-900/30
                        transition hover:scale-[1.025] cursor-pointer p-6 group`}
            whileHover={{ y: -3, boxShadow: "0 6px 32px 0 #21e58120" }}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <span className="text-green-300 text-lg font-semibold">{exp.name}</span>
              <span className="text-xs text-gray-500 border border-green-900 bg-green-900/30 rounded px-2 py-0.5 ml-auto">{exp.role}</span>
            </div>
            <div className="text-gray-400 text-xs mt-1">{exp.context}</div>
            <ul className="mt-2 text-sm text-gray-200 mb-1 list-disc ml-5 space-y-0.5">
              {exp.actions.map((txt) => <li key={txt}>{txt}</li>)}
            </ul>
            <ul className="mt-2 text-xs text-green-300 font-medium space-y-1 ml-1">
              {exp.results.map((txt) => <li key={txt}>{txt}</li>)}
            </ul>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div
                  className="text-gray-400 text-sm mt-4 border-t border-gray-700 pt-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="text-green-400 font-semibold">项目详情：</span>
                  <span>{exp.details}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}