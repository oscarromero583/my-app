import React from "react";
import boardImage from "./board.jpg";

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

export default Avatar; 