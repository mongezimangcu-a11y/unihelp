import Link from "next/link";

export const metadata = {
  title: "How to write a motivation letter | UniHelp",
  description:
    "A practical guide to writing a motivation letter for bursaries, university applications, and student opportunities.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">Applications</span>
        <h1>How to write a motivation letter</h1>
        <p className="lede">
          A motivation letter explains why you deserve a chance. It should sound sincere,
          clear, and focused. Whether you are applying for a bursary, academic opportunity,
          leadership programme, or student role, your job is to show purpose — not to use
          fancy words.
        </p>

        <h2>A simple structure that works</h2>
        <h3>1. Opening</h3>
        <p>
          Say what you are applying for and introduce yourself briefly. Keep it direct.
        </p>
        <h3>2. Your academic and personal context</h3>
        <p>
          Explain your background, strengths, goals, and what has shaped your interest in
          the field.
        </p>
        <h3>3. Why this opportunity matters</h3>
        <p>
          Show how the bursary, programme, or place at university connects to your future.
          Mention impact, not just need.
        </p>
        <h3>4. Why they should choose you</h3>
        <p>
          Give reasons grounded in effort, responsibility, leadership, persistence, service,
          or academic commitment.
        </p>
        <h3>5. Closing</h3>
        <p>
          End respectfully, thank them, and restate your interest.
        </p>

        <h2>What to avoid</h2>
        <ul className="check-list">
          <li>Copy-paste letters with no personal detail.</li>
          <li>Overly dramatic wording that feels forced.</li>
          <li>Long paragraphs with no structure.</li>
          <li>Grammatical mistakes that make the letter harder to trust.</li>
          <li>Only talking about money and not about purpose or effort.</li>
        </ul>

        <h2>Quick example outline</h2>
        <p>
          “I am applying for this bursary because I am committed to studying accounting and
          building a career in finance. Throughout school I have worked hard to strengthen
          my mathematics and business subjects, and I have learned the importance of discipline
          and consistency. This support would help me continue my studies and contribute to my
          family and community in the long term.”
        </p>

        <h2>FAQ</h2>
        <h3>How long should a motivation letter be?</h3>
        <p>
          Usually one page is enough unless the application gives a different instruction.
        </p>
        <h3>Can I use AI to help me write it?</h3>
        <p>
          You can use tools to improve structure and grammar, but the ideas and personal story
          should still sound like you.
        </p>

        <p>
          Related reading: <Link href="/bursaries/how-to-apply-for-bursaries">how to apply for bursaries</Link>.
        </p>
      </article>
    </main>
  );
}
