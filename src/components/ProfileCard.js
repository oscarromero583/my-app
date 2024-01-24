import React from "react";
import Avatar from "./Avatar";
import "../assets/style/card.css"
import "../assets/style/avatar.css"

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

export default UserProfile;