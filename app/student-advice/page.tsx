import CardLink from "@/app/components/CardLink";
import Link from "next/link";

export const metadata = {
  title: "Student Advice | UniHelp",
  description:
    "Practical student guides on university choices, applications, motivation letters, budgeting, psychometric tests, and next steps after matric.",
};

const guides = [
  {
    href: "/student-advice/what-to-do-after-matric",
    title: "What to do after matric",
    description: "A realistic breakdown of university, TVET college, gap years, short courses, work, and how to choose your next step.",
    tag: "Start here",
  },
  {
    href: "/student-advice/how-to-choose-a-university",
    title: "How to choose a university",
    description: "Compare location, costs, course strength, accommodation, support services, and requirements before applying.",
    tag: "University",
  },
  {
    href: "/student-advice/how-to-choose-a-course",
    title: "How to choose a course",
    description: "Use your marks, interests, strengths, and long-term goals to narrow down realistic study options.",
    tag: "Course choice",
  },
  {
    href: "/student-advice/how-to-write-a-motivation-letter",
    title: "How to write a motivation letter",
    description: "A simple structure, what to include, what to avoid, and how to sound genuine without writing fluff.",
    tag: "Applications",
  },
  {
    href: "/student-advice/how-to-prepare-for-psychometric-tests",
    title: "How to prepare for psychometric tests",
    description: "What psychometric tests measure, how to practice calmly, and how to improve confidence.",
    tag: "Career prep",
  },
  {
    href: "/student-advice/first-year-budget-guide",
    title: "First-year budget guide",
    description: "Plan for registration, deposits, accommodation, transport, food, devices, and small costs that catch students off guard.",
    tag: "Money",
  },
  {
    href: "/student-advice/internship-vs-learnership-vs-graduate-programme",
    title: "Internship vs learnership vs graduate programme",
    description: "Understand the differences so you apply for the right kind of opportunity.",
    tag: "Career prep",
  },
  {
    href: "/student-advice/how-to-avoid-student-scams",
    title: "How to avoid student scams",
    description: "Watch out for fake accommodation, fake bursaries, fake jobs, and fake promises around admission.",
    tag: "Safety",
  },
];

export default function StudentAdvicePage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card hero">
          <span className="tag">Student Advice</span>
          <h1 style={{ marginBottom: 10 }}>Guides for real student decisions</h1>
          <p className="lede" style={{ maxWidth: 860, marginTop: 0 }}>
            This section is for the questions that need more than a short answer. UniHelp pairs practical tools with fuller,
            more useful guides so students can make decisions with more confidence.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
            <Link href="/tools/career-fit-assessment" className="button">
              Take career assessment
            </Link>
            <Link href="/ask-unihelp" className="button button--ghost">
              Ask UniHelp
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Featured guides</h2>
          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            {guides.map((guide) => (
              <CardLink key={guide.href} {...guide} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>How to use this section well</h2>
          <ul className="check-list">
            <li>Start with your marks and your likely funding reality, then compare study options honestly.</li>
            <li>Use guides together: course choice, university choice, budgeting, and funding all affect each other.</li>
            <li>When one path closes, look for related alternatives instead of assuming the whole plan is over.</li>
            <li>Use tools like APS, career fit, and psychometric practice to support decisions, not replace them.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
