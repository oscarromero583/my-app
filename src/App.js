import React, { useState } from "react";

// create our rroot component => App component
function App() {
  const [state, setState] = useState("Magic is here");

  // handle mouse over...
  const handleMouseOver = () => {
    setState("Welcome Home!");
  };
  setTimeout(() => {
    setState("Magic is here");
  }, 1000 )


  //Render...handleMouseOver

  return (
    <section className="main-conrainer">
      <h1 onMouseOver={handleMouseOver} className="hover-me">
        {state}
      </h1>
    </section>
  );
}

export default App;
