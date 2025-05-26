"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingSection() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const packages = [
    {
      name: "Basic",
      price: "Rp 147.000",
      original: "Rp 249.000",
      benefits: ["Akses Zoom Live 3 Hari", "E-Sertifikat"],
    },
    {
      name: "Reguler",
      price: "Rp 199.000",
      original: "Rp 299.000",
      benefits: [
        "Akses Zoom Live 3 Hari",
        "E-Sertifikat",
        "Rekaman Kelas",
        "Template Coding AI",
      ],
    },
    {
      name: "Premium",
      price: "Rp 249.000",
      original: "Rp 399.000",
      benefits: [
        "Akses Zoom Live 3 Hari",
        "E-Sertifikat",
        "Template Coding AI",
        "Sesi Konsultasi 1-on-1",
        "Bonus Grup Eksklusif WA",
      ],
    },
  ];

  const handleOpenModal = (pkgName) => {
    setSelectedPackage(pkgName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const PricingCard = ({ pkg, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="border rounded-xl p-6 shadow-lg flex flex-col justify-between"
    >
      <div>
        <h3 className="text-3xl font-bold mb-2">{pkg.name}</h3>
        <p className="text-sm line-through text-gray-500">{pkg.original}</p>
        <p className="text-2xl font-bold text-orange-600 mb-4">{pkg.price}</p>
        <ul className="text-sm space-y-1 mb-6">
          {pkg.benefits.map((benefit, idx) => (
            <li key={idx}>✓ {benefit}</li>
          ))}
        </ul>
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleOpenModal(pkg.name)}
        className="cursor-pointer mt-auto w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-full font-bold transition"
      >
        Daftar
      </motion.button>
    </motion.div>
  );

  const RegisterModal = () => (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black p-8 rounded-lg shadow-xl w-full max-w-md relative"
          >
            <button
              onClick={handleCloseModal}
              className="cursor-pointer absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Formulir Pendaftaran ({selectedPackage})
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="tel"
                placeholder="Nomor WhatsApp"
                className="w-full p-3 border rounded"
                required
              />
              <input
                type="text"
                placeholder="Domisili"
                className="w-full p-3 border rounded"
                required
              />
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => alert("Bayar pakai QRIS")}
                  className="flex-1 cursor-pointer bg-gray-400 text-white py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 border-b-4 border-purple-800"
                >
                  Bayar pakai QRIS
                </button>
                <button
                  type="button"
                  onClick={() => alert("Bayar pakai VA")}
                  className="flex-1 cursor-pointer bg-gray-400 text-white py-3 rounded-full font-semibold shadow-md hover:bg-gray-500 border-b-4 border-purple-800"
                >
                  Bayar pakai VA
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <motion.section
      id="kelas"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 text-center bg-white text-black"
    >
      <h2 className="text-3xl font-bold mb-12 font-poppins">
        PILIH PAKET KELAS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <PricingCard key={pkg.name} pkg={pkg} index={index} />
        ))}
      </div>
      <RegisterModal />
    </motion.section>
  );
}
