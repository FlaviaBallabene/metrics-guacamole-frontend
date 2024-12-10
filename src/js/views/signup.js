import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context); //access the store
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [roleId, setRoleId] = useState([]);  //array
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let success = await actions.signup(firstName, lastName, email, roleId);
    if (success) {
      navigate("/login");
    } else {
      alert("Signup failed. Please, try again.");
    }
  };

  useEffect(()=> {
   actions.getRoles()
  },[])

  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputFirstName" class="form-label">
          First Name
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          class="form-control"
          id="exampleInputFirstName"
          aria-describedby="firstNameHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputLastName" class="form-label">
          Last Name
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          class="form-control"
          id="exampleInputLastName"
          aria-describedby="lastNameHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <div class="form-floating">
          <select
            onChange={e => setRoleId(e.target.value)}
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
          >
            <option selected>Roles</option>
            {store.roles.map((item, index)=>{
              return (
                <option value={item.id}>{item.name}</option>
              )
            })}
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
