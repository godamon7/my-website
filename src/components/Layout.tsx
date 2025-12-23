import NavBar from "./NavBar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#151d24]">
      <NavBar />
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="text-xs text-gray-500 py-7 text-center bg-[#151d24]">
        © {new Date().getFullYear()} 易充新能源（深圳）有限公司 · 充电桩事业部负责人
      </footer>
    </div>
  );
}