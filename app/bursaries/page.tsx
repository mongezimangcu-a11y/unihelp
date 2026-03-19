import CardLink from "../components/CardLink";

export default function Page() {
  const lastUpdated = new Date().toLocaleDateString("en-ZA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const opportunities = [
    {
      name: "Vodacom Bursary Programme",
      type: "Bursary",
      link: "https://www.vodacom.com/bursary-programme.php",
      note: "Official Vodacom bursary page for students in STEM-related fields.",
    },
    {
      name: "Nedbank External Bursary Programme",
      type: "Bursary",
      link: "https://jobs.nedbank.co.za/content/Bursaries/?locale=en_GB",
      note: "Official Nedbank bursary page for academically strong students with financial need.",
    },
    {
      name: "Standard Bank Bursaries",
      type: "Bursary",
      link: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/bursaries",
      note: "Official Standard Bank bursary page for undergraduate and postgraduate study support.",
    },
    {
      name: "Sasol Foundation Bursaries",
      type: "Bursary",
      link: "https://www.sasolbursaries.com/welcome/sasol-foundation-bursaries/",
      note: "Official Sasol Foundation bursary page focused on STEM undergraduate study.",
    },
    {
      name: "Investec Tertiary Bursary Programme",
      type: "Bursary",
      link: "https://www.investec.com/en_za/welcome-to-investec/sustainability/our-community/bursaries/tertiary-bursary-programme.html",
      note: "Official Investec tertiary bursary page for selected degree fields relevant to financial services.",
    },
    {
      name: "Allan Gray Fellowship Programme",
      type: "Fellowship / Funding",
      link: "https://allangrayorbis.org/programmes/fellowship/",
      note: "Official Allan Gray Orbis fellowship page for university funding and entrepreneurial development.",
    },
    {
      name: "Absa Fellowship Programme",
      type: "Fellowship / Funding",
      link: "https://www.absa.africa/fellowship/",
      note: "Official Absa fellowship page with funding and leadership development support.",
    },
  ];

  return (
    <div className="article">
      <div className="card">
        <h1>Bursaries</h1>
        <p className="lede">
          Helpful guides for South African students applying for bursaries,
          understanding requirements, and preparing strong applications.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          Last updated: {lastUpdated}
        </p>
      </div>

      <h2>Bursary guides</h2>

      <div className="section-tools">
        <CardLink
          href="/bursaries/how-to-apply-for-bursaries"
          title="How to apply for bursaries in South Africa"
          description="Learn how bursary applications usually work, what documents you need, and how to improve your chances."
        />

        <CardLink
          href="/bursaries/bursary-vs-nsfas"
          title="Bursary vs NSFAS: what is the difference?"
          description="Understand how bursaries and NSFAS differ, and why students should understand both funding options."
        />

        <CardLink
          href="/bursaries/bursary-documents-checklist"
          title="Bursary documents checklist for South African students"
          description="Prepare the common documents students usually need before bursary deadlines arrive."
        />

        <CardLink
          href="/bursaries/when-do-bursary-applications-open"
          title="When do bursary applications open in South Africa?"
          description="Understand why bursary dates differ, how to prepare early, and how to avoid missing deadlines."
        />

        <CardLink
          href="/bursaries/common-bursary-mistakes"
          title="Common bursary mistakes students make"
          description="Learn the common mistakes that cause students to miss bursary opportunities and how to avoid them."
        />
      </div>

      <div className="card card--soft">
        <h2 style={{ marginTop: 0 }}>Official bursary opportunities</h2>
        <p>
          Below is a starter list of official bursary and fellowship pages from
          major organisations. Always check the provider’s own page for opening
          dates, requirements, fields of study, and closing dates.
        </p>
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