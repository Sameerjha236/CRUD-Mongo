import React, { useState } from "react";
import Axios from "axios";
import Users from "./Users";
import "./App.css";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/insert", {
      fname,
      lname,
      number,
    });
    console.log("value send");
    setFname("");
    setLname("");
    setNumber("");
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lname">Number</label>
          <input
            type="number"
            name="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Users />
    </div>
  );
}

export default App;
