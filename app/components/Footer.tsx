export default function Footer() {
  return (
    <footer
      className="py-8 text-center text-sm"
      style={{
        background: "var(--footer-bg)",
        color: "var(--footer-text)",
        borderTop: "1px solid var(--footer-border)",
        transition: "background 0.35s ease, color 0.35s ease",
      }}
    >
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="text-brand-amber font-semibold">Firmana Amri Subekhi</span>. All rights
        reserved.
      </p>
      <p className="mt-2" style={{ color: "var(--footer-sub)" }}>
        Built With Next.JS &amp; Tailwind.CSS 
      </p>
    </footer>
  );
}