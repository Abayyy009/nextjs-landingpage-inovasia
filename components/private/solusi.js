import Image from "next/image";
import { motion } from "framer-motion";

export default function PrivateClass() {
  return (
    <section id="private-class" className="py-20 px-6 bg-[#ffffff] text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        {/* Vektor / Gambar Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/img/private-class-vector.jpg"
            alt="Private Class Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Konten Text di Kiri */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            🎯 Solusinya: Private Class 1-on-1
          </h2>
          <ul className="space-y-4 text-lg md:text-xl">
            <li>
              ✅ Belajar langsung bareng mentor via <strong>Zoom</strong>
            </li>
            <li>
              ✅ Bebas tanya apa pun, sampai <strong>paham</strong>
            </li>
            <li>
              ✅ Materi bisa disesuaikan dengan <strong>kebutuhan kamu</strong>
            </li>
            <li>
              ✅ Cocok buat kamu yang ingin{" "}
              <strong>upgrade skill lebih dalam</strong>
            </li>
          </ul>

          <div className="mt-8">
            <a
              href="#daftar"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:opacity-90 transition"
            >
              DAFTAR SEKARANG
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
