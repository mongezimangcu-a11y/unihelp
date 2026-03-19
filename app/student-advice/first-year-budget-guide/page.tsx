import Link from "next/link";

export const metadata = {
  title: "First-year budget guide | UniHelp",
  description:
    "A realistic first-year student budget guide covering registration, accommodation, food, transport, devices, study materials, and hidden costs.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">Money</span>
        <h1>First-year budget guide</h1>
        <p className="lede">
          Many first-year students plan for tuition but underestimate everything around it. Registration, rent, food, transport,
          data, toiletries, printing, and emergencies add up quickly. A simple budget does not guarantee you will never struggle,
          but it helps you avoid being surprised every month.
        </p>

        <h2>Start with fixed costs</h2>
        <p>
          Fixed costs are the expenses you can estimate early. These often include registration, tuition deposits, accommodation, transport pass costs,
          and in some cases meal plans. Once those are mapped out, the smaller weekly expenses become easier to manage.
        </p>

        <h2>Do not forget the hidden costs</h2>
        <ul className="check-list">
          <li>Application and registration fees</li>
          <li>Accommodation deposit and bedding basics</li>
          <li>Transport for registration or moving in</li>
          <li>Data and airtime</li>
          <li>Printing, stationery, and assignment costs</li>
          <li>Meals outside your original plan</li>
          <li>Unexpected society, lab, or textbook costs</li>
        </ul>

        <h2>Budget in monthly categories</h2>
        <p>
          Use broad categories: accommodation, transport, food, communication, study costs, personal care, and emergency money.
          Even a basic budget on paper is better than carrying the full plan only in your head.
        </p>

        <h2>Protect your essentials first</h2>
        <p>
          When money gets tight, protect the costs that keep you stable: accommodation, food, transport to campus, and data for academic work.
          Optional spending should fit around those essentials, not the other way around.
        </p>

        <h2>Funding is not the same as cash flow</h2>
        <p>
          Even students with bursaries or NSFAS support can face timing problems. Allowances may arrive later than expected, and some costs must be paid up front.
          Plan for gaps and keep copies of all important payment records.
        </p>

        <h2>Simple first-year budget checklist</h2>
        <ul className="check-list">
          <li>List all once-off starting costs before the academic year begins.</li>
          <li>Estimate your monthly food and transport honestly.</li>
          <li>Keep a small emergency amount if possible.</li>
          <li>Track your first month carefully so you can fix bad spending habits early.</li>
          <li>Ask accommodation providers exactly what is included before you commit.</li>
        </ul>

        <h2>FAQ</h2>
        <h3>Should I use a student account or banking app to budget?</h3>
        <p>
          Use whatever you will actually check consistently. The best budget tool is the one you will keep using.
        </p>
        <h3>What if my family cannot cover the extra costs?</h3>
        <p>
          Look at bursaries, NSFAS eligibility, part-time work options where appropriate, and cheaper accommodation or transport alternatives.
        </p>

        <p>
          Related reading: <Link href="/nsfas">NSFAS guides</Link> and <Link href="/student-advice/how-to-avoid-student-scams">how to avoid student scams</Link>.
        </p>
      </article>
    </main>
  );
}
