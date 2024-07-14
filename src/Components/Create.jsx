import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = "Access-Control-Allow-Origin";
  const navigate = useNavigate();

  const handleSave = () => {
    axios
      .post("https://669221f926c2a69f6e919f4e.mockapi.io/api/data/data", {
        name: name,
        email: email,
        header,
      })
      .then(function () {
        navigate("/users");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const clearHandle = () => {
    setEmail("");
    setName("");
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
          <h1>Create</h1>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="name"
              className="form-control"
              id="exampleInputEmail1"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-danger mx-2" onClick={clearHandle}>
            Clear
          </button>
          <Link to="/users">
            <button className="btn btn-info">See Users</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Create;
