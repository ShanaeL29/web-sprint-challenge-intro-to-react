import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState([]);
  const [error, setError] = useState("");

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people`)
      .then((res) => {
        console.log(res.data);
        setCharacterList(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Uh-Oh! We are working on this issue! Please try again soon!");
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">STAR WARS STARS</h1>
    </div>
  );
};

export default App;
