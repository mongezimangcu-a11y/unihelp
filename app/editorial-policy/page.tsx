export const metadata = {
  title: "Editorial Policy | UniHelp",
  description: "How UniHelp creates, reviews, and improves educational content for students.",
};

export default function EditorialPolicyPage() {
  return (
    <main className="article">
      <article className="card article-prose">
        <h1>Editorial Policy</h1>
        <p className="lede">
          UniHelp exists to explain student topics in plain language. The goal is to create content that is useful, original,
          practical, and easy to understand for South African learners, school leavers, and students.
        </p>

        <h2>How topics are chosen</h2>
        <p>
          We focus on the questions students ask most often: matric results, APS, university choices, NSFAS, bursaries,
          motivation letters, study planning, and early career preparation. We also add content where existing explanations on the internet feel too thin or too confusing.
        </p>

        <h2>How content is written</h2>
        <p>
          UniHelp aims for practical, plain-language writing. Pages are designed to help a reader understand the issue, avoid common mistakes,
          and identify realistic next steps. We try to avoid filler, vague summaries, and pages that exist only to target keywords without helping the reader.
        </p>

        <h2>How content is reviewed</h2>
        <p>
          Content may be updated over time to improve clarity, structure, and usefulness. Where possible, important rules and deadlines should still be checked against official sources,
          because education and funding requirements can change.
        </p>

        <h2>What UniHelp tries to avoid</h2>
        <ul className="check-list">
          <li>Thin pages that say little but look complete</li>
          <li>Misleading promises around admission, funding, or jobs</li>
          <li>Overly technical language that leaves students more confused</li>
          <li>Content copied from official sites without added value or explanation</li>
        </ul>
      </article>
    </main>
  );
}
