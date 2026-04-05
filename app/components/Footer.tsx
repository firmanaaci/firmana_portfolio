export default function Footer() {
  const tahun = new Date().getFullYear();
  
  return (
    <footer className="p-8 mt-20 text-center bg-gray-50 border-t border-gray-200 text-gray-500">
      <p>© {tahun} Nama Kamu. Dibuat menggunakan Next.js & Tailwind CSS.</p>
    </footer>
  );
}