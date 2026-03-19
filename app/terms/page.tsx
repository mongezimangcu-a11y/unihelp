export const metadata = {
  title: "Terms | UniHelp",
  description: "General terms for using UniHelp and the educational content provided on the site.",
};

export default function TermsPage() {
  return (
    <main className="article">
      <article className="card article-prose">
        <h1>Terms of Use</h1>
        <p className="lede">
          UniHelp provides educational guidance content to help South African students make better decisions. By using the site,
          you agree to use the content responsibly and to verify critical details with official sources where needed.
        </p>

        <h2>No official affiliation</h2>
        <p>
          UniHelp is an independent platform and is not an official government, NSFAS, university, or institutional website.
          References to these organisations are for educational guidance only.
        </p>

        <h2>Informational use</h2>
        <p>
          Content on UniHelp is for general information and practical guidance. Admission rules, deadlines, fees, and funding processes can change,
          so users should still confirm important details with official institutions before acting.
        </p>

        <h2>No guaranteed outcomes</h2>
        <p>
          Reading UniHelp, using the tools, or following a guide does not guarantee admission, funding, employment, or approval.
          The site is designed to improve understanding, not to make official decisions on behalf of institutions.
        </p>

        <h2>Responsible use</h2>
        <p>
          Users should not misuse site content, copy it deceptively, or present UniHelp material as official institutional communication.
          We may update, expand, or remove content over time as the platform improves.
        </p>
      </article>
    </main>
  );
}
