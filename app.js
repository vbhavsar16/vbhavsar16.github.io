import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

const navLinks = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "projects", label: "Projects" },
  { id: "learning", label: "Learning Notes" },
  { id: "adventures", label: "Adventures" },
  { id: "publications", label: "Publications" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    role: "Applied Data Scientist",
    company: "Microsoft",
    period: "Nov 2024 - Present",
    location: "Remote",
    points: [
      "Led design and deployment of Trial Deputy Assistant (TDA), an agentic RAG system for court-safe, auditable, page-level cited answers.",
      "Designed multi-knowledge-base architecture and deterministic source attribution for defensible legal workflows.",
      "Built evaluation pipelines spanning OCR quality, retrieval quality, and acceptance metrics for production readiness.",
      "Enabled prosecutor training and reusable templates for mission-critical AI adoption.",
    ],
  },
  {
    role: "Data Scientist (CTO Office)",
    company: "Coherent Corp.",
    period: "May 2024 - Nov 2024",
    location: "Santa Clara, CA",
    points: [
      "Designed RA-FSM: a reliability loop controlling retrieve/abstain/answer behavior in domain-specific assistants.",
      "Implemented claim-to-evidence audit tables with closed-world citation controls to improve trust and reviewability.",
      "Built reusable reliability components including retrieval controller, abstention policy, evidence viewer, and metrics logger.",
    ],
  },
];

const projects = [
  {
    title: "Trial Deputy Assistant (TDA)",
    subtitle: "Agentic RAG for high-stakes legal workflows",
    stack: "Azure Gov, RAG, OCR, Evaluation, SAFE AI",
    summary:
      "Production assistant for prosecutors that answers questions across reports, transcripts, and exhibits with deterministic citations.",
  },
  {
    title: "RA-FSM",
    subtitle: "Hallucination-resistant research assistant",
    stack: "LLMs, Retrieval, Finite-State Control",
    summary:
      "Reliability loop that improved retrieval quality and citation consistency while reducing unsupported claims.",
  },
  {
    title: "CropCatalyst",
    subtitle: "UN + Salesforce Reboot the Earth Challenge",
    stack: "Scikit-learn, XGBoost, CatBoost",
    summary:
      "Crop-yield prediction and optimization assistant with practical, local-language recommendations for farmers.",
    link: "https://github.com/vbhavsar16/CropCatalyst",
  },
];

const publications = [
  "Bhavsar, V., & Jadamec, M. Dynamic variations in the zone of influence of the slab (in preparation), 2026.",
  "Bhavsar, V., Ereifej, J., Gurusami, A. Hallucination-Resistant, Domain-Specific Research Assistant with Self-Evaluation and Vector-Grounded Retrieval. arXiv:2510.02326, 2025.",
  "Bhavsar, V., Jadamec, M., Knepley, M. Influence of initial slab dip, plate interface coupling, and nonlinear rheology on dynamic weakening at the lithosphere-asthenosphere boundary. JGR Solid Earth, 2025.",
];

const defaultProfile = {
  name: "Vivek Bhavsar",
  tagline: "Applied Data Scientist | LLMs, RAG, Production ML",
  headline: "Building reliable AI systems while sharing what I learn along the way.",
  summary:
    "I build production-grade ML and agentic RAG systems for high-stakes workflows. This site is both my portfolio and my learning playground.",
  location: "Fremont, CA",
  email: "imvivek1695@gmail.com",
  phone: "+1 (845) 821-0998",
  linkedin: "https://www.linkedin.com/in/vivekubuf/",
  github: "https://github.com/vbhavsar16",
  cvFile: "CV.pdf",
  professionalPhoto: "data/photos/professional/main.jpg",
  heroFallbackPhoto: "profile.jpg",
};

const impactStats = [
  {
    title: "Retrieval quality uplift",
    value: "~25%",
    note: "from baseline to final validated stack",
  },
  {
    title: "Citation precision uplift",
    value: "~29%",
    note: "with hybrid retrieval + validation pipeline",
  },
  {
    title: "Unsupported claims reduced",
    value: "~83%",
    note: "through evidence packet + validator",
  },
  {
    title: "End-to-end latency increase",
    value: "~43%",
    note: "tradeoff accepted for reliability in high-stakes use",
  },
];

function Section({ id, title, subtitle, children }) {
  return React.createElement(
    "section",
    { id, className: "section" },
    React.createElement("h2", null, title),
    subtitle ? React.createElement("p", { className: "section-subtitle" }, subtitle) : null,
    children,
  );
}

function Card({ children, className = "" }) {
  return React.createElement("article", { className: `card ${className}`.trim() }, children);
}

async function safeFetchJson(path, fallback) {
  try {
    const res = await fetch(path);
    if (!res.ok) return fallback;
    return await res.json();
  } catch {
    return fallback;
  }
}

function App() {
  const [profile, setProfile] = useState(defaultProfile);
  const [notes, setNotes] = useState([]);
  const [adventures, setAdventures] = useState([]);
  const [photoSrc, setPhotoSrc] = useState(defaultProfile.professionalPhoto);

  useEffect(() => {
    safeFetchJson("data/profile.json", defaultProfile).then((data) => {
      const merged = { ...defaultProfile, ...data };
      setProfile(merged);
      setPhotoSrc(merged.professionalPhoto || merged.heroFallbackPhoto);
    });
    safeFetchJson("data/notes/notes.json", []).then(setNotes);
    safeFetchJson("data/adventures/adventures.json", []).then(setAdventures);
  }, []);

  const sortedNotes = useMemo(
    () => [...notes].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [notes],
  );

  const sortedAdventures = useMemo(
    () => [...adventures].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [adventures],
  );

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "header",
      { className: "topbar" },
      React.createElement("a", { href: "#", className: "brand" }, profile.name),
      React.createElement(
        "nav",
        null,
        navLinks.map((link) =>
          React.createElement("a", { key: link.id, href: `#${link.id}` }, link.label),
        ),
      ),
    ),

    React.createElement(
      "main",
      { className: "container" },
      React.createElement(
        "section",
        { className: "hero" },
        React.createElement("img", {
          src: photoSrc,
          alt: `${profile.name} professional portrait`,
          className: "avatar",
          onError: () => setPhotoSrc(profile.heroFallbackPhoto),
        }),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "eyebrow" }, profile.tagline),
          React.createElement("h1", null, profile.headline),
          React.createElement("p", { className: "lead" }, profile.summary),
          React.createElement(
            "div",
            { className: "cta" },
            React.createElement("a", { href: profile.cvFile, className: "btn btn-primary" }, "Download CV"),
            React.createElement("a", { href: profile.github, className: "btn", target: "_blank", rel: "noreferrer" }, "GitHub"),
            React.createElement("a", { href: profile.linkedin, className: "btn", target: "_blank", rel: "noreferrer" }, "LinkedIn"),
            React.createElement("a", { href: "#learning", className: "btn" }, "Open Learning Notes"),
          ),
          React.createElement("p", { className: "playful" }, "⚡ Portfolio by profession, learning log by passion."),
        ),
      ),

      React.createElement(
        Section,
        {
          id: "about",
          title: "About",
          subtitle:
            "I like shipping production systems, explaining what I learn, and balancing it with tennis and outdoor adventures.",
        },
        React.createElement(
          "div",
          { className: "chips" },
          React.createElement("span", null, "LLM Applications"),
          React.createElement("span", null, "RAG Reliability"),
          React.createElement("span", null, "Evaluation & Auditability"),
          React.createElement("span", null, "Cloud + MLOps"),
          React.createElement("span", null, "Scientific ML"),
        ),
      ),

      React.createElement(
        Section,
        {
          id: "impact",
          title: "RAG Reliability Impact (Internal, Not Yet Published)",
          subtitle:
            "Numbers shown as directional percentage shifts only. Raw experimental values are intentionally omitted.",
        },
        React.createElement(
          "div",
          { className: "cards grid-2" },
          impactStats.map((item) =>
            React.createElement(
              Card,
              { key: item.title, className: "impact-card" },
              React.createElement("p", { className: "impact-label" }, item.title),
              React.createElement("p", { className: "impact-value" }, item.value),
              React.createElement("p", { className: "meta" }, item.note),
            ),
          ),
        ),
      ),

      React.createElement(
        Section,
        { id: "projects", title: "Selected Projects" },
        React.createElement(
          "div",
          { className: "cards grid-2" },
          projects.map((proj) =>
            React.createElement(
              Card,
              { key: proj.title },
              React.createElement("h3", null, proj.title),
              React.createElement("p", { className: "meta" }, proj.subtitle),
              React.createElement("p", null, proj.summary),
              React.createElement("p", { className: "stack" }, proj.stack),
              proj.link
                ? React.createElement("a", { href: proj.link, target: "_blank", rel: "noreferrer" }, "View repository →")
                : null,
            ),
          ),
        ),
      ),

      React.createElement(
        Section,
        { id: "learning", title: "Learning Notes", subtitle: "A running notebook of what I study and test." },
        React.createElement(
          "div",
          { className: "cards grid-2" },
          sortedNotes.length
            ? sortedNotes.map((note) =>
                React.createElement(
                  Card,
                  { key: note.title },
                  React.createElement("h3", null, note.title),
                  React.createElement("p", { className: "meta" }, note.date),
                  React.createElement("p", null, note.summary),
                  React.createElement(
                    "div",
                    { className: "chips" },
                    (note.tags || []).map((tag) => React.createElement("span", { key: `${note.title}-${tag}` }, tag)),
                  ),
                  note.file ? React.createElement("a", { href: note.file, target: "_blank", rel: "noreferrer" }, "Open note →") : null,
                ),
              )
            : React.createElement("p", { className: "meta" }, "No notes loaded yet. Add entries in data/notes/notes.json."),
        ),
      ),

      React.createElement(
        Section,
        { id: "adventures", title: "Adventures", subtitle: "Tennis, travel, and moments that keep me curious." },
        React.createElement(
          "div",
          { className: "cards grid-3" },
          sortedAdventures.length
            ? sortedAdventures.map((trip) =>
                React.createElement(
                  Card,
                  { key: `${trip.title}-${trip.date}` },
                  React.createElement("img", {
                    src: trip.image,
                    alt: trip.title,
                    className: "adventure-photo",
                  }),
                  React.createElement("h3", null, trip.title),
                  React.createElement("p", { className: "meta" }, `${trip.location} • ${trip.date}`),
                  React.createElement("p", null, trip.caption),
                ),
              )
            : React.createElement("p", { className: "meta" }, "No adventure photos loaded yet. Add items in data/adventures/adventures.json."),
        ),
      ),

      React.createElement(
        Section,
        { id: "publications", title: "Publications & Talks" },
        React.createElement(
          "ul",
          { className: "pubs" },
          publications.map((pub) => React.createElement("li", { key: pub }, pub)),
        ),
      ),

      React.createElement(
        Section,
        { id: "contact", title: "Contact" },
        React.createElement("p", null, profile.location),
        React.createElement("p", null, React.createElement("a", { href: `mailto:${profile.email}` }, profile.email)),
        React.createElement("p", null, profile.phone),
      ),

      React.createElement(
        Section,
        { id: "experience", title: "Experience Snapshot" },
        React.createElement(
          "div",
          { className: "cards" },
          experiences.map((exp) =>
            React.createElement(
              Card,
              { key: `${exp.role}-${exp.company}` },
              React.createElement("h3", null, exp.role),
              React.createElement("p", { className: "meta" }, `${exp.company} • ${exp.location} • ${exp.period}`),
              React.createElement(
                "ul",
                null,
                exp.points.map((point) => React.createElement("li", { key: point }, point)),
              ),
            ),
          ),
        ),
      ),
    ),

    React.createElement(
      "footer",
      { className: "footer" },
      React.createElement("p", null, `© ${new Date().getFullYear()} ${profile.name}`),
      React.createElement("p", { className: "meta" }, "Content locations documented in CONTENT_GUIDE.md"),
    ),
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
