import React from "react";

// create our rroot component => App component


// Car component...
function Car({brand, color}) {
  return <div className="car">
    {`${color}, ${brand} `}
  </div>
}
function App() {

  return (
    <section className="main-container">
     <Car brand="Tesla" color="Silver"/>
    </section>
  );
}

export default App;
