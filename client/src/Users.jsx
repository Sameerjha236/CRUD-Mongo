import React, { useState, useEffect } from "react";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/read")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [users, name]);

  const updHandler = (id) => {
    Axios.put("http://localhost:3001/update", {
      id,
      name,
    });
    console.log("values send");
  };

  const deleteHandler = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
    console.log("delete");
  };
  return (
    <div className="users">
      <h1>Users Data</h1>
      <div className="table">
        {users.map((user, key) => {
          const { firstName, lastName, number } = user;
          return (
            <div className="row" key={key}>
              <div>{firstName}</div>
              <div>{lastName}</div>
              <div>{number}</div>
              <div className="edit">
                <label htmlFor="upd">New Name :</label>
                <input
                  type="text"
                  name="upd"
                  id="upd"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button className="btn" onClick={() => updHandler(user._id)}>
                Update
              </button>
              <button className="btn" onClick={() => deleteHandler(user._id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
