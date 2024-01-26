import React from "react";

// create our rroot component => App component

// Car component...
function Car({
  brand, color, year,
}) {
  return <div className="car">
    {`${brand}, ${color}, ${year}`}
  </div>;
}

function App() {
  const data = {
    brand: "Ford",
    color: "Red",
    year: "2000"
  }
  return (
    <section className="main-container">
      <Car {...data} />
    </section>
  );
}

export default App;
