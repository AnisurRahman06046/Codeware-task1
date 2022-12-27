import "./App.css";
import { useState } from "react";

function App() {
  const [keys, setKeys] = useState([]);
  const handlePostData = () => {
    fetch("https://coderbyte.com/api/challenges/json/age-counting")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const mydata = data.data.split(",");
        console.log(mydata);
        const result = data.data
          .split(",")
          .map((x, i) => {
            if (x.trim() === "age=30") {
              return [i - 1];
            }
          })
          .filter((x) => x !== undefined)
          .map((x) => {
            return mydata[x].split("=")[1];
          });
        console.log(result);
        setKeys(result);
      });
  };
  console.log(keys);
  return (
    <div className="App">
      <h1>Age Counting</h1>
      <p>{keys}</p>
      <p>Array of keys length : {keys.length}</p>
      <button onClick={handlePostData}>Get the keys</button>
    </div>
  );
}

export default App;
