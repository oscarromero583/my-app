import React from "react";
import boardImage from "./board.jpg";

//create a component ......

function Greetings() {
  return <p>Hello there! Good morning</p>;
}

//Avatar component....
function Avatar() {
  return (
    <img
      className="card-image"
      src={boardImage}
      alt="avatar"
      style={{ width: 100 }}
    />
  );
}

//profile card....
function UserProfile() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Name: Romero</div>
      <div>Romero is a Good Sleeper</div>
    </div>
  );
}

//list Item component...
function ListComponent() {
  return <li>Tesla</li>
}


// create our rroot component => App component
function App() {
  const cars = ["Tesla", "Audi", "BMW", "Mercedes"];

  //create a list of cars....
  const listItems = cars.map(car => {
        return <li key={car}>{car}</li>
  })

  return (
      <ol>
        {listItems}
      </ol>
  );
}

export default App;