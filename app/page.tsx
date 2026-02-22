import Link from "next/link";

export const metadata = {
  title: "UniHelp",
  description:
    "Clear answers for South African students. NSFAS, matric, universities, TVET colleges — explained simply.",
};

function Card({
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

export default function HomePage() {
  return (
    <main className="article">
      {/* HERO */}
      <section style={{ marginBottom: 18 }}>
        <div
          style={{
            padding: 18,
            border: "1px solid var(--border-soft)",
            borderRadius: 18,
            background: "var(--bg-card)",
          }}
        >
          <h1 style={{ marginBottom: 10 }}>UniHelp</h1>

          <p style={{ marginTop: 0, maxWidth: 760 }}>
            Hey 👋 Welcome to UniHelp — the place for clear answers about{" "}
            <strong>NSFAS</strong>, <strong>matric</strong>, and study options in
            South Africa.
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginTop: 12,
            }}
          >
            <Link href="/nsfas" className="button">
              NSFAS Help →
            </Link>

            <Link href="/matric" className="button secondary">
              Matric Help →
            </Link>
          </div>

          <p style={{ marginTop: 14, color: "var(--text-muted)" }}>
            <strong>Quick note:</strong> UniHelp is independent and not affiliated
            with NSFAS, universities, or government departments.
          </p>
        </div>
      </section>

      {/* START HERE */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Start here (most searched)</h2>

        <div style={{ display: "grid", gap: 12 }}>
          <Card
            title="Who qualifies for NSFAS in South Africa?"
            description="Eligibility basics, household income rules, and common reasons students get rejected."
            href="/nsfas/who-qualifies-for-nsfas"
            tag="NSFAS"
          />

          <Card
            title="What happens if you fail matric?"
            description="Your options after failing matric: rewrites, upgrades, TVET pathways, and skills routes."
            href="/matric/what-happens-if-you-fail-matric"
            tag="Matric"
          />

          <Card
            title="What is a bachelor pass in South Africa?"
            description="Minimum requirements and what it means for university entry (plus APS context)."
            href="/matric/what-is-a-bachelor-pass"
            tag="Matric"
          />
        </div>
      </section>

      <hr />

      {/* BROWSE TOPICS */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Browse topics</h2>

        <div style={{ display: "grid", gap: 12 }}>
          <Card
            title="NSFAS"
            description="Eligibility, applications, rejections, appeals, allowances, and accommodation."
            href="/nsfas"
            tag="Category"
          />

          <Card
            title="Matric"
            description="Pass types, results, rewrites, upgrades, and what you can do next."
            href="/matric"
            tag="Category"
          />

          <div
            className="card"
            style={{
              borderStyle: "dashed",
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                fontSize: 18,
                fontWeight: 800,
                marginBottom: 6,
              }}
            >
              Coming soon 👀
            </div>
            <div style={{ lineHeight: 1.6 }}>
              Universities, TVET, Courses & Careers, and student tools like APS
              calculators.
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* FEEDBACK */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>What should we explain next?</h2>
        <p style={{ marginTop: 0, maxWidth: 760 }}>
          Tell us what you’re stuck on — NSFAS status, matric rewrites, APS
          points, university entry, anything. We’ll turn it into the next
          UniHelp guide.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          <Link href="/nsfas" style={{ textDecoration: "underline" }}>
            More NSFAS →
          </Link>
          <Link href="/matric" style={{ textDecoration: "underline" }}>
            More Matric →
          </Link>
        </div>
      </section>
    </main>
  );
}