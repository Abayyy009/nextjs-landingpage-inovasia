import { useState } from "react";
import ModalDaftar from "./modaldaftar"; // pastikan file modal ini sudah kamu buat

export default function InovasiaPrivate() {
  const [isOpen, setIsOpen] = useState(false);
  const [paket, setPaket] = useState("");

  const openModal = (namaPaket) => {
    setPaket(namaPaket);
    setIsOpen(true);
  };

  return (
    <section className="py-20 px-4 md:px-6 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          Inovasia Mini Course - Private 1-on-1
        </h1>
        <p className="text-lg text-gray-600">
          Pendampingan langsung, belajar fokus dan hasil maksimal!
        </p>
      </div>

      {/* Why Private (2 kolom) */}
      <div className="max-w-6xl mx-auto mb-16 px-4 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Kenapa Butuh Private Class?
          </h2>
          <ul className="space-y-4 text-base text-gray-700">
            {[
              "Masih bingung integrasi API?",
              "Belum yakin bahasa pemrograman yang mau dipakai?",
              "Sering stuck di error atau case dalam proyek?",
              "Malu bertanya di grup/forum?",
              "Butuh pendampingan dari awal sampai bisa?",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-green-600 text-xl">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src="/img/3426526.jpg"
            alt="Ilustrasi Private Class"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Paket */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pilih Paket Private Class
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-4">
          {[
            {
              nama: "Lite",
              coret: "Rp 499.000",
              harga: "Rp 199.000",
              fitur: [
                "2x sesi Zoom Private (60 menit/sesi)",
                "Full pendampingan 1-on-1",
                "Konsultasi via WhatsApp",
              ],
            },
            {
              nama: "Standard",
              coret: "Rp 899.000",
              harga: "Rp 399.000",
              fitur: [
                "4x sesi Zoom Private",
                "Konsultasi WA + rekaman sesi",
                "Feedback tugas",
              ],
            },
            {
              nama: "PRO",
              coret: "Rp 1.399.000",
              harga: "Rp 599.000",
              fitur: [
                "6x sesi Zoom Private",
                "Konsultasi WA, rekaman, feedback tugas",
                "Review proyek & full support",
              ],
            },
          ].map((paketData, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <h3 className="text-3xl font-bold mb-1">{paketData.nama}</h3>
              <p className="line-through text-gray-400 text-sm">
                {paketData.coret}
              </p>
              <p className="text-orange-600 text-2xl font-bold mb-4">
                {paketData.harga}
              </p>
              <ul className="text-sm text-gray-700 space-y-1 mb-6">
                {paketData.fitur.map((fitur, i) => (
                  <li key={i}>✓ {fitur}</li>
                ))}
              </ul>
              <button
                onClick={() => openModal(paketData.nama)}
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:brightness-110 transition"
              >
                Daftar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ModalDaftar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        paket={paket}
      />
    </section>
  );
}
