import Link from "next/link";

type RelatedLink = {
  href: string;
  title: string;
  description?: string;
};

export default function RelatedLinks({
  title = "Related",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links || links.length === 0) return null;

  return (
    <section className="card">
      <h3 style={{ marginTop: 0 }}>{title}</h3>

      <div
        style={{
          display: "grid",
          gap: 12,
          marginTop: 12,
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            prefetch
            style={{
              display: "block",
              textDecoration: "none",
              pointerEvents: "auto",
            }}
          >
            {/* Clickable card */}
            <div
              className="card"
              style={{
                padding: 14,
                borderRadius: 14,
                cursor: "pointer",
                pointerEvents: "auto",
              }}
            >
              <div style={{ fontWeight: 800, marginBottom: 6 }}>
                {link.title}
              </div>

              {link.description && (
                <div style={{ color: "var(--text-muted)" }}>
                  {link.description}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}