"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Match = {
  answer: string;
  link?: { href: string; label: string };
  extraLinks?: { href: string; label: string }[];
};

const knowledge: { keywords: string[]; answer: string; link?: Match["link"]; extraLinks?: Match["extraLinks"] }[] = [
  {
    keywords: ["aps", "points", "score"],
    answer: "APS is the point system many universities use to screen applicants. Start by calculating your current score, then compare it with course and subject requirements.",
    link: { href: "/tools/aps-calculator", label: "Open the APS Calculator" },
    extraLinks: [{ href: "/matric/how-do-aps-points-work", label: "Read how APS points work" }],
  },
  {
    keywords: ["nsfas", "allowance", "appeal", "funding"],
    answer: "If your question is about student funding, NSFAS pages are usually the best starting point. You can check eligibility, appeals, documents, and what support may be covered.",
    link: { href: "/nsfas", label: "Browse NSFAS guides" },
    extraLinks: [{ href: "/nsfas/how-to-apply-for-nsfas", label: "How to apply for NSFAS" }],
  },
  {
    keywords: ["bursary", "scholarship", "motivation letter"],
    answer: "Bursary success often depends on timing, documents, and how well you present your goals. Motivation letters should sound honest, specific, and grounded.",
    link: { href: "/student-advice/how-to-write-a-motivation-letter", label: "Read the motivation letter guide" },
    extraLinks: [{ href: "/bursaries", label: "Browse bursary guides" }],
  },
  {
    keywords: ["course", "career", "study", "what should i study"],
    answer: "Course and career decisions usually get easier when you combine marks, strengths, interests, and realistic opportunities. Start broad, then narrow down.",
    link: { href: "/tools/career-fit-assessment", label: "Take the Career Fit Assessment" },
    extraLinks: [{ href: "/student-advice/how-to-choose-a-course", label: "How to choose a course" }],
  },
  {
    keywords: ["university", "apply", "application"],
    answer: "University applications work better when you plan around APS, deadlines, certified documents, and backup options. Avoid applying blindly.",
    link: { href: "/tools/how-to-apply-to-university", label: "See the university application guide" },
    extraLinks: [{ href: "/student-advice/how-to-choose-a-university", label: "How to choose a university" }],
  },
  {
    keywords: ["psychometric", "test", "assessment", "memory"],
    answer: "Psychometric preparation is about understanding the test style, practising calmly, and improving confidence with patterns, memory, and verbal reasoning.",
    link: { href: "/tools/psychometric-practice", label: "Open psychometric practice" },
    extraLinks: [{ href: "/student-advice/how-to-prepare-for-psychometric-tests", label: "Read the psychometric prep guide" }],
  },
  {
    keywords: ["matric", "after matric", "gap year", "tvet"],
    answer: "After matric, your next step does not have to be only one thing. Many students compare university, TVET, short courses, work, or a structured gap year.",
    link: { href: "/student-advice/what-to-do-after-matric", label: "Read what to do after matric" },
    extraLinks: [{ href: "/matric", label: "Browse matric guides" }],
  },
  {
    keywords: ["budget", "money", "accommodation", "transport"],
    answer: "Budgeting matters because first-year costs go beyond tuition. Accommodation, transport, food, registration, data, and emergency costs all matter.",
    link: { href: "/student-advice/first-year-budget-guide", label: "Read the budget guide" },
  },
  {
    keywords: ["scam", "fake", "fraud"],
    answer: "If something feels rushed, secretive, or payment-focused without proper verification, pause first. Students are often targeted through fake accommodation, bursaries, and job offers.",
    link: { href: "/student-advice/how-to-avoid-student-scams", label: "Read scam warning signs" },
  },
];

function findMatch(question: string): Match | null {
  const normalized = question.toLowerCase();
  const found = knowledge.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));
  return found ? { answer: found.answer, link: found.link, extraLinks: found.extraLinks } : null;
}

export default function AskUniHelpPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const match = useMemo(() => findMatch(question), [question]);

  return (
    <main className="article">
      <section className="card hero">
        <span className="tag">Ask UniHelp</span>
        <h1>Ask UniHelp a student question</h1>
        <p className="lede" style={{ maxWidth: 860 }}>
          This helper gives you a fast starting point when you feel too tired to browse the whole site.
          Ask about APS, NSFAS, bursaries, applications, course choices, psychometric tests, budgeting, or what to do after matric.
        </p>
      </section>

      <section className="card">
        <label htmlFor="question" style={{ fontWeight: 700, display: "block", marginBottom: 10 }}>
          Type your question
        </label>
        <textarea
          id="question"
          className="input"
          style={{ minHeight: 120, width: "100%" }}
          placeholder="Example: What should I do if my APS is too low for the course I want?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <button className="button" onClick={() => setSubmitted(true)}>
            Get help
          </button>
          <button
            className="button button--ghost"
            type="button"
            onClick={() => {
              setQuestion("");
              setSubmitted(false);
            }}
          >
            Reset
          </button>
        </div>

        <div style={{ marginTop: 16 }}>
          <p className="muted" style={{ marginBottom: 8 }}>Try one of these prompts:</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              "How do APS points work?",
              "How do I apply for NSFAS?",
              "What should I study after matric?",
              "How do I write a motivation letter?",
              "How do I prepare for psychometric tests?",
            ].map((prompt) => (
              <button key={prompt} className="button button--ghost" type="button" onClick={() => { setQuestion(prompt); setSubmitted(true); }}>
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {submitted ? (
        <section className="card">
          <h2 style={{ marginTop: 0 }}>Suggested direction</h2>
          <p>{match?.answer || "I do not have a direct match for that question yet, but the best next step is to browse Student Advice or the Tools section for a clearer route."}</p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            {match?.link ? (
              <Link href={match.link.href} className="button">
                {match.link.label}
              </Link>
            ) : (
              <Link href="/student-advice" className="button">
                Browse Student Advice
              </Link>
            )}
            <Link href="/tools" className="button button--ghost">
              Browse Tools
            </Link>
          </div>

          {match?.extraLinks?.length ? (
            <div style={{ marginTop: 18 }}>
              <h3 style={{ marginBottom: 10 }}>Useful related pages</h3>
              <ul className="check-list">
                {match.extraLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ) : null}
    </main>
  );
}
