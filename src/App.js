import React from "react";
import ProfileCard from "./components/ProfileCard";
import userImage from "./user.jpeg";

// create our rroot component => App component
function App() {
  const users = [{
    name: "Oscar Obeta",
    bio: "I am a web Developer",
    avatar: userImage,
  }, {
      name: "Oscar Obeta",
      bio: "I am a web Developer",
      avatar: userImage,
    }]

    const usersList = users.map( user => {
      return <div>
        <img src="{user.avatar}" alt="Avatar" style={{width: 100}} />
        <h3>{user.name}</h3>
        <p>{user.bio}</p>
      </div>
    })

    return(
  <section>{usersList}</section>
)

  };

export default App;




// const cars = ['Tesla', 'Audi', 'BMW', 'Mercedes', 'Volvo'];
//   const listItems = cars.map(item => {
//     return <li key={item}>{item}</li>
//   });
//   return (
//     <ol>{listItems}</ol>
//   )