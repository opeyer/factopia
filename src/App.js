import "./style.css";

const CATEGORIES = [
  { name: "technology", color: "#94b2e2" },
  { name: "science", color: "#6ca080" },
  { name: "finance", color: "#bbd8ba" },
  { name: "culture", color: "#d2bed4" },
  { name: "entertainment", color: "#d8aabf" },
  { name: "health", color: "#d8aaaa" },
  { name: "history", color: "#d8c6aa" },
  { name: "news", color: "#9d94b6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const appTitle = "Factopia";

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68px" width="68px" alt="Factopia logo" />
          <h1>{appTitle}</h1>
        </div>

        <button className="btn btn-large btn-open">Share</button>
      </header>

      <ShareForm />

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function ShareForm() {
  return <form className="fact-form">Share a fact</form>;
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  // Temporary variable
  const facts = initialFacts;
  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <li className="fact">
            <p>
              {fact.text}
              <a className="source" href={fact.source} target="_blank">
                [SOURCE]
              </a>
            </p>
            <span className="tag" style={{ backgroundColor: "#94b2e2" }}>
              {fact.category}
            </span>
            <div className="vote-buttons">
              <button>👍 {fact.votesInteresting}</button>
              <button>🤯 {fact.votesMindblowing}</button>
              <button>⛔️ {fact.votesFalse}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
