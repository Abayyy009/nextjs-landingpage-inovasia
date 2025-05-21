import Image from "next/image";

export default function Highlights() {
  return (
    <section className="py-20 px-6 bg-[#ffffff] text-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1">
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
            href="#daftar"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-semibold text-black text-lg border-2 border-black"
          >
            DAFTAR SEKARANG
          </a>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image
            src="/img/ai-coding-vektor.png" // Pastikan file ini ada di folder `public/img/`
            alt="Ilustrasi AI Coding"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
