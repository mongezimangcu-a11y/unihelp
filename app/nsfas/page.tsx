import CardLink from "@/app/components/CardLink";

export default function NsfasPage() {
  return (
    <main className="article">
      {/* Header */}
      <section style={{ marginBottom: 18 }}>
        <div className="card">
          <h1 style={{ marginBottom: 10 }}>NSFAS</h1>
          <p style={{ color: "var(--text-muted)", marginTop: 0, maxWidth: 820 }}>
            Guides to help South African students understand NSFAS funding,
            eligibility, documents, applications, and what to do if something goes wrong.
          </p>
        </div>
      </section>

      {/* NSFAS guides */}
      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>NSFAS guides</h2>

          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <CardLink
              href="/nsfas/who-qualifies-for-nsfas"
              title="Who qualifies for NSFAS in South Africa?"
              description="Eligibility rules, income requirements, and who NSFAS usually funds."
            />

            <CardLink
              href="/nsfas/how-to-apply-for-nsfas"
              title="How to apply for NSFAS (step-by-step)"
              description="Where to apply, what you need, and how to track your status on myNSFAS."
            />

            <CardLink
              href="/nsfas/what-does-nsfas-cover"
              title="What does NSFAS cover?"
              description="Tuition, registration, accommodation, transport and other allowances (overview)."
            />

            <CardLink
              href="/nsfas/why-nsfas-applications-get-rejected"
              title="Why NSFAS applications get rejected (and how to fix it)"
              description="The most common rejection reasons and what to do next."
            />

            <CardLink
              href="/nsfas/how-to-appeal-nsfas"
              title="How to appeal NSFAS if your application is rejected"
              description="Step-by-step guide to submitting an NSFAS appeal with the right documents."
            />

            <CardLink
              href="/nsfas/nsfas-documents-checklist"
              title="NSFAS required documents checklist"
              description="A practical checklist of the most commonly requested NSFAS documents."
            />
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Related tools and guides</h2>

          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <CardLink
              href="/tools/aps-calculator"
              title="Try the APS Calculator"
              description="Estimate your APS using best 6/7 subjects and Life Orientation rules."
            />

            <CardLink
              href="/matric"
              title="Matric guides"
              description="Understand passes, APS points, and what to do after getting your results."
            />
          </div>
        </div>
      </section>
    </main>
  );
}