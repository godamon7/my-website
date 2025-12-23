import { SKILLS } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-7 tracking-tight">个人技能</h2>
      <div className="grid md:grid-cols-3 gap-7">
        {SKILLS.map((group) => (
          <div key={group.cat} className="bg-[#1c252e] rounded-xl p-5 border border-gray-800">
            <div className="font-semibold text-green-400 mb-2 text-base">{group.cat}</div>
            <ul className="space-y-3">
              {group.items.map((skill) => (
                <li key={skill.label} className="flex items-center">
                  <span className="text-xl mr-2">{skill.icon}</span>
                  <span className="flex-1 text-gray-100 text-base">{skill.label}</span>
                  <div className="w-24 h-2 bg-gray-700 rounded ml-3 mr-1 overflow-hidden">
                    <div
                      className={`h-2 rounded bg-gradient-to-r from-green-400 to-green-700`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}