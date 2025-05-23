import { motion } from "framer-motion";

export default function Timeline() {
  const waktu = [
    {
      hari: "Senin",
      opsi: ["Pagi", "Siang", "Sore", "Malam"],
    },
    {
      hari: "Selasa",
      opsi: ["Pagi", "Siang", "Sore", "Malam"],
    },
    {
      hari: "Rabu",
      opsi: ["Pagi", "Siang", "Sore", "Malam"],
    },
    {
      hari: "Kamis",
      opsi: ["Pagi", "Siang", "Sore", "Malam"],
    },
    {
      hari: "Jumat",
      opsi: ["Pagi", "Siang", "Sore", "Malam"],
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="timeline"
      className="py-20 px-6 bg-[#ffffff] text-black text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        🗓️ Jadwal Belajar Fleksibel
      </h2>
      <p className="text-gray-600 mb-10 text-lg">
        Pilih hari dan waktu belajar sesuai kesepakatan kamu & mentor!
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {waktu.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-950 text-white p-5 rounded-xl shadow-lg"
            variants={cardVariants}
          >
            <h3 className="text-lg font-semibold mb-3 text-center">
              {item.hari}
            </h3>
            <ul className="space-y-2 text-sm text-center">
              {item.opsi.map((opsi, i) => (
                <li
                  key={i}
                  className="bg-white/10 rounded-full py-1 px-3 inline-block"
                >
                  {opsi}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#kelas"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg"
        >
          DAFTAR SEKARANG
        </a>
      </div>
    </motion.section>
  );
}
