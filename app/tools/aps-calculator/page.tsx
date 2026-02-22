"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Subject = {
  id: string;
  name: string;
  mark: string; // string for controlled input
};

type DegreeKey =
  | "engineering"
  | "medicine"
  | "healthSciences"
  | "commerce"
  | "law"
  | "education"
  | "humanities"
  | "it";

type UniPresetKey = "custom" | "uct" | "wits" | "up";

const DEGREE_HINTS: Record<
  DegreeKey,
  {
    label: string;
    requirements: Array<
      | { kind: "maths"; text: string }
      | { kind: "physSci"; text: string }
      | { kind: "lifeSci"; text: string }
      | { kind: "language"; text: string }
      | { kind: "general"; text: string }
    >;
    notes?: string[];
  }
> = {
  engineering: {
    label: "Engineering",
    requirements: [
      { kind: "maths", text: "Mathematics (not Mathematical Literacy)" },
      { kind: "physSci", text: "Physical Sciences is usually required" },
      { kind: "language", text: "Strong language marks help (Home Language + FAL)" },
    ],
    notes: ["Requirements differ by university and programme. Always confirm."],
  },
  medicine: {
    label: "Medicine (MBChB)",
    requirements: [
      { kind: "maths", text: "Mathematics (not Mathematical Literacy)" },
      { kind: "physSci", text: "Physical Sciences" },
      { kind: "lifeSci", text: "Life Sciences" },
      { kind: "language", text: "Strong language marks often matter" },
    ],
    notes: ["Selection is competitive; APS is only one part of admission."],
  },
  healthSciences: {
    label: "Health Sciences",
    requirements: [
      { kind: "maths", text: "Mathematics often preferred (varies by programme)" },
      { kind: "general", text: "Science subjects often required (depends on programme)" },
    ],
  },
  commerce: {
    label: "Commerce (BCom)",
    requirements: [
      { kind: "maths", text: "Mathematics is often required (varies by university)" },
      { kind: "language", text: "Language marks can affect selection/ranking" },
    ],
    notes: ["Some programmes accept Math Lit with conditions."],
  },
  law: {
    label: "Law (LLB)",
    requirements: [
      { kind: "language", text: "Strong language marks often matter" },
      { kind: "general", text: "Usually no strict Maths/Science requirements" },
    ],
  },
  education: {
    label: "Education (BEd)",
    requirements: [
      { kind: "general", text: "Requirements depend on phase/major" },
      { kind: "language", text: "Language marks are important (teaching + comprehension)" },
    ],
  },
  humanities: {
    label: "Humanities / Social Sciences",
    requirements: [
      { kind: "general", text: "Usually no strict Maths/Science requirements" },
      { kind: "language", text: "Language marks often matter" },
    ],
  },
  it: {
    label: "IT / Computer Science",
    requirements: [
      { kind: "maths", text: "Mathematics often required for Computer Science degrees" },
      { kind: "general", text: "IT diplomas may be more flexible than CS degrees" },
    ],
    notes: ["Check each university: CS is usually stricter than IT."],
  },
};

const UNI_PRESETS: Record<
  UniPresetKey,
  {
    label: string;
    includeLO: boolean;
    countMode: 6 | 7;
    defaultDegree?: DegreeKey;
    note: string;
  }
> = {
  custom: {
    label: "Custom",
    includeLO: false,
    countMode: 6,
    note: "You can set your own rules here.",
  },
  uct: {
    label: "UCT",
    includeLO: false,
    countMode: 6,
    defaultDegree: "engineering",
    note: "Preset applies: best 6 subjects counted, LO excluded (general guideline).",
  },
  wits: {
    label: "Wits",
    includeLO: false,
    countMode: 6,
    defaultDegree: "medicine",
    note: "Preset applies: best 6 subjects counted, LO excluded (general guideline).",
  },
  up: {
    label: "UP",
    includeLO: true,
    countMode: 6,
    defaultDegree: "commerce",
    note: "Preset applies: best 6 subjects counted, LO included (general guideline).",
  },
};

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

function clampPercent(n: number) {
  if (Number.isNaN(n)) return 0;
  if (n < 0) return 0;
  if (n > 100) return 100;
  return n;
}

// Common APS points table (generic)
function apsFromMark(mark: number) {
  const m = clampPercent(mark);
  if (m >= 80) return 7;
  if (m >= 70) return 6;
  if (m >= 60) return 5;
  if (m >= 50) return 4;
  if (m >= 40) return 3;
  if (m >= 30) return 2;
  return 1;
}

function safeNumber(value: string): number | null {
  if (value.trim() === "") return null;
  const n = Number(value);
  if (Number.isNaN(n)) return null;
  return n;
}

function normalize(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

function isLifeOrientation(name: string) {
  const s = normalize(name);
  return s === "life orientation" || s === "lo";
}

function isPhysicalSciences(name: string) {
  const s = normalize(name);
  return (
    s === "physical sciences" ||
    s === "physics" ||
    s === "physical science" ||
    s.includes("physical sciences") ||
    (s.includes("physical") && s.includes("science"))
  );
}

function isLifeSciences(name: string) {
  const s = normalize(name);
  return (
    s === "life sciences" ||
    s === "life science" ||
    s === "biology" ||
    s.includes("life sciences") ||
    (s.includes("life") && s.includes("science"))
  );
}

function isHomeLanguage(name: string) {
  const s = normalize(name);
  return s.includes("home language");
}

function isFirstAdditionalLanguage(name: string) {
  const s = normalize(name);
  return s.includes("first additional language") || s.includes("fal");
}

export default function APSCalculatorPage() {
  const [mathType, setMathType] = useState<"maths" | "mathsLit">("maths");
  const [includeLO, setIncludeLO] = useState(false);
  const [countSubjects, setCountSubjects] = useState<6 | 7>(6);

  const [preset, setPreset] = useState<UniPresetKey>("custom");
  const [targetDegree, setTargetDegree] = useState<DegreeKey>("engineering");

  const [subjects, setSubjects] = useState<Subject[]>([
    { id: uid(), name: "Home Language", mark: "" },
    { id: uid(), name: "First Additional Language", mark: "" },
    { id: uid(), name: "Mathematics", mark: "" },
    { id: uid(), name: "Subject 4", mark: "" },
    { id: uid(), name: "Subject 5", mark: "" },
    { id: uid(), name: "Subject 6", mark: "" },
    { id: uid(), name: "Subject 7", mark: "" },
  ]);

  // Apply preset changes
  useEffect(() => {
    const p = UNI_PRESETS[preset];
    if (!p) return;

    setIncludeLO(p.includeLO);
    setCountSubjects(p.countMode);
    if (p.defaultDegree) setTargetDegree(p.defaultDegree);
  }, [preset]);

  function updateSubject(id: string, patch: Partial<Subject>) {
    setSubjects((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  }

  const computed = useMemo(() => {
    const parsed = subjects.map((s) => {
      const num = safeNumber(s.mark);
      const mark = num === null ? null : clampPercent(num);
      const points = mark === null ? null : apsFromMark(mark);
      const excludedByLO = !includeLO && isLifeOrientation(s.name);
      return { ...s, markNumber: mark, points, excludedByLO };
    });

    const eligible = parsed
      .filter((s) => s.points !== null)
      .filter((s) => !s.excludedByLO)
      .sort((a, b) => (b.points ?? 0) - (a.points ?? 0));

    const used = eligible.slice(0, countSubjects);
    const total = used.reduce((sum, s) => sum + (s.points ?? 0), 0);
    const missing = Math.max(0, countSubjects - used.length);

    const entered = parsed.filter((s) => s.markNumber !== null);

    const hasPhysical = entered.some((s) => isPhysicalSciences(s.name));
    const hasLifeSci = entered.some((s) => isLifeSciences(s.name));
    const hasHL = entered.some((s) => isHomeLanguage(s.name));
    const hasFAL = entered.some((s) => isFirstAdditionalLanguage(s.name));

    const hasMaths =
      mathType === "maths" ||
      entered.some((s) => {
        const n = normalize(s.name);
        return n === "mathematics" || n === "maths" || n === "pure maths";
      });

    const hasMathLit =
      mathType === "mathsLit" ||
      entered.some((s) => {
        const n = normalize(s.name);
        return n === "mathematical literacy" || n === "math lit" || n === "math literacy";
      });

    return {
      parsed,
      used,
      total,
      missing,
      signals: { hasPhysical, hasLifeSci, hasHL, hasFAL, hasMaths, hasMathLit },
    };
  }, [subjects, includeLO, countSubjects, mathType]);

  function applyMathType(next: "maths" | "mathsLit") {
    setMathType(next);
    setSubjects((prev) =>
      prev.map((s) => {
        const lower = normalize(s.name);
        const isMathRow =
          lower === "mathematics" ||
          lower === "mathematical literacy" ||
          lower === "maths" ||
          lower === "math lit" ||
          lower === "math literacy";

        if (!isMathRow) return s;

        return {
          ...s,
          name: next === "maths" ? "Mathematics" : "Mathematical Literacy",
        };
      })
    );
  }

  const hintStatus = useMemo(() => {
    const sig = computed.signals;

    const mathsOk = sig.hasMaths && !sig.hasMathLit;
    const physOk = sig.hasPhysical;
    const lifeOk = sig.hasLifeSci;
    const languageOk = sig.hasHL && sig.hasFAL;

    const mathLitWarningDegrees: DegreeKey[] = ["engineering", "medicine", "it"];
    const showMathLitWarning = sig.hasMathLit && mathLitWarningDegrees.includes(targetDegree);

    return { mathsOk, physOk, lifeOk, languageOk, showMathLitWarning };
  }, [computed.signals, targetDegree]);

  function StatusLine({
    ok,
    text,
    warnText,
  }: {
    ok: boolean;
    text: string;
    warnText?: string;
  }) {
    return (
      <li>
        <span style={{ fontWeight: 900, marginRight: 8 }}>{ok ? "✅" : "⚠️"}</span>
        {ok ? text : warnText ?? text}
      </li>
    );
  }

  const presetInfo = UNI_PRESETS[preset];

  return (
    <main className="article">
      <section style={{ marginBottom: 18 }}>
        <div className="card">
          <h1 style={{ marginBottom: 10 }}>APS Calculator</h1>

          <p style={{ color: "var(--text-muted)", maxWidth: 820, marginTop: 0 }}>
            Enter your marks to estimate APS using a common points table. Universities can
            calculate APS differently — always confirm official requirements.
          </p>

          {/* Preset */}
          <div style={{ marginTop: 12 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>University preset</div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value as UniPresetKey)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 12,
                  border: "1px solid var(--border-soft)",
                  background: "var(--bg-card)",
                }}
              >
                {Object.entries(UNI_PRESETS).map(([key, p]) => (
                  <option key={key} value={key}>
                    {p.label}
                  </option>
                ))}
              </select>

              <span style={{ color: "var(--text-muted)", fontSize: 14 }}>
                {presetInfo.note}
              </span>

              {preset !== "custom" ? (
                <button
                  className="button"
                  onClick={() => setPreset("custom")}
                  style={{ padding: "10px 12px" }}
                >
                  Switch to Custom
                </button>
              ) : null}
            </div>
          </div>

          {/* Math choice */}
          <div style={{ marginTop: 14 }}>
            <div style={{ fontWeight: 800, marginBottom: 8 }}>Math subject</div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="radio"
                  name="mathType"
                  checked={mathType === "maths"}
                  onChange={() => applyMathType("maths")}
                />
                Mathematics
              </label>

              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="radio"
                  name="mathType"
                  checked={mathType === "mathsLit"}
                  onChange={() => applyMathType("mathsLit")}
                />
                Mathematical Literacy
              </label>
            </div>

            <p style={{ fontSize: 14, marginTop: 8, color: "var(--text-muted)" }}>
              ⚠️ Many degrees (e.g. Engineering, Medicine) usually require{" "}
              <strong>Mathematics</strong>, not Math Lit.
            </p>
          </div>

          {/* Options */}
          <div
            style={{
              marginTop: 12,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                type="checkbox"
                checked={includeLO}
                onChange={(e) => {
                  setIncludeLO(e.target.checked);
                  setPreset("custom");
                }}
              />
              Include Life Orientation (LO)
            </label>

            <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
              Count best
              <select
                value={countSubjects}
                onChange={(e) => {
                  setCountSubjects(Number(e.target.value) === 7 ? 7 : 6);
                  setPreset("custom");
                }}
              >
                <option value={6}>6 subjects</option>
                <option value={7}>7 subjects</option>
              </select>
              for APS
            </label>
          </div>

          {/* Degree requirement hints */}
          <div className="card" style={{ marginTop: 16, padding: 14 }}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <h2 style={{ margin: 0, fontSize: 18 }}>Degree requirements (smart hints)</h2>

              <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                Target:
                <select
                  value={targetDegree}
                  onChange={(e) => setTargetDegree(e.target.value as DegreeKey)}
                >
                  {Object.entries(DEGREE_HINTS).map(([key, v]) => (
                    <option key={key} value={key}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <p style={{ marginTop: 10, color: "var(--text-muted)" }}>
              These hints update based on the subject names you type (e.g., “Physical Sciences”).
            </p>

            <ul style={{ marginTop: 10 }}>
              {DEGREE_HINTS[targetDegree].requirements.map((r, idx) => {
                if (r.kind === "maths") {
                  return (
                    <StatusLine
                      key={idx}
                      ok={hintStatus.mathsOk}
                      text={r.text}
                      warnText={
                        computed.signals.hasMathLit
                          ? "Mathematical Literacy detected — many programmes require Mathematics."
                          : "Mathematics not detected yet (or you selected Math Lit)."
                      }
                    />
                  );
                }

                if (r.kind === "physSci") {
                  return (
                    <StatusLine
                      key={idx}
                      ok={hintStatus.physOk}
                      text={r.text}
                      warnText="Physical Sciences not detected yet — type “Physical Sciences” if you take it."
                    />
                  );
                }

                if (r.kind === "lifeSci") {
                  return (
                    <StatusLine
                      key={idx}
                      ok={hintStatus.lifeOk}
                      text={r.text}
                      warnText="Life Sciences not detected yet — type “Life Sciences” if you take it."
                    />
                  );
                }

                if (r.kind === "language") {
                  return (
                    <StatusLine
                      key={idx}
                      ok={hintStatus.languageOk}
                      text={r.text}
                      warnText="Tip: Use “Home Language” and “First Additional Language” in the subject names."
                    />
                  );
                }

                return <li key={idx}>{r.text}</li>;
              })}
            </ul>

            {DEGREE_HINTS[targetDegree].notes?.length ? (
              <>
                <div style={{ marginTop: 8, color: "var(--text-muted)" }}>
                  <strong>Notes:</strong>
                </div>
                <ul style={{ marginTop: 6 }}>
                  {DEGREE_HINTS[targetDegree].notes!.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </>
            ) : null}

            {hintStatus.showMathLitWarning ? (
              <p style={{ marginTop: 10 }}>
                <strong>Heads up:</strong> You selected <strong>Mathematical Literacy</strong>.
                Many programmes in this category usually require <strong>Mathematics</strong>.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Enter your marks</h2>

        <div className="card" style={{ padding: 12 }}>
          <div style={{ display: "grid", gap: 10 }}>
            {computed.parsed.map((s) => (
              <div
                key={s.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 140px 140px",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <input
                  value={s.name}
                  onChange={(e) => updateSubject(s.id, { name: e.target.value })}
                  placeholder="Subject name"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: "1px solid var(--border-soft)",
                    background: "var(--bg-card)",
                  }}
                />

                <input
                  value={s.mark}
                  onChange={(e) => updateSubject(s.id, { mark: e.target.value })}
                  placeholder="%"
                  inputMode="numeric"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: "1px solid var(--border-soft)",
                    background: "var(--bg-card)",
                  }}
                />

                <div style={{ color: "var(--text-muted)" }}>
                  {s.markNumber === null ? "—" : `${s.points} pts`}
                  {!includeLO && s.excludedByLO ? " (LO excluded)" : ""}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ marginBottom: 10 }}>Your estimated APS</h2>

        <div className="card">
          <div style={{ fontSize: 42, fontWeight: 900, marginBottom: 6 }}>
            {computed.total}
          </div>

          <div style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
            Using your best <strong>{countSubjects}</strong> subjects
            {includeLO ? " (including LO if entered)" : " (excluding LO)"}.
            {computed.missing > 0 ? (
              <>
                {" "}
                Add at least <strong>{computed.missing}</strong> more subject
                {computed.missing === 1 ? "" : "s"} with marks to complete the calculation.
              </>
            ) : null}
          </div>

          <hr />

          <div style={{ color: "var(--text-muted)" }}>
            <strong>Subjects counted:</strong>
          </div>

          <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
            {computed.used.length === 0 ? (
              <div style={{ color: "var(--text-muted)" }}>
                Enter marks above to see your APS.
              </div>
            ) : (
              computed.used.map((s) => (
                <div key={s.id} className="card" style={{ padding: 12, borderRadius: 14 }}>
                  <div style={{ fontWeight: 800, marginBottom: 4 }}>{s.name}</div>
                  <div style={{ color: "var(--text-muted)" }}>
                    {s.markNumber}% → <strong>{s.points} points</strong>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Next steps CTA */}
      <section style={{ marginTop: 18 }}>
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Next steps</h2>
          <p style={{ color: "var(--text-muted)", marginTop: 6, maxWidth: 820 }}>
            Now that you have an estimate, here are the best places to go next.
          </p>

          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            <Link href="/matric" style={{ textDecoration: "none", display: "block" }}>
              <div className="card" style={{ padding: 14, borderRadius: 14, cursor: "pointer" }}>
                <div style={{ fontWeight: 900, marginBottom: 6 }}>Read Matric guides</div>
                <div style={{ color: "var(--text-muted)" }}>
                  Pass types, APS, diploma vs degree, rewrite & upgrade options.
                </div>
              </div>
            </Link>

            <Link href="/nsfas" style={{ textDecoration: "none", display: "block" }}>
              <div className="card" style={{ padding: 14, borderRadius: 14, cursor: "pointer" }}>
                <div style={{ fontWeight: 900, marginBottom: 6 }}>Check NSFAS help</div>
                <div style={{ color: "var(--text-muted)" }}>
                  Eligibility, documents, appeals, and what NSFAS covers.
                </div>
              </div>
            </Link>

            <Link
              href="/matric/how-do-aps-points-work"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="card" style={{ padding: 14, borderRadius: 14, cursor: "pointer" }}>
                <div style={{ fontWeight: 900, marginBottom: 6 }}>Learn how APS points work</div>
                <div style={{ color: "var(--text-muted)" }}>
                  See how marks convert to points and what universities usually count.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}