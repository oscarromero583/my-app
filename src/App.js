import React from "react";

// create our rroot component => App component
function App() {
  // handle button click ...
  const handleClick = (event) => {
    console.log("Button Clicked!")
  };
  return (
    <section>
      <button onClick={handleClick}>
        Click Me
      </button>
    </section>
  );
}

export default App;