export default function ModalDaftar({ isOpen, onClose, paket }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-bold text-center mb-6">
          Formulir Pendaftaran ({paket})
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            className="w-full border rounded p-2"
            required
          />
          <input
            type="text"
            placeholder="Domisili"
            className="w-full border rounded p-2"
            required
          />

          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              className="w-1/2 bg-gray-400 text-white py-2 rounded-full shadow-md hover:bg-purple-600 transition"
            >
              Bayar pakai QRIS
            </button>
            <button
              type="button"
              className="w-1/2 bg-gray-400 text-white py-2 rounded-full shadow-md hover:bg-purple-600 transition"
            >
              Bayar pakai VA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
