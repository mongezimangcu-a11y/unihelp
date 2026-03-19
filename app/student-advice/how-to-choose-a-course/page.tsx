import Link from "next/link";

export const metadata = {
  title: "How to choose a course | UniHelp",
  description:
    "A practical guide for choosing a course after matric using marks, interests, strengths, career direction, and affordability.",
};

export default function Page() {
  return (
    <main className="article">
      <article className="card article-prose">
        <span className="tag">Course choice</span>
        <h1>How to choose a course</h1>
        <p className="lede">
          Choosing a course can feel overwhelming because it is tied to money, identity, pressure from other people,
          and fear of making the wrong move. The goal is not to find a perfect option with zero doubt. The goal is to find
          a realistic course direction that fits your marks, strengths, interests, and future opportunities.
        </p>

        <h2>Start with what your marks make possible</h2>
        <p>
          Before you get attached to a course name, work out what your current marks and APS make realistic. A dream course may still be worth aiming for,
          but you also need strong backup options. This avoids applying only to one difficult programme and ending up with no practical route.
        </p>

        <h2>Separate interests from hobbies</h2>
        <p>
          Sometimes students choose a course because they enjoy a subject casually, not because they understand the actual qualification and career path.
          Enjoying social media is not the same as being ready for a communications degree. Liking people is not the same as wanting social work or teaching.
          Ask yourself whether you enjoy the underlying tasks enough to study them seriously.
        </p>

        <h2>Look at strengths, not only passion</h2>
        <p>
          Passion matters, but so do patterns in your performance. Which subjects have you consistently done well in? Which types of tasks feel natural to you?
          Do you prefer structured problem-solving, hands-on work, writing, design, helping people, or organising projects? Those clues matter.
        </p>

        <h2>Research the actual qualification</h2>
        <p>
          Read the module list, not just the course title. Two qualifications with similar names can be very different in practice.
          Check how long the programme is, whether there is work-integrated learning, whether professional registration is needed later,
          and which jobs graduates typically enter.
        </p>

        <h2>Think about affordability and support</h2>
        <p>
          A course choice is also a funding decision. Some fields may require equipment, lab time, travel, or long years of study.
          Ask what the qualification will cost, whether bursaries exist in that area, and whether you have a realistic support plan.
        </p>

        <h2>Create three layers of options</h2>
        <ul className="check-list">
          <li><strong>Primary options:</strong> the courses you most want and can realistically qualify for.</li>
          <li><strong>Backup options:</strong> related courses with slightly lower entry barriers.</li>
          <li><strong>Alternative pathways:</strong> TVET, higher certificates, short courses, or bridging routes that still move you forward.</li>
        </ul>

        <h2>Questions to ask yourself</h2>
        <ul className="check-list">
          <li>What kind of work would I be comfortable doing most days?</li>
          <li>Which school subjects or activities make me feel competent?</li>
          <li>Do I prefer academic theory, practical training, or a mix of both?</li>
          <li>What route can I realistically afford or fund?</li>
          <li>Am I choosing this for myself, or mainly to impress other people?</li>
        </ul>

        <h2>FAQ</h2>
        <h3>What if I still do not know what to study?</h3>
        <p>
          Narrow down to a small group of related fields rather than waiting for total certainty. Use your APS, subject strengths,
          and the <Link href="/tools/career-fit-assessment">career fit assessment</Link> to start building direction.
        </p>
        <h3>Can I change courses later?</h3>
        <p>
          Sometimes yes, but changing later can cost time and money. It is worth doing stronger research before you commit.
        </p>

        <p>
          Related reading: <Link href="/student-advice/how-to-choose-a-university">How to choose a university</Link> and <Link href="/tools/how-to-choose-a-career">how to choose a career</Link>.
        </p>
      </article>
    </main>
  );
}
