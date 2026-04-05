import Button from './Button';

export default function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-gray-900 rounded-3xl p-8 md:p-16 mb-20 text-center shadow-2xl mt-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Mulai Proyek Bersama?</h2>
      <p className="text-gray-300 mb-10 max-w-xl mx-auto text-lg">
        Saya selalu terbuka untuk mendiskusikan peluang baru, kolaborasi, atau sekadar bertukar pikiran tentang teknologi web terbaru.
      </p>
      <div className="inline-block bg-white p-1 rounded-lg">
        <Button text="Kirim Email Sekarang" href="mailto:emailkamu@gmail.com" type="primary" />
      </div>
    </section>
  );
}