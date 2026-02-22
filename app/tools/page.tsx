import CardLink from "@/app/components/CardLink";

export default function ToolsPage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card">
          <h1 style={{ marginBottom: 10 }}>Tools</h1>
          <p style={{ color: "var(--text-muted)", marginTop: 0, maxWidth: 820 }}>
            Useful calculators and guides to help you plan your next steps after Matric.
          </p>
        </div>
      </section>

      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Student tools</h2>

          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <CardLink
              href="/tools/aps-calculator"
              title="APS Calculator"
              description="Estimate your APS using best 6/7 subjects, LO rules, and degree requirement hints."
            />

            <CardLink
              href="/tools/university-aps-requirements"
              title="University APS requirements (official links)"
              description="Where to check official APS rules (UCT, Wits, UP) and what to confirm before applying."
            />

            <CardLink
              href="/tools/how-to-apply-to-university"
              title="How to apply to university (step-by-step)"
              description="A simple checklist: requirements, APS, documents, portals, offers, registration and NSFAS."
            />

            <CardLink
              href="/tools/how-to-choose-a-career"
              title="How to choose a career after Matric"
              description="A simple decision guide to pick options, calculate APS, and choose the right pathway."
            />
          </div>
        </div>
      </section>
    </main>
  );
}