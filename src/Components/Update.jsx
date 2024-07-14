// import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://669221f926c2a69f6e919f4e.mockapi.io/api/data/data/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/users");
      });
  };
  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className=" rounded-4 p-5 bg-light"
          style={{
            width: "600px",
            height: "400px",
            border: "2px solid gray",
          }}
        >
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update
          </button>
          <Link to="/users">
            <button className="btn btn-secondary mx-2">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Update;
