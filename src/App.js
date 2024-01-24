import React from "react";

// create our rroot component => App component
function App() {
  return (
    <section>
      <button onClick={(event) => console.log("Hello you clicked me")}>
        Click Me
      </button>
    </section>
  );
}

export default App;