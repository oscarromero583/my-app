import React from "react";
import boardImage from "./board.jpg";

//create a component ......

// function Greetings() {
//   return <p>Hello there! Good morning</p>;
// }

// //Avatar component....
// function Avatar() {
//   return (
//     <img
//       className="card-image"
//       src={boardImage}
//       alt="avatar"
//       style={{ width: 100 }}
//     />
//   );
// }

// //profile card....
// function UserProfile() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="card-name">Name: Romero</div>
//       <div>Romero is a Good Sleeper</div>
//     </div>
//   );
// }

//A list item component....
function ListItem() {
  return <li>Tesla</li>;
}

//create our root component => App component

function App() {
  // list of items...
  const items = ["Tesla", "Audi", "BMW", "Mercedes", "Toyota"];

  //create a list of list items...
  const listItems = items.map((item) => {
    return <li>{item}</li>;
  });

  return <ol>{listItems}</ol>;
}

export default App;

// import React from "react";
// import boardImage from "./board.jpg";

// //create a component ......

// function Greetings() {
//   return <p>Hello there! Good morning</p>;
// }

// //Avatar component....
// function Avatar() {
//   return (
//     <img
//       className="card-image"
//       src={boardImage}
//       alt="avatar"
//       style={{ width: 100 }}
//     />
//   );
// }

// //profile card....
// function UserProfile() {
//   return (
//     <div className="card">
//       <Avatar />
//       <div className="card-name">Name: Romero</div>
//       <div>Romero is a Good Sleeper</div>
//     </div>
//   );
// }

// //A list item component....
// function listItems() {
//   return <li>Tesla</li>;
// }

// //create our root component => App component

// function App() {
//   // List of items
//   const items = ["Tesla", "Audi", "Mercedes", "TOYOTA"];

//   const ListItems = items.map((item, index) => (
//     <ListItems key={index} item={item} />
//   ));

//   return (
//     <section className="main-page">
//       <div>
//         <ol>{listItems}</ol>
//       </div>
//       <Greetings />
//       <UserProfile />
//     </section>
//   );
// }

// export default App;
