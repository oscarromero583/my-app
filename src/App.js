import React from "react";

// create our rroot component => App component
function App() {
  //Render...

  return (
    <section className="form-container">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const { name, email, address, tel } = event.target.elements;
          console.log(name.value, email.value, address.value, tel.value);
        }}
        action=""
        className="form"
      >
        <input type="text" placeholder="Enter you name" name="name" />
        <input type="text" placeholder="Enter your email" name="email" />
        <input type="text" placeholder="Enter your Address" name="address" />
        <input type="tel" placeholder="Enter your Phone number" name="tel" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default App;
