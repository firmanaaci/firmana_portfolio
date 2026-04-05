import Button from './Button';

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12">
      {/* Bagian Kiri: Teks */}
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-red-500 leading-tight">
          Hi, Im <span className="text-[#FF8A00]">Firmana Amri Subekhi</span> 👋
        </h1>
        <h2 className="text-xl text-gray-300 font-medium">
          Fullstack Developer & UI Designer
        </h2>
        <p className="text-gray-400 max-w-lg leading-relaxed">
          Saya merancang dan membangun solusi digital yang menggabungkan teknologi mutakhir dengan desain antarmuka yang intuitif. Mari wujudkan ide Anda menjadi kenyataan.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <Button text="Contact Me ➔" href="#kontak" type="primary" />
          <Button text="Download CV" href="#" type="outline" />
        </div>

        {/* Statistik */}
        <div className="flex gap-10 pt-10">
          <div>
            <p className="text-3xl font-bold text-[#FF8A00]">3+</p>
            <p className="text-sm text-gray-400">Proyek</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF8A00]">1+</p>
            <p className="text-sm text-gray-400">Tahun Pengalaman</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#FF8A00]">2+</p>
            <p className="text-sm text-gray-400">Klien</p>
          </div>
        </div>
      </div>

      {/* Bagian Kanan: Gambar */}
      <div className="flex-1 flex justify-center relative">
        {/* Placeholder bentuk unik (Blob) dengan warna gradasi */}
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#FF8A00] to-orange-300 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl shadow-orange-500/20 overflow-hidden flex items-center justify-center">
           <img src="ok.jpeg" alt="Foto Profil" className="w-full h-full object-cover" />
           
        </div>
      </div>
    </section>
  );
}