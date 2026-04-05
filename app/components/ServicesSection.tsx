export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description: "Membangun aplikasi web kustom mulai dari sistem manajemen kompleks hingga website responsif dengan performa optimal.",
      icon: "💻"
    },
    {
      title: "Mobile Development",
      description: "Pengembangan aplikasi mobile yang mulus dan intuitif untuk memberikan pengalaman terbaik di berbagai perangkat genggam.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Merancang antarmuka pengguna (UI) yang estetis dan fungsional dengan fokus pada kenyamanan pengguna (User Experience).",
      icon: "🎨"
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          My <span className="text-[#FF8A00]">Services</span>
        </h2>
        <p className="text-gray-400">Solusi digital komprehensif yang disesuaikan dengan kebutuhan Anda.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 rounded-2xl hover:border-[#FF8A00] transition-all duration-300 group">
            <div className="w-12 h-12 bg-[#2A2A2A] group-hover:bg-[#FF8A00]/10 rounded-xl flex items-center justify-center text-2xl mb-6 text-[#FF8A00]">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}