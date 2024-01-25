import React from "react";

// create our rroot component => App component
function App() {
  //state...
//const [counter, setCounter] = useState(0)
  // handle button click ...

  const handleClick = (event) => {
    console.log("Button Clicked!");
  };
  return (
    <section className="counter-container">
      <div className="counter-label">0</div>
      <button className="action-btn">Increament</button>
      <button className="action-btn">Decreament </button>
    </section>
  );
}

export default App;
