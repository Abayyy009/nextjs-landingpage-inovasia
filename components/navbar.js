export default function Navbar() {
  return (
    <nav className="bg-white text-blue-900 py-4 px-6 sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-900 tracking-wide">
          INOVASIA <span className="text-black"></span>
        </div>

        {/* Menu Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#home" className="hover:text-blue-900 transition-colors">
            Home
          </a>
          <a href="#tentang" className="hover:text-blue-900 transition-colors">
            Tentang
          </a>
          <a href="#kursus" className="hover:text-blue-900 transition-colors">
            Kursus
          </a>
          <a
            href="#testimoni"
            className="hover:text-blue-900 transition-colors"
          >
            Testimoni
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#daftar"
          className="bg-blue-900 hover:bg-blue-950 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
        >
          Daftar
        </a>
      </div>
    </nav>
  );
}
