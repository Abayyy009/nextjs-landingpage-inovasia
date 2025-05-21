export default function RegistrationForm() {
  return (
    <section id="daftar" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Formulir Pendaftaran</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-full p-3 rounded bg-white/10 text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-white/10 text-white"
          required
        />
        <input
          type="tel"
          placeholder="Nomor WhatsApp"
          className="w-full p-3 rounded bg-white/10 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 p-3 rounded font-bold"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}
