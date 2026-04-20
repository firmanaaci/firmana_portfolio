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
      "bg-[#1c4645] text-[#ffffff] hover:bg-[#1c4645]/90 shadow-lg shadow-[#1c4645]/20";
  } else if (type === "outline") {
    styles =
      "border border-[#1c4645] text-[#1c4645] hover:bg-[#1c4645] hover:text-[#ffffff] bg-[#ffffff]";
  } else {
    styles =
      "bg-[#ffffff] text-[#1c4645] hover:bg-[#1c4645]/10 border border-[#1c4645]/20";
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
