export const metadata = {
  title: "How to avoid student scams | UniHelp",
  description:
    "Learn how students can avoid fake accommodation, fake bursaries, fake job offers, and dishonest admission promises.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">Safety</span>
        <h1>How to avoid student scams</h1>
        <p className="lede">
          Students are often targeted because they are under pressure and trying to move quickly. Scammers know that urgency makes people less careful.
          Whether it is accommodation, funding, admissions, or jobs, slow down just enough to verify what you are being told.
        </p>

        <h2>Common student scams</h2>
        <ul className="check-list">
          <li>Fake accommodation listings that disappear after a deposit is paid</li>
          <li>Fake bursaries asking for unnecessary fees to "unlock" funding</li>
          <li>Fake job or internship offers that ask for money or personal documents too early</li>
          <li>People promising guaranteed university admission in exchange for payment</li>
          <li>Fraudulent social media pages pretending to be official institutions</li>
        </ul>

        <h2>Warning signs</h2>
        <p>
          Be careful when someone pressures you to pay immediately, refuses to use official channels, avoids written confirmation,
          or communicates only through a suspicious social media account. Poor grammar alone is not proof of a scam,
          but pressure, secrecy, and unusual payment demands are major warning signs.
        </p>

        <h2>How to protect yourself</h2>
        <ul className="check-list">
          <li>Verify contact details through the official institution website.</li>
          <li>Do not send deposits or documents until you have confirmed legitimacy.</li>
          <li>Ask for a written agreement, receipt, or official reference number.</li>
          <li>Search for reviews and complaints before paying anyone.</li>
          <li>Speak to a parent, guardian, friend, or trusted adult before paying under pressure.</li>
        </ul>

        <h2>Accommodation safety tip</h2>
        <p>
          If possible, view the property or ask for a live video walkthrough and clear documentation before sending money.
          Photos alone are not enough.
        </p>

        <h2>FAQ</h2>
        <h3>Are all opportunities found on social media fake?</h3>
        <p>
          No, but social media posts should still be verified against official websites or known contact details.
        </p>
        <h3>Should I pay a fee for a bursary application?</h3>
        <p>
          Be very cautious. Many legitimate bursaries do not charge application fees. Always verify first.
        </p>
      </article>
    </main>
  );
}
