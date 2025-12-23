import { useState } from "react";
import { ABOUT } from "../data";

export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <section id="about" className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4 tracking-tight">个人信息</h2>
      <p className="text-base md:text-lg text-gray-200">{ABOUT.summary}</p>
      <div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-green-300 mt-2 px-2 py-1 rounded hover:bg-green-800/30 transition font-medium text-sm"
        >
          {open ? "收起详细介绍" : "展开详细介绍"}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${open ? "max-h-64" : "max-h-0"}`}
        aria-hidden={!open}
      >
        <p className="text-sm md:text-base text-gray-400 mt-2 whitespace-pre-line">{ABOUT.details}</p>
      </div>
    </section>
  );
}