export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-white/70 text-sm bg-[#0d2221]">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-[#f59e0b] font-semibold">Firmana Amri Subekhi</span>. All rights
        reserved.
      </p>
      <p className="mt-2 text-white/50">
        Built With Next.JS &amp; Tailwind.CSS
      </p>
    </footer>
  );
}