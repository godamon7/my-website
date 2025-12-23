import { useState, useEffect } from "react";

const NAV_LIST = [
  { label: "首页", to: "#hero" },
  { label: "个人信息", to: "#about" },
  { label: "教育背景", to: "#education" },
  { label: "项目经历", to: "#experience" },
  { label: "技能", to: "#skills" },
  { label: "联系我", to: "#contact" },
];

function getActiveId() {
  const idOrder = ["hero", "about", "education", "experience", "skills", "contact"];
  let active = "hero";
  for (const id of idOrder) {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2) active = id;
    }
  }
  return active;
}

export default function NavBar() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    function handle() { setActive(getActiveId()); }
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#151d24]/90 backdrop-blur-sm border-b border-[#232e39]">
      <div className="max-w-4xl mx-auto flex py-3 px-4 md:px-0 text-sm gap-3 md:gap-7 justify-between md:justify-center">
        {NAV_LIST.map((item) => (
          <a
            href={item.to}
            key={item.to}
            className={`pb-1 transition-colors duration-200 border-b-2 
              ${active === item.to.substring(1)
                ? "border-green-400 text-green-300"
                : "border-transparent text-gray-300 hover:text-green-200"}
              font-semibold`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}