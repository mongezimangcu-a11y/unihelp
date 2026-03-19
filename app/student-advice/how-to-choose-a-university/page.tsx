import Link from "next/link";

export const metadata = {
  title: "How to choose a university | UniHelp",
  description:
    "How South African students can compare universities properly: courses, costs, accommodation, support, and long-term fit.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">University Guide</span>
        <h1>How to choose a university</h1>
        <p className="lede">
          Choosing a university is not just about reputation. The right university for you
          is the one that matches your course goals, academic readiness, finances, support
          needs, and the kind of environment where you will actually do well.
        </p>

        <h2>Start with the course, not the campus hype</h2>
        <p>
          Ask which institutions are strongest for the specific field you want to study.
          A university may be highly respected overall but not necessarily your best fit
          for that programme.
        </p>

        <h2>Compare the real cost</h2>
        <p>
          Tuition is only one part of the cost. Also compare residence fees, private
          accommodation, transport, food, registration costs, devices, and study materials.
          A university that looks cheaper on paper may still be harder to afford in practice.
        </p>

        <h2>Check admission requirements honestly</h2>
        <p>
          Look at APS requirements, subject requirements, and any selection process. Be
          realistic about where your marks place you. Strong planning means applying to a
          mix of aspirational, realistic, and safer options.
        </p>

        <h2>Think about support and student life</h2>
        <p>
          Ask whether the university offers tutoring, counselling, disability support,
          first-year support, career services, and safe accommodation options. These things
          can make a major difference, especially in first year.
        </p>

        <h2>Location matters more than people admit</h2>
        <p>
          A move to a new city can be exciting, but it also affects family support,
          transport costs, part-time work options, and adjustment stress. Be honest about
          whether you want to stay close to home or are ready to relocate.
        </p>

        <h2>Questions to ask before applying</h2>
        <ul className="check-list">
          <li>Does this university offer the exact course I want?</li>
          <li>Can I realistically meet the entry requirements?</li>
          <li>How will I fund tuition, accommodation, and daily costs?</li>
          <li>What student support does it provide?</li>
          <li>Will I feel comfortable in that city and campus environment?</li>
        </ul>

        <h2>FAQ</h2>
        <h3>Should I choose the highest-ranked university?</h3>
        <p>
          Not automatically. Ranking matters less than course fit, affordability,
          support, and whether you can succeed there.
        </p>
        <h3>How many universities should I apply to?</h3>
        <p>
          Enough to give yourself realistic options. Many students benefit from a spread of
          ambitious, realistic, and safer choices.
        </p>

        <p>
          Helpful next step: use the <Link href="/tools/aps-calculator">APS Calculator</Link>
          and read <Link href="/tools/university-aps-requirements">university APS requirements</Link>.
        </p>
      </article>
    </main>
  );
}
