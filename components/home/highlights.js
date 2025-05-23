import Image from "next/image";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-[#ffffff] text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section - Tampilkan di atas pada mobile */}
        <div className="flex-1 order-1 md:order-2">
          <Image
            src="/img/ai-coding-vektor.png"
            alt="Ilustrasi AI Coding"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎓 Belajar Ngoding Pakai AI? Bisa Banget! 🚀
          </h2>
          <p className="text-blue-400 text-lg font-semibold mb-2">
            🔥 Kamu Mau Bisa Ngoding dengan Cepat & Mudah?
          </p>
          <p className="text-base md:text-lg mb-4">
            Di kelas privat online selama 3 hari ini, kamu bakal belajar bikin
            website & aplikasi <strong>Toko Online</strong> dengan bantuan AI!
            🤖 💻
          </p>
          <ul className="space-y-2 mb-4 text-lg">
            <li>✅ Tanpa harus jago coding!</li>
            <li>✅ Langsung praktik bikin proyek nyata!</li>
            <li>✅ Belajar dari nol sampai bisa!</li>
          </ul>
          <p className="mb-2 text-base md:text-lg">
            💰 Biaya: <span className="line-through">Rp 375.000</span> jadi{" "}
            <span className="text-green-400 font-bold">Rp 147.000!</span>
          </p>
          <p className="mb-6 text-base md:text-lg">
            📍 Kelas Privat <strong>(Online)</strong> – 3 hari jam 19.00–21.00
            WIB
          </p>
          <a
            href="#kelas"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold  text-lg border-2 border-white"
          >
            DAFTAR SEKARANG
          </a>
        </div>
      </div>
    </motion.section>
  );
}
