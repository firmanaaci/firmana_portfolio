export default function Footer() {
  return (
    <footer className="border-t border-[#d9d0c0] py-8 text-center text-[#6b7565] text-sm bg-[#f4efe4]">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-[#6f8f5f]">Firmana Amri Subekhi</span>. All rights
        reserved.
      </p>
      <p className="mt-2 text-l text-[#7c8575]">
        Built With Next.JS &amp; Tailwind.CSS
      </p>
    </footer>
  );
}
