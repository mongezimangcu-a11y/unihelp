"use client";

import { useMemo, useState } from "react";

const questions = [
  {
    id: "style",
    label: "Which activity sounds most natural to you?",
    options: [
      { label: "Solving problems with numbers or systems", value: "analytical" },
      { label: "Helping and guiding people", value: "people" },
      { label: "Creating ideas, stories, or designs", value: "creative" },
      { label: "Organising tasks and getting things done", value: "practical" },
    ],
  },
  {
    id: "energy",
    label: "What kind of work would you enjoy most?",
    options: [
      { label: "Researching and thinking deeply", value: "analytical" },
      { label: "Working with clients, learners, or communities", value: "people" },
      { label: "Building original content or campaigns", value: "creative" },
      { label: "Running operations, projects, or logistics", value: "practical" },
    ],
  },
  {
    id: "strength",
    label: "Which strength do people notice in you?",
    options: [
      { label: "Logical thinking", value: "analytical" },
      { label: "Empathy and communication", value: "people" },
      { label: "Imagination and expression", value: "creative" },
      { label: "Reliability and structure", value: "practical" },
    ],
  },
  {
    id: "environment",
    label: "Which environment sounds best to you?",
    options: [
      { label: "A technical or data-driven environment", value: "analytical" },
      { label: "A human-focused environment where relationships matter", value: "people" },
      { label: "A space where ideas and originality are valued", value: "creative" },
      { label: "A well-run environment with deadlines and coordination", value: "practical" },
    ],
  },
];

const resultMap = {
  analytical: {
    title: "Analytical builder",
    careers: ["Engineering", "Finance", "Data and technology", "Actuarial or quantitative fields"],
    studyIdeas: ["Engineering-related qualifications", "Computer science or IT", "Accounting or finance", "Maths-heavy diplomas or degrees"],
    nextSteps: "Explore maths-heavy or problem-solving pathways and compare university APS requirements carefully.",
  },
  people: {
    title: "People-focused contributor",
    careers: ["Teaching", "Psychology", "Human resources", "Social development or health support"],
    studyIdeas: ["Education", "Psychology pathways", "Human resource management", "Community and support fields"],
    nextSteps: "Look at careers where communication, care, training, or guidance matter every day.",
  },
  creative: {
    title: "Creative communicator",
    careers: ["Marketing", "Design", "Media", "Content and brand roles"],
    studyIdeas: ["Marketing", "Design or visual communication", "Media studies", "Creative short courses plus portfolio building"],
    nextSteps: "Build a portfolio, strengthen communication skills, and explore both formal qualifications and practical experience.",
  },
  practical: {
    title: "Practical organiser",
    careers: ["Operations", "Project support", "Supply chain", "Business administration"],
    studyIdeas: ["Business administration", "Logistics and supply chain", "Project support pathways", "Operations-related diplomas"],
    nextSteps: "Focus on structured environments where planning, execution, and consistency are strengths.",
  },
} as const;

type ResultKey = keyof typeof resultMap;
type AnswerMap = Record<string, ResultKey | "">;

export default function CareerFitAssessmentPage() {
  const [answers, setAnswers] = useState<AnswerMap>({
    style: "",
    energy: "",
    strength: "",
    environment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const resultKey = useMemo(() => {
    const counts: Record<ResultKey, number> = {
      analytical: 0,
      people: 0,
      creative: 0,
      practical: 0,
    };

    Object.values(answers).forEach((value) => {
      if (value) counts[value] += 1;
    });

    return (Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "analytical") as ResultKey;
  }, [answers]);

  const allAnswered = Object.values(answers).every(Boolean);
  const result = resultMap[resultKey];

  return (
    <main className="article">
      <section className="card hero">
        <span className="tag">Assessment</span>
        <h1>Career Fit Assessment</h1>
        <p className="lede" style={{ maxWidth: 860 }}>
          This is a light self-assessment, not a formal psychometric diagnosis. Use it to think about the kind of work and study environment
          that may suit you, then compare that with your marks, APS, funding reality, and actual course requirements.
        </p>
      </section>

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Answer honestly</h2>
        <div style={{ display: "grid", gap: 18, marginTop: 16 }}>
          {questions.map((question) => (
            <div key={question.id}>
              <div style={{ fontWeight: 700, marginBottom: 10 }}>{question.label}</div>
              <div style={{ display: "grid", gap: 10 }}>
                {question.options.map((option) => (
                  <label key={option.label} className="option-card">
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      checked={answers[question.id] === option.value}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: option.value as ResultKey,
                        }))
                      }
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
          <button className="button" onClick={() => setSubmitted(true)} disabled={!allAnswered}>
            See my result
          </button>
          <button
            className="button button--ghost"
            onClick={() => {
              setAnswers({ style: "", energy: "", strength: "", environment: "" });
              setSubmitted(false);
            }}
            type="button"
          >
            Reset
          </button>
        </div>
      </section>

      {submitted ? (
        <section className="card">
          <span className="tag">Your result</span>
          <h2 style={{ marginBottom: 10 }}>{result.title}</h2>
          <p>{result.nextSteps}</p>

          <div className="home-grid-2" style={{ marginTop: 16 }}>
            <div>
              <h3>Career directions to explore</h3>
              <ul className="check-list">
                {result.careers.map((career) => (
                  <li key={career}>{career}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Study ideas to research</h3>
              <ul className="check-list">
                {result.studyIdeas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="muted" style={{ marginBottom: 0 }}>
            Use this result as a starting point. Then compare actual subject strengths, APS requirements, funding options,
            and university pathways before making a final decision.
          </p>
        </section>
      ) : null}
    </main>
  );
}
