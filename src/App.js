import "./style.css";

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
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}

export default App;
