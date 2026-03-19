import Link from "next/link";
import CardLink from "@/app/components/CardLink";

export const metadata = {
  title: "UniHelp",
  description:
    "Student tools and guides for South African learners. APS, NSFAS, bursaries, course choices, psychometric practice, and practical student advice.",
};

const startHere = [
  {
    href: "/tools/aps-calculator",
    title: "Calculate your APS",
    description: "Start with your marks so you can compare realistic university and course options.",
  },
  {
    href: "/student-advice/what-to-do-after-matric",
    title: "Plan your next step after matric",
    description: "Choose between university, TVET, short courses, work, or a structured gap year.",
  },
  {
    href: "/nsfas",
    title: "Understand NSFAS and funding",
    description: "Get clear help on applications, documents, appeals, and common mistakes.",
  },
];

const featuredGuides = [
  {
    href: "/student-advice/how-to-choose-a-university",
    title: "How to choose a university",
    description: "Compare course strength, cost, support services, accommodation, and fit.",
    tag: "Guide",
  },
  {
    href: "/student-advice/how-to-choose-a-course",
    title: "How to choose a course",
    description: "Use subjects, strengths, career direction, and funding reality to narrow down options.",
    tag: "Guide",
  },
  {
    href: "/student-advice/internship-vs-learnership-vs-graduate-programme",
    title: "Internship vs learnership vs graduate programme",
    description: "Know the differences before you apply so you target the right opportunity.",
    tag: "Career prep",
  },
  {
    href: "/student-advice/first-year-budget-guide",
    title: "First-year budget guide",
    description: "Plan for registration, accommodation, transport, food, devices, and hidden costs.",
    tag: "Money",
  },
];

export default function HomePage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card hero hero-grid">
          <div>
            <span className="tag">Student success hub</span>
            <h1 style={{ marginBottom: 10 }}>Practical help for South African students</h1>
            <p className="lede" style={{ marginTop: 0, maxWidth: 760 }}>
              UniHelp is built for real student decisions: understanding APS, choosing a course,
              planning after matric, finding funding guidance, and preparing for university and early-career opportunities.
            </p>

            <div className="stats-row" style={{ marginTop: 18 }}>
              <div className="stat-card">
                <strong>4</strong>
                <span>student tools</span>
              </div>
              <div className="stat-card">
                <strong>25+</strong>
                <span>practical guides</span>
              </div>
              <div className="stat-card">
                <strong>SA-focused</strong>
                <span>plain-language support</span>
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
              <Link href="/tools/aps-calculator" className="button">
                Calculate APS
              </Link>
              <Link href="/student-advice" className="button button--ghost">
                Read student advice
              </Link>
              <Link href="/ask-unihelp" className="button button--ghost">
                Ask UniHelp
              </Link>
            </div>

            <p style={{ marginTop: 14, color: "var(--text-muted)" }}>
              <strong>Independent note:</strong> UniHelp is not an official university, NSFAS,
              or government website. Always confirm final deadlines and institution-specific rules with official sources.
            </p>
          </div>

          <div className="mini-panel">
            <h2 style={{ marginTop: 0, marginBottom: 10 }}>Start here</h2>
            <div style={{ display: "grid", gap: 10 }}>
              {startHere.map((item) => (
                <Link key={item.href} href={item.href} className="quick-start-card">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="home-grid-3">
          <div className="card card--soft">
            <span className="tag">Why students use UniHelp</span>
            <h2 style={{ marginBottom: 10 }}>Clear explanations without the jargon</h2>
            <p>
              Many education sites either feel too official, too thin, or too confusing. UniHelp
              focuses on plain language, step-by-step help, and the practical choices students actually face.
            </p>
          </div>
          <div className="card card--soft">
            <span className="tag">Built for action</span>
            <h2 style={{ marginBottom: 10 }}>Not just information, but direction</h2>
            <p>
              Use tools, guides, and checklists together. Calculate your APS, compare routes,
              prepare your documents, and build confidence before applications open.
            </p>
          </div>
          <div className="card card--soft">
            <span className="tag">Growing library</span>
            <h2 style={{ marginBottom: 10 }}>More depth where students need it</h2>
            <p>
              UniHelp is expanding across matric, funding, careers, student life, and first-year planning so the site feels useful end to end.
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section style={{ marginTop: 18 }}>
        <div className="home-grid-2">
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Popular tools and guides</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
              <CardLink
                href="/tools/aps-calculator"
                title="APS Calculator"
                description="Estimate your APS and start planning realistic university options."
                tag="Tool"
              />
              <CardLink
                href="/tools/career-fit-assessment"
                title="Career Fit Assessment"
                description="A stronger self-check on interests, strengths, work style, and study direction."
                tag="Tool"
              />
              <CardLink
                href="/tools/psychometric-practice"
                title="Psychometric Practice"
                description="Practice memory, verbal reasoning, and pattern recognition in one place."
                tag="Practice"
              />
              <CardLink
                href="/tools/how-to-apply-to-university"
                title="How to apply to university"
                description="Follow a realistic application checklist from course choice to offers and registration."
                tag="Guide"
              />
            </div>
          </div>

          <div className="card">
            <h2 style={{ marginTop: 0 }}>Browse by topic</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
              <CardLink
                href="/matric"
                title="Matric"
                description="Pass types, APS, rewrites, upgrades, and next-step planning."
                tag="Category"
              />
              <CardLink
                href="/nsfas"
                title="NSFAS"
                description="Applications, rejections, appeals, documents, and allowances."
                tag="Category"
              />
              <CardLink
                href="/bursaries"
                title="Bursaries"
                description="Application basics, documents, motivation letters, and timing."
                tag="Category"
              />
              <CardLink
                href="/student-advice"
                title="Student Advice"
                description="Longer guides on choosing universities, budgeting, course fit, and avoiding scams."
                tag="Category"
              />
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Featured reading</h2>
        <div style={{ display: "grid", gap: 12 }}>
          {featuredGuides.map((guide) => (
            <CardLink key={guide.href} {...guide} />
          ))}
        </div>
      </section>

      <hr />

      <section style={{ marginTop: 18 }}>
        <div className="home-grid-2">
          <div className="card">
            <span className="tag">Quick help</span>
            <h2 style={{ marginBottom: 10 }}>Ask a question if you do not feel like browsing</h2>
            <p>
              Ask UniHelp is there for students who want a fast starting point. It can direct you to the best page for APS,
              funding, applications, motivation letters, psychometric preparation, and more.
            </p>
            <Link href="/ask-unihelp" className="button">
              Open Ask UniHelp
            </Link>
          </div>

          <div className="card">
            <span className="tag">Trust</span>
            <h2 style={{ marginBottom: 10 }}>How UniHelp approaches content</h2>
            <ul className="check-list">
              <li>Plain-language guidance for South African students</li>
              <li>Independent educational content, not official institutional advice</li>
              <li>Ongoing improvement of pages, layout, and student tools</li>
              <li>Practical next steps instead of filler content</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
