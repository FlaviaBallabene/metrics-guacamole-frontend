import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
const {store, actions} = useContext(Context) //access the store
const [email, setEmail]= useState("")
const [password, setPassword]= useState("")
const navigate = useNavigate()
const handleSubmit = async (e) =>{
  e.preventDefault()
  let success = await actions.login(email, password)
  if (success) {
    navigate("/")
  } else {
    alert ("Login failed. Please, try again.")
  }
}
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
