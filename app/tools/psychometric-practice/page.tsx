"use client";

import { useMemo, useState } from "react";

const memorySequence = [3, 7, 1, 9, 4];
const patternQuestion = {
  prompt: "Which number should come next: 2, 4, 8, 16, ?",
  answer: "32",
};
const verbalQuestion = {
  prompt: "Choose the word that is closest in meaning to 'reliable'.",
  options: ["careless", "dependable", "unclear", "restless"],
  answer: "dependable",
};

export default function PsychometricPracticePage() {
  const [memoryInput, setMemoryInput] = useState("");
  const [memoryChecked, setMemoryChecked] = useState(false);
  const [patternInput, setPatternInput] = useState("");
  const [patternChecked, setPatternChecked] = useState(false);
  const [verbalInput, setVerbalInput] = useState("");
  const [verbalChecked, setVerbalChecked] = useState(false);

  const memoryCorrect = useMemo(
    () => memoryInput.replaceAll(" ", "") === memorySequence.join(""),
    [memoryInput]
  );
  const patternCorrect = patternInput.trim() === patternQuestion.answer;
  const verbalCorrect = verbalInput.trim().toLowerCase() === verbalQuestion.answer;
  const score = Number(memoryChecked && memoryCorrect) + Number(patternChecked && patternCorrect) + Number(verbalChecked && verbalCorrect);

  return (
    <main className="article">
      <section className="card hero">
        <span className="tag">Practice Hub</span>
        <h1>Psychometric Practice</h1>
        <p className="lede" style={{ maxWidth: 850 }}>
          Warm up your memory, pattern recognition, verbal reasoning, and calm thinking. This is a practice area
          for students preparing for bursaries, internships, graduate programmes, and other assessments.
        </p>
      </section>

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Memory exercise</h2>
        <p>Look at this number sequence for a few seconds, then type it from memory:</p>
        <div className="mini-panel" style={{ fontSize: 28, fontWeight: 800, letterSpacing: 6 }}>
          {memorySequence.join(" ")}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <input
            className="input"
            value={memoryInput}
            onChange={(e) => setMemoryInput(e.target.value)}
            placeholder="Type the full sequence"
          />
          <button className="button" onClick={() => setMemoryChecked(true)}>
            Check memory answer
          </button>
        </div>
        {memoryChecked ? (
          <p style={{ marginTop: 12 }}>
            {memoryCorrect ? "Nice work — you remembered the sequence." : `Not quite. The correct sequence is ${memorySequence.join(" ")}.`}
          </p>
        ) : null}
      </section>

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Pattern recognition</h2>
        <p>{patternQuestion.prompt}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <input
            className="input"
            value={patternInput}
            onChange={(e) => setPatternInput(e.target.value)}
            placeholder="Your answer"
          />
          <button className="button" onClick={() => setPatternChecked(true)}>
            Check pattern answer
          </button>
        </div>
        {patternChecked ? (
          <p style={{ marginTop: 12 }}>
            {patternCorrect ? "Correct — the pattern doubles each time." : "The correct answer is 32. The sequence keeps doubling."}
          </p>
        ) : null}
      </section>

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Verbal reasoning</h2>
        <p>{verbalQuestion.prompt}</p>
        <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
          {verbalQuestion.options.map((option) => (
            <label key={option} className="option-card">
              <input type="radio" name="verbal" value={option} checked={verbalInput === option} onChange={() => setVerbalInput(option)} />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="button" onClick={() => setVerbalChecked(true)}>
            Check verbal answer
          </button>
        </div>
        {verbalChecked ? (
          <p style={{ marginTop: 12 }}>
            {verbalCorrect ? "Correct — dependable is the closest meaning." : "The best answer is dependable, because it means trustworthy or reliable."}
          </p>
        ) : null}
      </section>

      <section className="card">
        <h2 style={{ marginTop: 0 }}>Your current score</h2>
        <p>
          {score} / 3 correct. Use this score as a warm-up marker, not as a final judgement of your ability.
        </p>
        <ul className="check-list">
          <li>Practice in short sessions and focus on accuracy first.</li>
          <li>Once you understand the pattern, add time pressure gradually.</li>
          <li>Do not panic when one question feels difficult — move on and come back if you can.</li>
          <li>Combine practice with the UniHelp guide on psychometric test preparation.</li>
        </ul>
      </section>
    </main>
  );
}
