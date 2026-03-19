export const metadata = {
  title: "Privacy Policy | UniHelp",
  description: "How UniHelp handles information, cookies, analytics, and general privacy practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="article">
      <article className="card article-prose">
        <h1>Privacy Policy</h1>
        <p className="lede">
          UniHelp aims to respect user privacy and explain information clearly. This page gives a general overview of how the site may handle basic website data,
          cookies, analytics, and direct messages from users.
        </p>

        <h2>Information we may collect</h2>
        <p>
          Like many websites, UniHelp may collect limited technical information such as browser type, device information, pages visited,
          and approximate location data. This helps us understand which pages are useful, which need improvement, and how visitors move through the site.
        </p>

        <h2>Contact submissions</h2>
        <p>
          If you contact UniHelp directly, the information you send may be used to respond to your enquiry, understand what students need help with,
          and improve future content. We do not publish private messages without permission.
        </p>

        <h2>Cookies and analytics</h2>
        <p>
          UniHelp may use cookies or basic analytics tools to improve site performance, understand popular content, and create a better user experience.
          Cookies can also help remember basic preferences or measure how pages perform over time.
        </p>

        <h2>Third-party services and links</h2>
        <p>
          Some pages link to universities, funding bodies, government platforms, or other external websites. UniHelp is not responsible for the privacy practices
          of those external sites. Always review the privacy terms of the platform you visit next.
        </p>

        <h2>Data protection approach</h2>
        <p>
          UniHelp aims to keep site usage simple and privacy-conscious. Sensitive personal information should not be sent unless clearly necessary for a support conversation,
          and users should avoid sharing unnecessary identity documents through casual contact channels.
        </p>
      </article>
    </main>
  );
}
