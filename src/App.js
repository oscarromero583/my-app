import React, { useState } from "react";

//Loader component...
function Loader() {
  return <div className="loader">Loading...</div>;
}

//content component...
function Content() {
  return (
    <div className="content">
      <p>React is Great Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias omnis neque sapiente, quisquam, facere eos incidunt sequi nihil beatae animi, qui assumenda nesciunt nulla quibusdam ullam deserunt at iure? Qui.</p>
    </div>
  );
}

// create our rroot component => App component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Set a timeout to stimulate data loading...
  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  //Rendering...
  return <section className="main-container">
    {isLoading ? <Loader/> : <Content />}
  </section>;
};

export default App;
