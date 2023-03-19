import React from "react";
import ListRendering from "./ListRendering";

function Student() {
  function Add() {
    const ul = document.getElementById("Items");
    const li = document.createElement("li");
    let text = document.getElementById("text").value;
    li.appendChild(document.createTextNode(text));
    li.setAttribute("key", "22");
    ul.appendChild(li);
  }

  const names = ["Sherry", "Dawood", "Adil", "Ali"];
  let NameList = names.map((std, index) => <li key={index}>{std}</li>);

  return (
    <div>
      <ul id="Items">{NameList}</ul>
      <input type="text" name="" id="text" placeholder="Enter Student Name" />
      <br></br>
      <button id="Add" onClick={Add}>
        Add New Student
      </button>
    </div>
  );
}

export default Student;
