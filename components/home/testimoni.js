"use client";
import { motion } from "framer-motion";

export default function Testimoni() {
  return (
    <motion.section
      id="testimoni"
      className="py-20 px-6 bg-gray-50 text-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Testimoni Alumni
        </h2>
        <p className="text-gray-600 text-lg">
          Mereka sudah merasakan manfaat belajar bareng AI. Sekarang giliran
          kamu!
        </p>
      </div>

      {/* Grid Testimoni Teks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {/* Testimoni Card 1 */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/img/testi1.jpg"
            alt="Siti"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-100 shadow-md"
          />
          <h3 className="text-xl font-bold text-blue-900">Siti</h3>
          <p className="text-sm text-gray-500 mb-3">Mahasiswi Informatika</p>
          <p className="text-gray-700 italic">
            “Kelasnya mudah diikuti meski aku baru mulai. Sekarang sudah bisa
            bikin landing page sendiri!”
          </p>
        </motion.div>

        {/* Testimoni Card 2 */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/img/testi2.jpg"
            alt="Andi"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-100 shadow-md"
          />
          <h3 className="text-xl font-bold text-blue-900">Andi</h3>
          <p className="text-sm text-gray-500 mb-3">Freelancer</p>
          <p className="text-gray-700 italic">
            “Aku merasa terbantu banget! AI-nya beneran bikin proses coding
            lebih gampang.”
          </p>
        </motion.div>

        {/* Testimoni Card 3 */}
        <motion.div
          className="bg-white p-6 rounded-2xl shadow-lg text-center flex flex-col items-center"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/img/testi3.jpg"
            alt="Rina"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-100 shadow-md"
          />
          <h3 className="text-xl font-bold text-blue-900">Rina</h3>
          <p className="text-sm text-gray-500 mb-3">Pelajar SMK</p>
          <p className="text-gray-700 italic">
            “Awalnya ragu, tapi ternyata gampang banget diikuti! Kakak mentornya
            juga sabar ngajarin.”
          </p>
        </motion.div>
      </div>

      {/* Testimoni Video */}
      {/* Testimoni Video + Ilustrasi */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        {/* Video Testimoni */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              src="https://www.instagram.com/reel/DJMSlF4SJgN/embed"
              title="Video Testimoni"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Ilustrasi */}
        <div className="flex justify-center items-center">
          <img
            src="/img/testimonial.png" // ganti dengan file ilustrasimu
            alt="Ilustrasi Testimoni"
            className="w-full max-w-sm"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
