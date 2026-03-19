import Link from "next/link";

export const metadata = {
  title: "How to prepare for psychometric tests | UniHelp",
  description:
    "Learn what psychometric tests measure and how to prepare for memory, verbal, numerical, and reasoning assessments.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">Psychometric Prep</span>
        <h1>How to prepare for psychometric tests</h1>
        <p className="lede">
          Psychometric tests are often used for bursaries, graduate programmes, internships,
          and some student opportunities. They are designed to measure how you think, solve
          problems, understand information, or respond to workplace situations.
        </p>

        <h2>What these tests usually measure</h2>
        <ul className="check-list">
          <li>Numerical reasoning</li>
          <li>Verbal understanding</li>
          <li>Pattern recognition and logic</li>
          <li>Memory and concentration</li>
          <li>Speed and accuracy under pressure</li>
        </ul>

        <h2>How to prepare well</h2>
        <p>
          Start by understanding the test type. Practising the wrong type of test can waste
          time. Then work on accuracy first, speed second. Once you know the patterns,
          introduce time pressure gradually.
        </p>
        <p>
          Practice in short, focused sessions. A 15 to 20 minute daily routine is often more
          effective than one long stressful session right before the test.
        </p>

        <h2>How to manage nerves</h2>
        <p>
          Many students perform worse because of panic, not because they lack ability. Read
          instructions carefully, stay calm when a question feels difficult, and avoid spending
          too long on one item if the test is timed.
        </p>

        <h2>Use practice tools with a purpose</h2>
        <p>
          UniHelp now includes a psychometric practice section so you can warm up memory,
          pattern recognition, and concentration. These tools do not replace formal assessment,
          but they help you become more confident and comfortable.
        </p>

        <h2>FAQ</h2>
        <h3>Can you fail a psychometric test?</h3>
        <p>
          In practice, some employers and programmes use cut-offs or compare candidates, so
          preparation matters.
        </p>
        <h3>Should I guess if I do not know the answer?</h3>
        <p>
          It depends on the instructions, but in many timed tests it is better to keep moving
          than to freeze on one question.
        </p>

        <p>
          Next step: try the <Link href="/tools/psychometric-practice">psychometric practice hub</Link>.
        </p>
      </article>
    </main>
  );
}
