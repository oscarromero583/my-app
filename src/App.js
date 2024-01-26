import React from "react";

// create our rroot component => App component

// Car component...
function Car({ data }) {
  return <div className="car">{`${data.color}, ${data.brand}, ${data.year} `}</div>;
}
function App() {
  return (
    <section className="main-container">
      <Car
        data={{
          brand: "Ford",
          color: "Red",
          year: "2000",
        }}
      />
    </section>
  );
}

export default App;
