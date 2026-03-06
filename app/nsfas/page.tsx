import CardLink from "../components/CardLink";

export default function Page() {
  return (
    <div className="article">
      <div className="card">
        <h1>NSFAS</h1>
        <p className="lede">
          Guides to help South African students understand NSFAS funding,
          eligibility, documents, applications, and what to do if something goes
          wrong.
        </p>
      </div>

      <h2>NSFAS guides</h2>

      <div className="section-nsfas">
        <CardLink
          href="/nsfas/who-qualifies-for-nsfas"
          title="Who qualifies for NSFAS in South Africa?"
          description="Eligibility rules, income requirements, and who NSFAS usually funds."
        />

        <CardLink
          href="/nsfas/how-to-apply-for-nsfas"
          title="How to apply for NSFAS (step-by-step)"
          description="Where to apply, what you need, and how to track your status on myNSFAS."
        />

        <CardLink
          href="/nsfas/what-does-nsfas-cover"
          title="What does NSFAS cover?"
          description="Tuition, registration, accommodation, transport and other allowances."
        />

        <CardLink
          href="/nsfas/why-nsfas-applications-get-rejected"
          title="Why NSFAS applications get rejected"
          description="Common rejection reasons and what to do if your application is declined."
        />

        <CardLink
          href="/nsfas/how-to-appeal-nsfas"
          title="How to appeal NSFAS"
          description="A simple guide to appealing an NSFAS decision and the documents you may need."
        />

        <CardLink
          href="/nsfas/nsfas-documents-checklist"
          title="NSFAS documents checklist"
          description="The documents students usually need when applying for NSFAS."
        />

        <CardLink
          href="/nsfas/when-do-nsfas-applications-open"
          title="When do NSFAS applications open and close?"
          description="Understand when NSFAS usually opens, why deadlines matter, and how to prepare early."
        />

        <CardLink
          href="/nsfas/how-long-does-nsfas-approval-take"
          title="How long does NSFAS approval take?"
          description="Understand why some students wait longer, what status updates mean, and what to do while waiting."
        />

        <CardLink
          href="/nsfas/can-nsfas-pay-private-accommodation"
          title="Can NSFAS pay for private accommodation?"
          description="Learn when private accommodation may be supported and why approval matters."
        />
      </div>
    </div>
  );
}