import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Thoughts from "./Components/Thoughts.jsx";
import Footer from "./Components/Footer.jsx";
import { useState } from "react";
import SubmitModalThought from "./Components/SubmitModalThought.jsx";

const App = () => {
  let getThoughts = JSON.parse(localStorage.getItem("thoughts"));
  const getToggle = JSON.parse(localStorage.getItem("toggle"));
  const isUser = JSON.parse(localStorage.getItem("isUser"));
  const [thoughts, setThougths] = useState(
    isUser
      ? getThoughts
      : [
          {
            id: 1,
            thought: "Sample Thought #1",
            datetime: "Tue Sep 28 2021 @ 12:50:41",
          },
          {
            id: 2,
            thought: "Sample Thought #2",
            datetime: "Tue Sep 28 2021 @ 12:50:47",
          },
          {
            id: 3,
            thought: "Sample Thought #3",
            datetime: "Tue Sep 28 2021 @ 12:50:53",
          },
          {
            id: 4,
            thought: "Sample Thought #4",
            datetime: "Tue Sep 28 2021 @ 12:50:47",
          },
          {
            id: 5,
            thought: "Sample Thought #5",
            datetime: "Tue Sep 28 2021 @ 12:50:53",
          },
        ]
  );

  const [readMode, setReadMode] = useState(
    getToggle === "null" ? false : getToggle
  );

  localStorage.setItem("thoughts", JSON.stringify(thoughts));

  const deleteThought = (id) => {
    localStorage.setItem("isUser", JSON.stringify(true));
    setThougths(thoughts.filter((thoughts) => thoughts.id !== id));
    localStorage.setItem("thoughts", JSON.stringify(thoughts));
  };

  const addThought = (addThought) => {
    localStorage.setItem("isUser", JSON.stringify(true));
    const id = thoughts.length + 1;
    addThought = { id, ...addThought };
    setThougths([...thoughts, addThought]);
    localStorage.setItem("thoughts", JSON.stringify(thoughts));
  };

  return (
    <div
      className={
        readMode ? " bg-dark text-light pb-2" : " bg-light text-dark pb-2"
      }
      style={{ minHeight: "100vh" }}
    >
      <Navbar
        buttonModal="Add A Thought"
        onAdd={addThought}
        readMode={readMode}
        setReadMode={setReadMode}
      />
      <SubmitModalThought onAdd={addThought} readMode={readMode} />
      <div>
        {thoughts.length > 0 ? (
          <Thoughts
            thoughts={thoughts}
            onDelete={deleteThought}
            readMode={readMode}
          />
        ) : (
          <div className="container mt-4 text-secondary text-center">
            <p className="text-center p-4">
              No Thoughts Left... Wanna Add One ?
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
