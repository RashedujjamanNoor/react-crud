import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Data = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://669221f926c2a69f6e919f4e.mockapi.io/api/data/data")
      .then(function (res) {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios.delete(
      `https://669221f926c2a69f6e919f4e.mockapi.io/api/data/data/${id}`
    );
  };

  const handleEdit = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  return (
    <>
      <div className=" d-flex justify-content-between my-5 mx-5">
        <h1>Users Data From Database</h1>
        <Link to="/">
          <button className="btn btn-primary">Create</button>
        </Link>
      </div>

      <table className="table mt-5 ms-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((curElem, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{curElem.name}</td>
                  <td>{curElem.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          handleEdit(curElem.id, curElem.name, curElem.email);
                        }}
                      >
                        Edit
                      </button>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger ms-1"
                      onClick={() => handleDelete(curElem.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Data;
