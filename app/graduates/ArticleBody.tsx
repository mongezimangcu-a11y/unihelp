"use client";

// app/graduates/ArticleBody.tsx
export default function ArticleBody() {
  const lastUpdated = new Date().toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const opportunities = [
    {
      name: "Vodacom Discover Graduate Programme",
      type: "Graduate Programme",
      link: "https://www.vodacom.com/discover-graduate-programme.php",
      note: "2-year permanent programme with training, mentorship and rotations.",
    },
    {
      name: "Vodacom Early Careers (Graduate + Internship)",
      type: "Graduate + Internship",
      link: "https://www.vodacom.com/early-careers.php",
      note: "One page with both Discover Graduate + 12-month Internship info.",
    },
    {
      name: "Standard Bank Graduate Programmes (Early Careers)",
      type: "Graduate Programme",
      link: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/graduate-programmes",
      note: "Apply via Standard Bank careers portal (Early Careers).",
    },
    {
      name: "Standard Bank Internships (Early Careers)",
      type: "Internship",
      link: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/internships",
      note: "Internships listed under Early Careers.",
    },
    {
      name: "Absa Graduate Opportunities",
      type: "Graduate Programme",
      link: "https://www.absa.africa/careers/graduate-opportunities/",
      note: "Graduate opportunities across Absa’s business areas.",
    },
    {
      name: "Nedbank Graduates & Bursaries",
      type: "Graduate Programmes",
      link: "https://group.nedbank.co.za/careers/graduates-and-bursaries.html",
      note: "Info hub for graduate programmes and bursaries.",
    },
    {
      name: "Deloitte South Africa Graduate Programmes",
      type: "Graduate Programme",
      link: "https://www.deloitte.com/za/en/careers/explore-your-fit/students/graduate-programmes.html",
      note: "Graduate programmes across multiple service lines.",
    },
    {
      name: "Sasol Graduate Development Programme",
      type: "Graduate Programme",
      link: "https://www.sasolbursaries.com/welcome/graduate-development-programme/",
      note: "Graduate development programme details and structure.",
    },
  ];

  return (
    <div className="article">
      <div className="card">
        <h1>Graduates</h1>
        <p className="lede">
          Graduate programmes and internships in South Africa — a curated list of
          good starting points. We’ll update this section often.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          Last updated: {lastUpdated}
        </p>
      </div>

      <div className="card card--soft">
        <h2 style={{ marginTop: 0 }}>Quick tip</h2>
        <p>
          Deadlines and requirements change a lot. Always open the official page
          and check:
        </p>
        <ul>
          <li>Closing date</li>
          <li>Eligibility (degree, year, citizenship)</li>
          <li>Location + work model (onsite/hybrid)</li>
          <li>Documents needed (CV, transcripts, ID)</li>
        </ul>
      </div>

      <h2>Starter list</h2>

      <div>
        {opportunities.map((o) => (
          <a
            key={o.link}
            href={o.link}
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-title">
              {o.name} <span className="muted">• {o.type}</span>
            </div>
            <p className="card-desc">{o.note}</p>
          </a>
        ))}
      </div>
    </div>
  );
}