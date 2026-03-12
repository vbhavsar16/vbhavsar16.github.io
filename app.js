import React from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "contact", label: "Contact" },
];

const experiences = [
  {
    role: "Applied Data Scientist",
    company: "Microsoft",
    period: "Nov 2024 - Present",
    location: "Remote",
    points: [
      "Led design and deployment of a court-safe, agentic Trial Deputy Assistant (TDA), a production RAG system on Azure Government with auditable, page-level citations.",
      "Designed multi-knowledge-base architecture (Global KB, My KB, Cases-ready) with deterministic source attribution and metadata registries.",
      "Established evaluation stack (OCR CER, boundary F1, retrieval MRR, acceptance rates) and enabled workforce adoption with templates and training.",
      "Scaled PII redaction and NER workflows with PyTorch + ONNX and improved compliance posture for sensitive records.",
    ],
  },
  {
    role: "Data Scientist (CTO Office)",
    company: "Coherent Corp.",
    period: "May 2024 - Nov 2024",
    location: "Santa Clara, CA",
    points: [
      "Designed RA-FSM, a finite-state RAG assistant controlling retrieve/abstain/answer behavior.",
      "Introduced closed-world citations with claim→evidence audit tables to improve reviewability and citation fidelity.",
      "Built reusable reliable-RAG components: retrieval controller, abstention policy, evidence viewer, and metrics logger.",
      "Increased wafer testing efficiency by 70% via automation and Python-based analytics applications.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Qwarke, Inc.",
    period: "Feb 2024 - Jul 2024",
    location: "St. Petersburg, FL",
    points: [
      "Managed AWS ML pipeline using Step Functions, Lambda, Kinesis, PySpark, S3, and SageMaker.",
      "Developed hybrid recommendation models (content + collaborative filtering) to improve user engagement.",
      "Delivered scalable ML features in an Agile MLOps environment.",
    ],
  },
];

const projects = [
  {
    title: "Trial Deputy Assistant (TDA)",
    subtitle: "Agentic RAG for high-stakes legal workflows",
    stack: "Azure Gov, RAG, OCR, Evaluation, SAFE AI",
    summary:
      "Production-oriented assistant for prosecutors that provides page-level cited answers across reports, transcripts, and exhibits.",
  },
  {
    title: "RA-FSM",
    subtitle: "Hallucination-resistant domain assistant",
    stack: "LLMs, Retrieval, Finite-State Control",
    summary:
      "Finite-state reliability loop (Relevance → Confidence → Knowledge) for budget-tunable accuracy and abstention behavior.",
  },
  {
    title: "CropCatalyst",
    subtitle: "UN + Salesforce Reboot the Earth Challenge",
    stack: "Scikit-learn, XGBoost, CatBoost",
    summary:
      "Crop-yield prediction and optimization assistant with actionable recommendations for farmers in native language contexts.",
    link: "https://github.com/vbhavsar16/CropCatalyst",
  },
  {
    title: "Flood Semantic Segmentation",
    subtitle: "Disaster Risk Monitoring",
    stack: "NVIDIA DALI, TAO, Triton, U-Net",
    summary:
      "Near real-time segmentation workflows for remote edge deployments supporting faster disaster response.",
  },
];

const publications = [
  "Bhavsar, V., & Jadamec, M. Dynamic variations in the zone of influence of the slab (in preparation), 2026.",
  "Bhavsar, V., Ereifej, J., Gurusami, A. Hallucination-Resistant, Domain-Specific Research Assistant with Self-Evaluation and Vector-Grounded Retrieval. arXiv:2510.02326, 2025.",
  "Bhavsar, V., Jadamec, M., Knepley, M. Influence of initial slab dip, plate interface coupling, and nonlinear rheology on dynamic weakening at the lithosphere-asthenosphere boundary. JGR Solid Earth, 2025.",
  "Bhavsar, V., Jadamec, M., Knepley, M. Effect of Plate Coupling and Initial Slab Dip on Dynamic Weakening in the Asthenosphere. AGU Fall Meeting Abstracts, 2022.",
];

function Section({ id, title, children }) {
  return React.createElement(
    "section",
    { id, className: "section" },
    React.createElement("h2", null, title),
    children,
  );
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "header",
      { className: "topbar" },
      React.createElement("a", { href: "#", className: "brand" }, "Vivek Bhavsar"),
      React.createElement(
        "nav",
        null,
        navLinks.map((link) =>
          React.createElement(
            "a",
            { key: link.id, href: `#${link.id}` },
            link.label,
          ),
        ),
      ),
    ),

    React.createElement(
      "main",
      { className: "container" },
      React.createElement(
        "section",
        { className: "hero" },
        React.createElement("img", { src: "profile.jpg", alt: "Vivek Bhavsar", className: "avatar" }),
        React.createElement(
          "div",
          null,
          React.createElement("p", { className: "eyebrow" }, "Applied Data Scientist | LLMs, RAG, Production ML"),
          React.createElement("h1", null, "Building reliable, auditable AI systems for high-stakes decisions."),
          React.createElement(
            "p",
            { className: "lead" },
            "I specialize in deploying production-grade ML and agentic RAG systems across cloud and enterprise settings, with emphasis on safety, measurable impact, and operational scale.",
          ),
          React.createElement(
            "div",
            { className: "cta" },
            React.createElement("a", { href: "CV.pdf", className: "btn btn-primary" }, "Download CV"),
            React.createElement("a", { href: "https://github.com/vbhavsar16", className: "btn", target: "_blank", rel: "noreferrer" }, "GitHub"),
            React.createElement("a", { href: "https://www.linkedin.com/in/vivekubuf/", className: "btn", target: "_blank", rel: "noreferrer" }, "LinkedIn"),
          ),
          React.createElement(
            "div",
            { className: "metrics" },
            React.createElement("span", null, "5+ years experience"),
            React.createElement("span", null, "70% efficiency improvement delivered"),
            React.createElement("span", null, "Ph.D. in Computation & Applied Mathematics"),
          ),
        ),
      ),

      React.createElement(
        Section,
        { id: "about", title: "About" },
        React.createElement(
          "p",
          null,
          "Based in Fremont, CA, I partner with cross-functional teams to build robust ML solutions spanning RAG, text analytics, recommendation systems, and distributed training. My work combines scientific rigor with practical product execution.",
        ),
      ),

      React.createElement(
        Section,
        { id: "experience", title: "Experience" },
        React.createElement(
          "div",
          { className: "cards" },
          experiences.map((exp) =>
            React.createElement(
              "article",
              { className: "card", key: exp.role + exp.company },
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

      React.createElement(
        Section,
        { id: "projects", title: "Selected Projects" },
        React.createElement(
          "div",
          { className: "cards grid-2" },
          projects.map((proj) =>
            React.createElement(
              "article",
              { className: "card", key: proj.title },
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
        { id: "publications", title: "Publications & Talks" },
        React.createElement(
          "ul",
          { className: "pubs" },
          publications.map((pub) => React.createElement("li", { key: pub }, pub)),
        ),
        React.createElement("p", { className: "meta" }, "Invited talks: GLY-326 Structure/Global Tectonics (UB, Fall 2022); GVG Seminar (UB, Spring 2022)."),
      ),

      React.createElement(
        Section,
        { id: "teaching", title: "Teaching" },
        React.createElement(
          "ul",
          null,
          React.createElement("li", null, "TA, Intro to Numerical Mathematics for Data Scientists (2021)"),
          React.createElement("li", null, "TA, Data Structures (2018–2019)"),
          React.createElement("li", null, "TA, Natural Hazards (2019–2020)"),
        ),
      ),

      React.createElement(
        Section,
        { id: "contact", title: "Contact" },
        React.createElement("p", null, "Fremont, CA"),
        React.createElement("p", null, React.createElement("a", { href: "mailto:imvivek1695@gmail.com" }, "imvivek1695@gmail.com")),
        React.createElement("p", null, "+1 (845) 821-0998"),
      ),
    ),

    React.createElement(
      "footer",
      { className: "footer" },
      `© ${new Date().getFullYear()} Vivek Bhavsar`
    ),
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
