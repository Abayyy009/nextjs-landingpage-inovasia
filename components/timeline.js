import { motion } from "framer-motion";

export default function Timeline() {
  const sesi = [
    {
      title: "⏳ Malam ke-1 (1 jam 30 menit)",
      subtitle: "Pengenalan AI dalam Coding",
      points: [
        "✅ Apa itu AI dalam programming? (AI-assisted coding vs AI-generated code)",
        "✅ Pengenalan Stack Modern Website Development",
        "✅ Tools yang digunakan: ChatGPT, Copilot, Codeium, deepseek, dll.",
        "✅ Instalasi dan setup tools pendukung",
      ],
    },
    {
      title: "💻 Malam ke-2 (2 jam)",
      subtitle: "Membuat Project dengan Bantuan AI",
      points: [
        "✅ Materi fundamental teknologi Front-end Dev",
        "✅ Materi fundamental teknologi Back-end Dev",
        "✅ Membuat desain wireframe dengan AI",
        "✅ Trial menghasilkan coding website menggunakan AI",
        "✅ Debugging dengan AI",
      ],
    },
    {
      title: "🛠️ Malam ke-3 (2 jam)",
      subtitle: "Hands-on dan Challenge",
      points: [
        "✅ Demonstrasi membuat toko online dengan AI",
        "✅ Live debugging & optimasi kode",
        "✅ Q & A dan best practices dalam menggunakan AI untuk coding",
      ],
    },
  ];

  // Variants untuk section
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variants untuk card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
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
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
        🕒 Timeline Materi Kelas Privat Online (3 Malam)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sesi.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-950 p-6 rounded-xl shadow-lg text-left text-white"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="font-medium mb-4">{item.subtitle}</p>
            <ul className="space-y-2 text-sm">
              {item.points.map((point, i) => (
                <li key={i} className="text-white leading-snug">
                  {point}
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
