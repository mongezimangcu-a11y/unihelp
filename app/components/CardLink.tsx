import Link from "next/link";

export default function CardLink({
  title,
  description,
  href,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="card"
      style={{
        display: "block",
        textDecoration: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          marginBottom: 8,
          flexWrap: "wrap",
        }}
      >
        <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
        {tag ? <span className="tag">{tag}</span> : null}
      </div>

      <div style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
        {description}
      </div>
    </Link>
  );
}