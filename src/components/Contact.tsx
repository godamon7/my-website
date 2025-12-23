import { useState } from "react";
import { CONTACT } from "../data";
import { motion } from "framer-motion";
import WechatModal from "./WechatModal";

export default function Contact() {
  const [wechatOpen, setWechatOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT.email.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1300);
  };

  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-4 md:px-0 mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-7 tracking-tight">联系我</h2>
      
      <div className="grid sm:grid-cols-2 gap-7">
        {/* 左侧：微信二维码 */}
        <motion.div
          className="bg-[#182028] rounded-xl border border-gray-700 flex flex-col items-center p-6 group relative cursor-pointer"
          whileHover={{ y: -2, boxShadow: "0 6px 24px 0 #21e58118" }}
          onClick={() => setWechatOpen(true)}
        >
          <img 
            src={CONTACT.wechat.qr} 
            alt="微信二维码"
            className="w-28 h-28 mb-3 rounded border-2 border-green-400 object-contain bg-white p-1"
          />
          <span className="text-lg text-gray-100 mb-1">{CONTACT.wechat.label}</span>
          <span className="text-sm text-green-300">{CONTACT.wechat.tip}</span>
          <span className="absolute inset-0 group-hover:bg-green-700/10 transition pointer-events-none rounded" />
        </motion.div>

        {/* 右侧：邮箱 + LinkedIn */}
        <div className="flex flex-col gap-4">
          {/* 邮箱卡片 */}
          <motion.div
            className="bg-[#182028] rounded-xl border border-gray-700 p-5 flex items-center group hover:shadow-lg transition cursor-pointer"
            whileHover={{ y: -2, boxShadow: "0 8px 24px 0 #21e58116" }}
            onClick={handleCopy}
          >
            <span className="text-2xl text-green-400 mr-3">📧</span>
            <div className="flex flex-col flex-1">
              <span className="text-base text-gray-200">{CONTACT.email.label}</span>
              <span className="text-sm text-gray-400">{CONTACT.email.value}</span>
            </div>
            <span
              className={`ml-4 px-3 py-1 rounded text-xs font-medium transition ${
                copied
                  ? "bg-green-700 text-white"
                  : "bg-green-900/40 text-green-200 hover:bg-green-800"
              }`}
            >
              {copied ? "已复制" : "一键复制"}
            </span>
          </motion.div>

          {/* LinkedIn 单独大按钮 */}
          <a
            href={CONTACT.linkedin.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#19222c] rounded-xl border border-gray-700 p-5 flex items-center justify-center text-gray-200 hover:text-blue-400 hover:border-blue-400 transition font-medium group"
          >
            <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.5 11.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.97v5.69h-3v-10h2.87v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58v5.61z"/>
            </svg>
            <span className="text-lg">{CONTACT.linkedin.label}</span>
          </a>
        </div>
      </div>

      {/* 微信二维码弹窗 */}
      <WechatModal open={wechatOpen} onClose={() => setWechatOpen(false)} qr={CONTACT.wechat.qr} />
    </section>
  );
}