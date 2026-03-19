import CardLink from "../components/CardLink";

export default function Page() {
  return (
    <div className="article">
      <div className="card">
        <h1>Matric</h1>
        <p className="lede">
          Clear guidance for Grade 12 learners: APS points, pass types, rewrites,
          upgrading results, and what options you have after matric.
        </p>
      </div>

      <div className="card card--soft">
        <h2 style={{ marginTop: 0 }}>Past exam papers and exemplars</h2>
        <p>
          Looking for official DBE matric revision material? Use the links below
          to access past exam papers and the DBE examinations section.
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "14px",
          }}
        >
          <a
            href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate%28NSC%29Examinations/NSCPastExaminationpapers.aspx"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Official DBE past papers
          </a>

          <a
            href="https://www.education.gov.za/Curriculum/NationalSeniorCertificate%28NSC%29Examinations.aspx"
            target="_blank"
            rel="noreferrer"
            className="button button--ghost"
          >
            DBE NSC examinations page
          </a>
        </div>

        <p className="muted" style={{ marginTop: 12 }}>
          UniHelp is not affiliated with the Department of Basic Education. These
          links are provided for study support and official reference.
        </p>
      </div>

      <h2>Matric guides</h2>

      <div className="section-matric">
        <CardLink
          href="/matric/how-do-aps-points-work"
          title="How do APS points work?"
          description="Learn how marks convert into APS points and what universities usually count."
        />

        <CardLink
          href="/matric/what-can-i-study-with-my-aps"
          title="What can I study with my APS?"
          description="Understand what different APS ranges usually allow you to study."
        />

        <CardLink
          href="/matric/what-is-a-bachelor-pass"
          title="What is a bachelor pass in South Africa?"
          description="Understand what a Bachelor pass means and what it allows you to study."
        />

        <CardLink
          href="/matric/what-can-i-study-with-a-diploma-pass"
          title="What can I study with a Diploma pass?"
          description="Examples of diploma fields, and why APS + subject requirements still matter."
        />

        <CardLink
          href="/matric/higher-certificate-vs-diploma-vs-degree"
          title="Higher Certificate vs Diploma vs Degree"
          description="A simple comparison and how students often move between these options."
        />

        <CardLink
          href="/matric/can-you-rewrite-matric"
          title="Can you rewrite matric?"
          description="Who can rewrite, how it works, and what to expect."
        />

        <CardLink
          href="/matric/how-to-upgrade-matric-results"
          title="How to upgrade matric results"
          description="Upgrade options, requirements, and practical next steps."
        />

        <CardLink
          href="/matric/what-happens-if-you-fail-matric"
          title="What happens if you fail matric?"
          description="Your options after failing matric: rewrites, upgrades, TVET and skills routes."
        />

        <CardLink
          href="/matric/how-many-subjects-to-pass-matric"
          title="How many subjects do you need to pass matric?"
          description="Understand the minimum subjects and pass requirements for matric in South Africa."
        />

        <CardLink
          href="/matric/what-happens-if-you-fail-one-subject-in-matric"
          title="What happens if you fail one subject in matric?"
          description="Learn whether you can still pass matric, what happens to your APS, and what options you still have."
        />

        <CardLink
          href="/matric/can-you-go-to-university-without-maths"
          title="Can you go to university without Maths in South Africa?"
          description="Understand which courses may still be open to you if you do not have pure Mathematics."
        />

        <CardLink
          href="/matric/tvet-college-vs-university"
          title="TVET college vs university in South Africa"
          description="Compare practical and academic routes, and decide which option may suit you better after matric."
        />

        <CardLink
          href="/matric/what-is-nsc-vs-ieb"
          title="What is the difference between NSC and IEB matric?"
          description="Understand how NSC and IEB matric differ, and how both are recognised for further study."
        />
      </div>
    </div>
  );
}