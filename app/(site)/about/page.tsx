export default function AboutPage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card">
          <h1 style={{ marginBottom: 10 }}>About UniHelp</h1>

          <p style={{ color: "var(--text-muted)", marginTop: 0, maxWidth: 820 }}>
            UniHelp is a South African education help portal built to make Matric choices,
            APS scoring, university applications, and NSFAS information easier to understand.
          </p>

          <h2 style={{ marginTop: 18 }}>What we do</h2>
          <ul>
            <li>Explain Matric pass types and common questions in simple language</li>
            <li>Provide an APS calculator and guidance on how APS is used</li>
            <li>Share practical guides for university applications</li>
            <li>Help students understand NSFAS basics, documents, and appeals</li>
          </ul>

          <h2 style={{ marginTop: 18 }}>Who this is for</h2>
          <p style={{ color: "var(--text-muted)" }}>
            UniHelp is for students and families who want clear, practical education information —
            without complicated jargon.
          </p>

          <h2 style={{ marginTop: 18 }}>Contact</h2>
          <p style={{ color: "var(--text-muted)" }}>
            If you want to suggest improvements or report an error, add a contact email later.
            (When you’re ready, tell me the email address you want to use and I’ll wire it in.)
          </p>
        </div>
      </section>
    </main>
  );
}