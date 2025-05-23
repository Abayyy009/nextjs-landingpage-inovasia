import { motion } from "framer-motion";

export default function Workshop() {
  // Variants untuk section container
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Variants untuk kiri-kanan (map dan info)
  const sideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -60 : 60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Variants tombol
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.9, duration: 0.5 },
    },
  };

  return (
    <motion.section
      id="kontak"
      className="py-20 px-4 bg-white bg-cover bg-center text-black text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <h2 className="text-4xl font-bold mb-10">Kontak</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Google Maps Embed */}
        <motion.div
          className="w-full lg:w-1/2"
          custom="left"
          variants={sideVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7928.287725536239!2d106.794552!3d-6.503466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3257f661999%3A0x674c9939db33174b!2sToko%20ATK%20DKiDS%20Media!5e0!3m2!1sid!2sid!4v1747896864330!5m2!1sid!2sid"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow-lg"
          ></iframe>
        </motion.div>

        {/* Informasi */}
        <motion.div
          className="text-left w-full lg:w-1/2 space-y-4"
          custom="right"
          variants={sideVariants}
        >
          <div className="text-left w-full lg:w-1/2 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-blue-400">Alamat</h3>
              <p className="leading-relaxed">
                Ruko Pesona Darussalam Blok A3/1
                <br />
                Waringin Jaya, Kecamatan Bojonggede, Kabupaten Bogor, Jawa Barat
                <br />
                16920
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400">📞 Kontak</h3>
              <p>0853-4633-2626</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400">📧 Email</h3>
              <p>course@inovasia.co.id</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400">
                📷 Instagram
              </h3>
              <p>
                <a
                  href="https://www.instagram.com/inovasia.minicourse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  @inovasia.minicourse
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400">
                Powered By
              </h3>
              <img
                src="/img/powered-by.png"
                alt="Powered by DKiDS & Inovasia"
                className="h-12 mt-2"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div className="mt-12" variants={buttonVariants}>
        <a
          href="#kelas"
          className="cursor-pointer px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          DAFTAR SEKARANG
        </a>
      </motion.div>
    </motion.section>
  );
}
