export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex justify-center items-center text-center px-4"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/img/hero.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-white flex flex-col items-center">
        <h1 className="font-mono text-5xl md:text-6xl font-bold mb-4">
          Belajar Coding Mulai dari Nol
        </h1>
        <p className="font-mono text-lg md:text-xl mb-6 max-w-2xl">
          Kelas intensif coding untuk pemula. Materi praktis dan langsung
          dipandu oleh mentor berpengalaman.
        </p>
        <a
          href="#about"
          className="font-mono bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold text-lg"
        >
          Pelajari Selengkapnya
        </a>
      </div>
    </section>
  );
}
