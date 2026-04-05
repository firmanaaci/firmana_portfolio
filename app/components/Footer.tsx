export default function Footer() {
  const tahun = new Date().getFullYear();
  
  return (
   <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm bg-[#121212]">
        <p>© {new Date().getFullYear()} Firmana Amri Subekhi. All rights reserved.</p>
      </footer>
  );
}