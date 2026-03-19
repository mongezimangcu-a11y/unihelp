import Link from "next/link";

export const metadata = {
  title: "What to do after matric | UniHelp",
  description:
    "A practical guide to your options after matric: university, TVET college, gap year, short courses, work, and planning your next step.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">After Matric</span>
        <h1>What to do after matric</h1>
        <p className="lede">
          Finishing matric can feel exciting and stressful at the same time. Some
          students know exactly what they want to study. Others are still unsure,
          waiting for results, worried about funding, or trying to decide between
          university and other pathways. That is normal.
        </p>
        <p>
          The best next step depends on your results, your budget, your interests,
          and the type of learning environment that suits you. Instead of panicking,
          break the decision into a few realistic routes.
        </p>

        <h2>1. Apply to university if you meet the requirements</h2>
        <p>
          University can be the right choice if you already know the field you want
          to enter and your results match the admission requirements. Before applying,
          check the APS, subject requirements, application dates, residence options,
          and the real cost of studying there.
        </p>
        <p>
          Do not choose a university only because it is popular. Choose one that fits
          your course goals, support needs, and financial reality.
        </p>

        <h2>2. Consider TVET college if you want a practical route</h2>
        <p>
          TVET colleges can be an excellent option for students who want more hands-on
          learning and job-focused training. Fields like engineering studies, business,
          hospitality, information technology, and technical trades often have strong
          TVET pathways.
        </p>

        <h2>3. Look at short courses and skills programmes</h2>
        <p>
          If you are unsure about committing to a full qualification, a short course can
          help you build confidence and useful skills while you plan. This works well for
          areas like computer literacy, bookkeeping, digital marketing, coding basics,
          office administration, and design tools.
        </p>

        <h2>4. Use a gap year carefully</h2>
        <p>
          A gap year is not automatically wasted time. It becomes useful when you give it
          structure. You could work part-time, volunteer, improve a subject, build a CV,
          learn a practical skill, or save money for future studies.
        </p>
        <p>
          The danger is drifting for a year without a plan. Write down what you want the
          year to achieve.
        </p>

        <h2>5. Sort out funding early</h2>
        <p>
          Many students delay important decisions because they assume funding will sort
          itself out. Start early with NSFAS, bursaries, and required documents. Keep
          certified copies, proof of income where needed, and academic records ready.
        </p>

        <h2>6. Do not make fear your decision-maker</h2>
        <p>
          Some students apply for courses they do not like because they are scared of being
          left behind. Others give up too early because one option closed. There is rarely
          only one route to your future.
        </p>

        <h2>Simple next-step checklist</h2>
        <ul className="check-list">
          <li>Work out your APS and subject strengths.</li>
          <li>List three realistic study or work pathways.</li>
          <li>Check funding deadlines and document requirements.</li>
          <li>Research accommodation and transport if you may need to relocate.</li>
          <li>Use UniHelp tools to compare options before committing.</li>
        </ul>

        <h2>FAQ</h2>
        <h3>What if I did not get the marks I wanted?</h3>
        <p>
          You may still have options through diploma programmes, higher certificates,
          TVET colleges, rewrites, upgrades, or short courses that lead to later study.
        </p>
        <h3>Should I study anything just to avoid staying at home?</h3>
        <p>
          Not usually. A rushed decision can cost money and time. It is better to choose a
          realistic path with intention.
        </p>

        <p>
          Related reading: <Link href="/tools/how-to-choose-a-career">How to choose a career</Link> and{' '}
          <Link href="/tools/how-to-apply-to-university">how to apply to university</Link>.
        </p>
      </article>
    </main>
  );
}
