import CardLink from "@/app/components/CardLink";

export default function MatricPage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card">
          <h1 style={{ marginBottom: 10 }}>Matric</h1>
          <p style={{ color: "var(--text-muted)", marginTop: 0, maxWidth: 820 }}>
            Guides to help you understand results, passes, APS, and what to do next.
          </p>
        </div>
      </section>

      {/* APS CTA */}
      <section style={{ marginTop: 18 }}>
        <CardLink
          href="/tools/aps-calculator"
          title="Try the APS Calculator"
          description="Calculate your APS using best 6/7 subjects and Life Orientation rules."
        />
      </section>

      {/* Guides */}
      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Matric guides</h2>

          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <CardLink
              href="/matric/how-do-aps-points-work"
              title="How do APS points work?"
              description="Learn how marks convert into APS points and what universities usually count."
            />

            <CardLink
              href="/matric/what-can-i-study-with-my-aps"
              title="What can I study with my APS?"
              description="Understand what different APS ranges usually allow you to study."
            />

            <CardLink
              href="/matric/what-is-a-bachelor-pass"
              title="What is a bachelor pass in South Africa?"
              description="Understand what a Bachelor pass means and what it allows you to study."
            />

            <CardLink
              href="/matric/what-can-i-study-with-a-diploma-pass"
              title="What can I study with a Diploma pass?"
              description="Examples of diploma fields, and why APS + subject requirements still matter."
            />

            <CardLink
              href="/matric/higher-certificate-vs-diploma-vs-degree"
              title="Higher Certificate vs Diploma vs Degree"
              description="A simple comparison and how students often move between these options."
            />

            <CardLink
              href="/matric/can-you-rewrite-matric"
              title="Can you rewrite Matric?"
              description="Yes — options, what to rewrite, and how to plan it to improve your APS."
            />

            <CardLink
              href="/matric/how-to-upgrade-matric-results"
              title="How to upgrade Matric results"
              description="Upgrade specific subjects to improve your APS and meet entry requirements."
            />

            <CardLink
              href="/matric/what-happens-if-you-fail-matric"
              title="What happens if you fail matric?"
              description="Your options after failing, including rewrites, upgrading, and alternatives."
            />
          </div>
        </div>
      </section>
    </main>
  );
}