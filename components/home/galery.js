import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "/img/galery1.jpeg",
    "/img/galery2.jpeg",
    "/img/galery3.jpeg",
    // Tambahkan lebih banyak jika perlu
  ];

  // Variants untuk section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variants untuk tiap gambar
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Variants untuk tombol
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: images.length * 0.25 + 0.3, duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="galery"
      className="py-20 px-4 bg-[#ffffff] text-center text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">📸 Galeri</h2>
      <p className="text-sm text-black mb-10">
        Berikut beberapa dokumentasi dari kelas sebelumnya:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Galeri ${i + 1}`}
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            variants={imageVariants}
          />
        ))}
      </div>

      <motion.div className="mt-10" variants={buttonVariants}>
        <a
          href="#kelas"
          className="px-6 py-3 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          DAFTAR SEKARANG
        </a>
      </motion.div>
    </motion.section>
  );
}
