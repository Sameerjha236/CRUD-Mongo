import React, { useState, useEffect } from "react";
import Axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="users">
      <div className="table">
        <div className="row header">
          <div className="cell">First Name</div>
          <div className="cell">Last Name</div>
          <div className="cell">Age</div>
          <div className="cell">Gender</div>
        </div>
        {users.map((user, key) => {
          const { firstName, lastName, age, gender } = user;
          return (
            <div className="row" key={key}>
              <div className="cell">{firstName}</div>
              <div className="cell">{lastName}</div>
              <div className="cell">{age}</div>
              <div className="cell">{gender}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
