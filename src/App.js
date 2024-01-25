import React from "react";

// create our rroot component => App component
function App() {
  //Render...


//Handle Change...
const handleChange = (event) => {
  event.preventDefault();
  console.log("Value :", event.target.value)
};


  return (
    <section className="form-container">
      <form action="" className="form">
      <input onChange={handleChange} type="text" placeholder="Enter you name" />
      <input onChange={handleChange} type="text" placeholder="Enter your email" />
      <input onChange={handleChange} type="text" placeholder="Enter your Address" />
      <input onChange={handleChange} type="text" placeholder="Enter your Phone number" />
      <button type="submit">Submit</button>
    </form>
    </section>
  );
}

export default App;
