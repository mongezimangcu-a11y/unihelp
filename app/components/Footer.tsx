import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/matric", label: "Matric" },
  { href: "/nsfas", label: "NSFAS" },
  { href: "/tools", label: "Tools" },
  { href: "/graduates", label: "Graduates" },
  { href: "/careers", label: "Careers" },
  { href: "/bursaries", label: "Bursaries" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="site-footer__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__meta">
          <span>© {year} UniHelp</span>
          <span className="site-footer__dot" aria-hidden="true">
            •
          </span>
          <span>South African education help portal</span>
        </div>
      </div>
    </footer>
  );
}