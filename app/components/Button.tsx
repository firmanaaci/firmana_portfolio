import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  type?: "primary" | "secondary" | "outline";
  isDownload?: boolean; // Tambahan agar tombol tahu ini untuk unduh file
};

export default function Button({
  text,
  href,
  type = "primary",
  isDownload = false,
}: ButtonProps) {
  const baseStyle =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";

  let styles = "";
  if (type === "primary") {
    styles =
      "bg-[#6f8f5f] text-[#f7f3eb] hover:bg-[#5d7d4c] shadow-lg shadow-[#6f8f5f]/20";
  } else if (type === "outline") {
    styles =
      "border border-[#6f8f5f] text-[#4f6f44] hover:bg-[#6f8f5f] hover:text-[#f7f3eb] bg-[#fbf8f1]";
  } else {
    styles =
      "bg-[#f1ebdf] text-[#1f2a1e] hover:bg-[#e6ddcc] border border-[#d7cebf]";
  }

  // Jika tombol ini adalah tombol Download, gunakan tag <a> biasa dengan atribut download
  if (isDownload) {
    return (
      <a href={href} download className={`${baseStyle} ${styles}`}>
        {text}
      </a>
    );
  }

  // Jika bukan tombol download, gunakan Link dari Next.js seperti biasa
  return (
    <Link href={href} className={`${baseStyle} ${styles}`}>
      {text}
    </Link>
  );
}
