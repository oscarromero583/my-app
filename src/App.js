import React from "react";

// create our rroot component => App component

// Car component...
function Car({ data }) {
  return (
    <div className="car">{`${data.brand}, ${data.color}, ${data.year}`}</div>
  );
}

function App() {
  const cars = [
    {
      brand: "Ford",
      color: "Red",
      year: "2000",
    },
    {
      brand: "Tesla",
      color: "Blue",
      year: "1999",
    },
    {
      brand: "Audi",
      color: "Black",
      year: "2028",
    },
  ];

  //list of cars...
  const listOfCars = cars.map((car) => {
    return <Car data={car} />;
  });

  return <section  className="main-container">{listOfCars}</section>;
}

export default App;
