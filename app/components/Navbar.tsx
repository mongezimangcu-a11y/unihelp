import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/matric", label: "Matric" },
  { href: "/nsfas", label: "NSFAS" },
  { href: "/tools", label: "Tools" },
  { href: "/graduates", label: "Graduates" },
  { href: "/careers", label: "Careers" },
  { href: "/bursaries", label: "Bursaries" },
];

const metaLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faqs", label: "FAQs" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brandRow">
          <Link href="/" className="site-header__brandWrap">
            <Image
              src="/logo.png"
              alt="UniHelp logo"
              width={64}
              height={64}
              className="site-header__logo"
              priority
            />

            <div className="site-header__brandText">
              <div className="site-header__brand">UniHelp</div>
              <div className="site-header__tagline">
                South African education help portal
              </div>
            </div>
          </Link>
        </div>

        <nav className="site-header__navCard" aria-label="Primary navigation">
          <div className="site-header__navGrid">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="site-header__navItem">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="site-header__metaRow" aria-label="Site info links">
            {metaLinks.map((l) => (
              <Link key={l.href} href={l.href} className="site-header__metaLink">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}