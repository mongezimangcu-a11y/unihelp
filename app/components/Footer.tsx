import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/matric", label: "Matric" },
  { href: "/nsfas", label: "NSFAS" },
  { href: "/tools", label: "Tools" },
  { href: "/student-advice", label: "Student Advice" },
  { href: "/ask-unihelp", label: "Ask UniHelp" },
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
          <span>South African student guidance platform</span>
        </div>
      </div>
    </footer>
  );
}
