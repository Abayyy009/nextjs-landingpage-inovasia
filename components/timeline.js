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

  return (
    <section className="py-20 px-6 bg-[#ffffff] text-black text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-2">
        🕒 Timeline Materi Kelas Privat Online (3 Malam)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sesi.map((item, index) => (
          <div
            key={index}
            className="bg-blue-950 p-6 rounded-xl shadow-lg text-left text-white"
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
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="#daftar"
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg"
        >
          DAFTAR SEKARANG
        </a>
      </div>
    </section>
  );
}
