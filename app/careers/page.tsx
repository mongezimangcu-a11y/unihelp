import CardLink from "../components/CardLink";

export default function Page() {
  return (
    <div className="article">
      <div className="card">
        <h1>Careers</h1>
        <p className="lede">
          Career and opportunity guides for students in South Africa, including
          CV writing, course choices, internships, and graduate pathways.
        </p>
      </div>

      <h2>Career guides</h2>

      <div className="card">
        <CardLink
          href="/careers/how-to-write-a-student-cv"
          title="How to write a simple student CV in South Africa"
          description="Learn what to include in a student CV even if you do not have much work experience yet."
        />
      </div>
    </div>
  );
}