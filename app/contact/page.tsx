// app/contact/page.tsx
export default function Page() {
  return (
    <div className="article">
      <div className="card">
        <h1>Contact UniHelp</h1>
        <p className="lede">
          Need help finding the right information for matric, NSFAS, or study
          options in South Africa? Send us a message.
        </p>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Email</h2>
        <p>
          You can email us at: <strong>mongezimangcu@gmail.com</strong>
        </p>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>What to include</h2>
        <ul>
          <li>Your question</li>
          <li>Your grade (e.g., Grade 12 / Matric)</li>
          <li>Your province (optional)</li>
          <li>The course/university you’re aiming for (optional)</li>
        </ul>
      </div>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>Important note</h2>
        <p className="lede">
          UniHelp is an independent education help portal. We are not affiliated
          with NSFAS, the DBE, or any university.
        </p>
      </div>
    </div>
  );
}