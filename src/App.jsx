import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Components/Create";
import Data from "./Components/Data";
import Update from "./Components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/users" element={<Data />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
