export default function DisclaimerPage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card">
          <h1 style={{ marginBottom: 10 }}>Disclaimer</h1>

          <p style={{ color: "var(--text-muted)", marginTop: 0, maxWidth: 820 }}>
            UniHelp provides general educational information for South African students.
            We aim to be helpful and accurate, but we cannot guarantee that every detail is
            always up-to-date or correct for your specific situation.
          </p>

          <h2 style={{ marginTop: 18 }}>Not official advice</h2>
          <p style={{ color: "var(--text-muted)" }}>
            UniHelp is not an official government or university service. Always confirm admissions,
            APS rules, programme requirements, fees, and dates directly with the relevant institution
            or official websites.
          </p>

          <h2 style={{ marginTop: 18 }}>APS calculator</h2>
          <p style={{ color: "var(--text-muted)" }}>
            The APS calculator uses a common points table and helpful assumptions. Universities may
            calculate APS differently (for example: best 6 vs best 7, LO included/excluded, or other
            programme-specific scoring rules). Use the calculator as an estimate only.
          </p>

          <h2 style={{ marginTop: 18 }}>NSFAS information</h2>
          <p style={{ color: "var(--text-muted)" }}>
            NSFAS requirements, application windows, allowances, and appeal processes can change.
            Always confirm using the official NSFAS portal and official NSFAS pages.
          </p>

          <h2 style={{ marginTop: 18 }}>No liability</h2>
          <p style={{ color: "var(--text-muted)" }}>
            By using UniHelp, you agree that UniHelp is not responsible for any decisions you make
            based on the information provided on this site.
          </p>
        </div>
      </section>
    </main>
  );
}