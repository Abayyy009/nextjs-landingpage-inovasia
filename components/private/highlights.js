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
        {/* Image Section - Kiri */}
        <div className="flex-1 order-1 md:order-1">
          <Image
            src="/img/3426526.jpg"
            alt="Ilustrasi AI Coding"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Text Section - Kanan */}
        <div className="flex-1 order-2 md:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pernah gak sih kamu ngerasa <strong>Gini</strong>?
          </h2>
          <ul className="space-y-3 text-base md:text-lg text-gray-800">
            <li>✅ Masih bingung integrasi API?</li>
            <li>✅ Belum yakin bahasa pemrograman yang mau dipakai?</li>
            <li>✅ Sering stuck di error atau case dalam proyek?</li>
            <li>✅ Malu bertanya di grup/forum?</li>
            <li>✅ Butuh pendampingan dari awal sampai bisa?</li>
          </ul>

          <div className="mt-8">
            <a
              href="#kelas"
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg border-2 border-white"
            >
              DAFTAR SEKARANG
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
