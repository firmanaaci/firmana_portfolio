import Button from "./Button";

export default function ContactSection() {
  return (
    <section
      id="kontak"
      className="relative w-full py-24 border-t border-white/5"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="rounded-3xl border border-[#d9d0c0] bg-linear-to-br from-[#fbf8f1] via-[#f1ebdf] to-[#e6ddcc] p-8 md:p-14 text-center shadow-2xl shadow-black/5">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1f2a1e]">
            Mulai Proyek Bersama?
          </h2>
          <p className="text-[#5f695b] mb-10 max-w-xl mx-auto text-lg">
            Saya selalu terbuka untuk mendiskusikan peluang baru, kolaborasi,
            atau sekadar bertukar pikiran tentang teknologi web terbaru.
          </p>
          <Button
            text="Kirim Email Sekarang"
            href="mailto:firmanaamri@gmail.com"
            type="primary"
          />
        </div>
      </div>
    </section>
  );
}
