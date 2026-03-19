export default function Page() {
  return (
    <div className="article">
      <div className="card article-prose">
        <h1>Contact UniHelp</h1>
        <p className="lede">
          Need help finding the right information for matric, university choices, funding, or student planning in South Africa?
          You can contact UniHelp with suggestions, corrections, or general questions.
        </p>
      </div>

      <div className="card article-prose">
        <h2 style={{ marginTop: 0 }}>Email</h2>
        <p>
          You can email us at: <strong>mongezimangcu@gmail.com</strong>
        </p>
      </div>

      <div className="card article-prose">
        <h2 style={{ marginTop: 0 }}>What to include</h2>
        <ul className="check-list">
          <li>Your question or the page you are asking about</li>
          <li>Your grade or student stage, if relevant</li>
          <li>The course, institution, or funding route you are trying to understand</li>
          <li>Any page correction or broken link you want reported</li>
        </ul>
      </div>

      <div className="card article-prose">
        <h2 style={{ marginTop: 0 }}>Important note</h2>
        <p className="lede">
          UniHelp is an independent education help portal. It is not affiliated with NSFAS, the Department of Basic Education,
          or any university. Always verify final deadlines and official rules directly with the institution involved.
        </p>
      </div>
    </div>
  );
}
