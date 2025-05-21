export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-black/20 text-center">
      <h2 className="text-3xl font-bold mb-6">Galeri Kegiatan</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {/* Ganti dengan gambar asli nanti */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white/10 h-40 rounded-lg">
            Foto {i + 1}
          </div>
        ))}
      </div>
    </section>
  );
}
