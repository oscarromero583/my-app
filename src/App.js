import React from "react";

// create our rroot component => App component
function App() {
  //state...
  //const [counter, setCounter] = useState(0)

  // Handle Increament...
  const handleIncreament = (event) => {
    event.preventDefault();
    console.log("Increamenting...");
  };

  //Handle Decreament...
  const handleDecreament = (event) => {
    event.preventDefault();
    console.log("Decreamenting...");
  };

  //Render...
  return (
    <section className="counter-container">
      <div className="counter-label">0</div>
      <button className="action-btn" onClick={handleIncreament}>
        Increament
      </button>
      <button className="action-btn" onClick={handleDecreament}>
        Decreament{" "}
      </button>
    </section>
  );
}

export default App;
