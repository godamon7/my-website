import { motion, AnimatePresence } from "framer-motion";

type Props = { open: boolean; onClose: () => void; qr: string };

export default function WechatModal({ open, onClose, qr }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed z-50 inset-0 bg-black/70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-[#232e39] rounded-2xl p-8 flex flex-col items-center relative"
            initial={{ scale: 0.93, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.93, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
          >
            <img src={qr} alt="微信二维码" className="w-40 h-40 mb-3 rounded border-4 border-green-400 shadow-xl object-contain" />
            <span className="text-green-300 text-base">微信扫码添加</span>
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-green-400 text-xl"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}