import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  // Define the initial state of the excuse
  const [excuse, setExcuse] = useState("");

  // Define a function that fetches an excuse from the API
  const fetchExcuse = (excuse) => {
    axios
      // Make a GET request to the API endpoint
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then((res) => {
        // Set the fetched excuse in the component's state
        setExcuse(res.data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1> Generate an excuse</h1>

      <button onClick={() => fetchExcuse("party")}> Party</button>
      <button onClick={() => fetchExcuse("family")}> Family </button>
      <button onClick={() => fetchExcuse("office")}> Office </button>

      <p> {excuse}</p>
    </div>
  );
}

export default App;
