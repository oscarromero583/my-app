import React from "react";
import boardImage from "./board.jpg";

//create a component ......

function Greetings() {
  return <p>Hello there! Good morning</p>;
}


//Avatar component....
function Avatar () {
  return (
    <img
        className="card-image"
        src={boardImage}
        alt="avatar"
        style={{ width: 100 }}
      />
  )
}


//profile card....
function UserProfile() {
  return (
    <div className="card">
      <Avatar/>
      <div className="card-name">Name: Romero</div>
      <div>Romero is a Good Sleeper</div>
    </div>
  );
}

//create our root component => App component

function App() {
  return (
    <section className="main-page">
      <Greetings />
      <UserProfile />
    </section>
  );
}

export default App;
