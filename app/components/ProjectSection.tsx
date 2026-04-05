export default function ProjectSection() {
  const projects = [
    {
      title: "Sistem Manajemen Inventaris",
      client: "Toko Bangunan Jaya Prana",
      description: "Aplikasi pencatatan stok barang, transaksi, dan pelaporan yang dirancang khusus untuk operasional toko bangunan. Diuji menggunakan Black Box Testing dan System Usability Scale (SUS) untuk memastikan kemudahan penggunaan.",
      techStack: ["Laravel", "MySQL", "Bootstrap"],
    },
    {
      title: "Integrasi Machine Learning",
      client: "Proyek Riset",
      description: "Eksplorasi penerapan algoritma machine learning pada sistem manajemen gudang untuk optimasi stok dan otomatisasi pencatatan.",
      techStack: ["Python", "React", "API"],
    }
  ];

  return (
    <section id="proyek" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Proyek Unggulan</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <h3 className="text-2xl font-bold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-blue-500 mb-4">{project.client}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}