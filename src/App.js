import React from "react";

// create our rroot component => App component
function App() {
  //Render...

  return (
    <section className="main-conrainer">
      <h1 onMouseOver={(event) => {
        console.log("YOu are hovering over me!")
      }} className="hover-me">Hello World!</h1>
    </section>
  );
}

export default App;
