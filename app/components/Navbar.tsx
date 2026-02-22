// app/components/Navbar.tsx
import Link from "next/link";

const navLinks = [
  { href: "/matric", label: "Matric" },
  { href: "/nsfas", label: "NSFAS" },
  { href: "/tools", label: "Tools" },
  { href: "/graduates", label: "Graduates" }, // ✅ NEW
];

const metaLinks = [
  { href: "/about", label: "About" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__brandRow">
          <Link href="/" className="site-header__brand">
            UniHelp
          </Link>
          <div className="site-header__tagline">
            South African education help portal
          </div>
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