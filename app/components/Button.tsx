import Link from 'next/link';

type ButtonProps = {
  text: string;
  href: string;
  type?: "primary" | "secondary" | "outline";
};

export default function Button({ text, href, type = "primary" }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  let styles = "";
  if (type === "primary") {
    styles = "bg-[#FF8A00] text-white hover:bg-[#e67a00] shadow-lg shadow-orange-500/30";
  } else if (type === "outline") {
    styles = "border border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-white";
  } else {
    styles = "bg-[#1E1E1E] text-white hover:bg-gray-800 border border-gray-700";
  }

  return (
    <Link href={href} className={`${baseStyle} ${styles}`}>
      {text}
    </Link>
  );
}