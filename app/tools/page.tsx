import CardLink from "@/app/components/CardLink";

export default function ToolsPage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card hero">
          <span className="tag">Tools</span>
          <h1 style={{ marginBottom: 10 }}>Student tools and practical guides</h1>
          <p style={{ color: "var(--text-muted)", marginTop: 0, maxWidth: 820 }}>
            Use these tools to plan your next steps after matric, compare study directions,
            and practise the kinds of thinking skills often needed in applications and graduate processes.
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
              href="/tools/career-fit-assessment"
              title="Career Fit Assessment"
              description="A guided self-check on interests, strengths, and work preferences to help you think about suitable study routes."
            />

            <CardLink
              href="/tools/psychometric-practice"
              title="Psychometric Practice"
              description="Build memory, pattern recognition, and calm test confidence for bursaries, graduate programmes, and assessments."
            />

            <CardLink
              href="/tools/university-aps-requirements"
              title="University APS requirements (official links)"
              description="Where to check official APS rules and what to confirm before applying."
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
