export default function AboutPage() {
  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card article-prose">
          <h1 style={{ marginBottom: 10 }}>About UniHelp</h1>

          <p className="lede" style={{ marginTop: 0, maxWidth: 820 }}>
            UniHelp is an independent South African student support website built to make education decisions easier to understand.
            The focus is on practical help around matric, APS, university choices, funding, bursaries, applications, and early-career preparation.
          </p>

          <h2>What UniHelp is trying to solve</h2>
          <p>
            Many students are overwhelmed by scattered information, jargon-heavy official pages, and confusing advice online.
            UniHelp tries to close that gap by explaining important topics in plain language and showing realistic next steps.
          </p>

          <h2>What the platform includes</h2>
          <ul className="check-list">
            <li>Guides on matric options, APS, university applications, and funding basics</li>
            <li>Student tools such as an APS calculator, career fit assessment, and psychometric practice</li>
            <li>Practical advice pages on budgeting, course choices, motivation letters, and avoiding scams</li>
            <li>A simple question helper for users who want quick direction</li>
          </ul>

          <h2>Who it is for</h2>
          <p>
            UniHelp is for learners, school leavers, students, and families who want clear, practical education information without complicated jargon.
            It is especially useful for students who are still exploring options and need a calmer starting point.
          </p>

          <h2>Important note</h2>
          <p>
            UniHelp is independent and not officially affiliated with NSFAS, universities, or government departments.
            Important deadlines, fees, and institution-specific requirements should always be confirmed with the official organisation involved.
          </p>
        </div>
      </section>
    </main>
  );
}
