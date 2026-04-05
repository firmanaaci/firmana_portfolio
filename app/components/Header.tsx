import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-[#121212]/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="text-2xl font-bold tracking-tighter text-white">
        Dev<span className="text-[#FF8A00]">Portfolio</span>
      </div>
      <nav className="hidden md:flex gap-8 font-medium text-gray-300 text-sm items-center">
        <Link href="#services" className="hover:text-[#FF8A00] transition-colors">Services</Link>
        <Link href="#about" className="hover:text-[#FF8A00] transition-colors">About Me</Link>
        <Link href="#projects" className="hover:text-[#FF8A00] transition-colors">Projects</Link>
        
        {/* Tombol khas di pojok kanan */}
        <Link href="#kontak" className="ml-4 px-5 py-2 bg-[#FF8A00] text-white rounded-full hover:bg-[#e67a00] transition-all text-sm font-semibold">
          Lets Talk
        </Link>
      </nav>
    </header>
  );
}