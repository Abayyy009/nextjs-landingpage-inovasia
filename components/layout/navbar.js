import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <nav className="bg-white text-blue-900 py-4 px-6 sticky top-0 z-50 shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-900 tracking-wide"
        >
          INOVASIA <span className="text-black"></span>
        </Link>

        {/* Menu Navigation desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <a
            href="#home"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            About
          </a>
          <a
            href="#timeline"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Timeline
          </a>
          <a
            href="#kelas"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Paket Kelas
          </a>
          <a
            href="#galery"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Gallery
          </a>
          <a
            href="#testimoni"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Testimoni
          </a>
          <a
            href="#kontak"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Kontak
          </a>
          <a
            href="/private"
            className="hover:text-blue-900 font-semibold transition-colors"
          >
            Private 1-on-1
          </a>
        </div>

        {/* CTA Button desktop */}
        <a
          href="#kelas"
          className="hidden md:inline-block bg-blue-900 hover:bg-blue-950 text-white px-5 py-2 rounded-full font-semibold transition duration-200"
        >
          Daftar
        </a>

        {/* Hamburger Button mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden cursor-pointer focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-blue-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col px-2">
          <a
            onClick={handleClose}
            href="#home"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Home
          </a>
          <a
            onClick={handleClose}
            href="#about"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            About
          </a>
          <a
            onClick={handleClose}
            href="#timeline"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Timeline
          </a>
          <a
            onClick={handleClose}
            href="#kelas"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Paket Kelas
          </a>
          <a
            onClick={handleClose}
            href="#galery"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Gallery
          </a>
          <a
            onClick={handleClose}
            href="#testimoni"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Testimoni
          </a>
          <a
            onClick={handleClose}
            href="#kontak"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Kontak
          </a>
          <a
            onClick={handleClose}
            href="pages/private.js"
            className="block py-2 px-3 hover:bg-blue-100 rounded font-semibold"
          >
            Private 1-on-1
          </a>
          <a
            onClick={handleClose}
            href="#kelas"
            className="block bg-blue-900 text-white text-center py-2 rounded-full font-semibold hover:bg-blue-950 transition duration-200"
          >
            Daftar
          </a>
        </div>
      )}
    </nav>
  );
}
