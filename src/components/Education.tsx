import { EDUCATION } from "../data";

export default function Education() {
  return (
    <section id="education" className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-7 tracking-tight">教育背景</h2>
      <ol className="relative border-l border-gray-700 pl-4 space-y-7">
        {EDUCATION.map((ed, idx) => (
          <li key={ed.school} className="ml-2">
            <div className="absolute ml-[-1.2rem] mt-[7px] w-3 h-3 bg-green-400 rounded-full"></div>
            <div className="font-semibold text-gray-100 text-base">{ed.school}</div>
            <div className="text-gray-400 text-sm">{ed.major}</div>
            <div className="text-green-300 text-xs mt-1">{ed.period}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}