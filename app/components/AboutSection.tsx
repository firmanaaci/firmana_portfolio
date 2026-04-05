export default function AboutSection() {
  return (
    <section id="about" className="py-24 flex flex-col md:flex-row gap-16 items-center">
      {/* Kiri: Area Gambar / Kolase */}
      <div className="flex-1 relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 bg-gray-800 rounded-xl"></div>
          <div className="h-40 bg-gray-700 rounded-xl"></div>
          <div className="h-40 bg-gray-700 rounded-xl"></div>
          <div className="h-40 bg-gray-800 rounded-xl"></div>
        </div>
        {/* Badge melayang di tengah gambar */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FF8A00] text-black font-bold px-6 py-4 rounded-xl text-center shadow-xl shadow-black/50">
          <p className="text-2xl">1+ Years</p>
          <p className="text-sm">Experience</p>
        </div>
      </div>

      {/* Kanan: Teks & Skill */}
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          About <span className="text-[#FF8A00]">Me</span>
        </h2>
        <h3 className="text-xl text-gray-300 font-medium">Fullstack Developer & UI Designer</h3>
        <p className="text-gray-400 leading-relaxed text-sm">
          Saya menciptakan pengalaman digital yang menggabungkan inovasi teknologi dengan desain elegan. Dengan keahlian dalam pengembangan frontend dan backend, saya siap menghadirkan solusi dari konsep desain Figma hingga menjadi sistem utuh yang siap digunakan.
        </p>

        {/* Grid Keahlian */}
        <div className="grid grid-cols-2 gap-6 pt-6">
          <div>
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="text-[#FF8A00]">❖</span> Frontend
            </h4>
            <p className="text-gray-400 text-sm">Next.js, Tailwind CSS</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="text-[#FF8A00]">❖</span> Backend & Database
            </h4>
            <p className="text-gray-400 text-sm">PHP, Laravel, MySQL</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <span className="text-[#FF8A00]">❖</span> Design
            </h4>
            <p className="text-gray-400 text-sm">UI/UX Design, Figma</p>
          </div>
        </div>
      </div>
    </section>
  );
}